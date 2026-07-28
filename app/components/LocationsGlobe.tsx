"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";

// ── Earth texture URL ────────────────────────────────────────────────────────
const EARTH_TEXTURE_URL =
  "https://raw.githubusercontent.com/mrdoob/three.js/" +
  "master/examples/textures/planets/earth_atmos_2048.jpg";

// ── Globe radius constant ────────────────────────────────────────────────────
const GLOBE_RADIUS = 65;

// ── Location data ────────────────────────────────────────────────────────────
const LOCATIONS = [
  { name: "Egypt", lat: 26.0, lon: 30.0, color: "#3b82f6", region: "North Africa" },
  { name: "UAE", lat: 24.0, lon: 54.0, color: "#10b981", region: "Middle East" },
  { name: "India", lat: 21.0, lon: 78.0, color: "#f97316", region: "South Asia" },
  { name: "South Africa", lat: -30.0, lon: 25.0, color: "#eab308", region: "Southern Africa" },
];

// ── Helper: convert lat/lon to 3‑D position ──────────────────────────────────
function latLonToVec3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180;
  const x = radius * Math.cos(latRad) * Math.sin(lonRad);
  const y = radius * Math.sin(latRad);
  const z = radius * Math.cos(latRad) * Math.cos(lonRad);
  return new THREE.Vector3(x, y, z);
}

// ── Component ────────────────────────────────────────────────────────────────
const LocationsGlobe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelContainerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // ── Three.js scene setup ──────────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current || !labelContainerRef.current) return;

    const timer = setTimeout(() => {
      if (!containerRef.current || !labelContainerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      // Scene & camera
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
      camera.position.set(120, 60, 220);

      // WebGL renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      containerRef.current.appendChild(renderer.domElement);

      // CSS2D label renderer
      const labelRenderer = new CSS2DRenderer();
      labelRenderer.setSize(width, height);
      labelRenderer.domElement.style.position = "absolute";
      labelRenderer.domElement.style.top = "0";
      labelRenderer.domElement.style.pointerEvents = "none";
      labelContainerRef.current.appendChild(labelRenderer.domElement);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
      scene.add(ambientLight);

      const sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
      sunLight.position.set(5, 3, 5);
      scene.add(sunLight);

      // Earth globe
      const loader = new THREE.TextureLoader();
      const earthTexture = loader.load(EARTH_TEXTURE_URL);
      earthTexture.colorSpace = THREE.SRGBColorSpace;

      const globeGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
      const globeMat = new THREE.MeshPhongMaterial({
        map: earthTexture,
        shininess: 10,
      });
      const earth = new THREE.Mesh(globeGeo, globeMat);
      scene.add(earth);

      // Marker group attached to globe
      const markerGroup = new THREE.Group();
      earth.add(markerGroup);

      const labels: CSS2DObject[] = [];

      LOCATIONS.forEach((loc) => {
        const surfacePos = latLonToVec3(loc.lat, loc.lon, GLOBE_RADIUS + 1.2);

        // Dot marker
        const dotGeo = new THREE.SphereGeometry(2.2, 16, 16);
        const dotMat = new THREE.MeshBasicMaterial({ color: loc.color });
        const dot = new THREE.Mesh(dotGeo, dotMat);
        dot.position.copy(surfacePos);
        markerGroup.add(dot);

        // Ring around dot
        const ringGeo = new THREE.RingGeometry(3.5, 6, 32);
        const ringMat = new THREE.MeshBasicMaterial({
          color: loc.color,
          transparent: true,
          opacity: 0.5,
          side: THREE.DoubleSide,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.copy(surfacePos);
        ring.lookAt(new THREE.Vector3(0, 0, 0));
        markerGroup.add(ring);

        // CSS2D label
        const labelDiv = document.createElement("div");
        labelDiv.className = "label-node";
        labelDiv.style.color = "white";
        labelDiv.style.fontFamily = "Inter, sans-serif";
        labelDiv.style.fontSize = "14px";
        labelDiv.style.fontWeight = "800";
        labelDiv.style.padding = "8px 16px";
        labelDiv.style.background = "rgba(2,6,23,0.95)";
        labelDiv.style.backdropFilter = "blur(12px)";
        labelDiv.style.borderRadius = "12px";
        labelDiv.style.border = `2px solid ${loc.color}`;
        labelDiv.style.boxShadow = `0 10px 40px -10px ${loc.color}`;
        labelDiv.style.whiteSpace = "nowrap";
        labelDiv.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
        labelDiv.style.pointerEvents = "none";
        labelDiv.textContent = loc.name;

        const label = new CSS2DObject(labelDiv);
        label.position.copy(surfacePos).multiplyScalar(1.03);
        markerGroup.add(label);
        labels.push(label);
      });

      // Orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.8;
      controls.update();
      controlsRef.current = controls;

      // Animation loop
      const cameraPos = new THREE.Vector3();
      const labelPos = new THREE.Vector3();
      const earthPos = new THREE.Vector3();

      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();

        camera.getWorldPosition(cameraPos);
        earth.getWorldPosition(earthPos);
        const distToCenter = earthPos.distanceTo(cameraPos);

        labels.forEach((label) => {
          label.getWorldPosition(labelPos);
          const dist = labelPos.distanceTo(cameraPos);

          if (dist > distToCenter + 15) {
            label.element.style.opacity = "0";
            label.element.style.visibility = "hidden";
            label.element.style.transform = "scale(0.7)";
          } else {
            label.element.style.opacity = "1";
            label.element.style.visibility = "visible";
            label.element.style.transform = "scale(1)";
          }
        });

        renderer.render(scene, camera);
        labelRenderer.render(scene, camera);
      };
      animate();

      // Resize handler
      const handleResize = () => {
        if (!containerRef.current) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        if (w && h) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
          labelRenderer.setSize(w, h);
        }
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, 100);

    return () => {
      clearTimeout(timer);
      if (containerRef.current) containerRef.current.innerHTML = "";
      if (labelContainerRef.current) labelContainerRef.current.innerHTML = "";
    };
  }, []);

  // Pause auto-rotate on hover
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !isHovered;
    }
  }, [isHovered]);

  // ── JSX ───────────────────────────────────────────────────────────────────
  return (
    <section
      className="relative overflow-hidden"
      id="strategic-locations"
      style={{
        background:
          "linear-gradient(135deg, #002855 0%, #003d7a 40%, #005baa 80%, #0072CE 100%)",
      }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#f5c800] via-[#0072CE] to-[#f5c800]" />

      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute -bottom-48 -left-32 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-[1700px] mx-auto px-6 sm:px-8 relative z-10 py-10">

        {/* ── Section header ── */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5c800]/15 text-[#f5c800] font-black text-[10px] mb-4 uppercase tracking-[0.25em] border border-[#f5c800]/30"
          >
            <Globe size={13} />
            <span>Global Presence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3 leading-tight"
          >
            Strategic Hubs &amp;{" "}
            <span className="text-[#f5c800]">Global Network</span>
          </motion.h2>

          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2px] w-10 bg-[#f5c800]/50 rounded-full" />
            <span className="h-[2px] w-5  bg-[#f5c800]/30 rounded-full" />
          </div>

          <p className="text-blue-200/80 text-sm max-w-xl mx-auto leading-relaxed">
            Delivering premium Sodium &amp; Potassium Silicate solutions across
            four continents with precision logistics and reliable support.
          </p>
        </div>

        {/* ── Globe + Cards ── */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-28">

          {/* Globe canvas */}
          <div
            className="relative flex-shrink-0 flex items-center justify-center overflow-visible"
            style={{ width: "460px", height: "400px", maxWidth: "100%" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              ref={containerRef}
              className="w-full h-full cursor-grab active:cursor-grabbing transform-gpu"
            />
            <div
              ref={labelContainerRef}
              className="absolute inset-0 pointer-events-none"
            />
            {/* Glow under globe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#0072CE]/20 blur-[80px] rounded-full pointer-events-none z-[-1]" />
          </div>

          {/* Right panel */}
          <div className="flex flex-col gap-5 w-full lg:w-[420px]">

            {/* 2×2 location cards */}
            <div className="grid grid-cols-2 gap-4">
              {LOCATIONS.map((loc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={[
                    "group relative flex flex-col gap-3 p-4 rounded-2xl cursor-default overflow-hidden",
                    "border-2 border-slate-200",
                    "bg-white hover:bg-[#0072CE]",
                    "shadow-md hover:shadow-[0_12px_40px_rgba(0,114,206,0.45)]",
                    "transition-all duration-300 ease-out",
                  ].join(" ")}
                >
                  {/* Icon row */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:bg-white/20 group-hover:shadow-none"
                      style={{
                        background: `${loc.color}18`,
                        border: `1.5px solid ${loc.color}50`,
                        color: loc.color,
                      }}
                    >
                      <MapPin
                        size={20}
                        strokeWidth={2.5}
                        className="group-hover:text-white transition-colors duration-300"
                      />
                    </div>

                    {/* Live pulse indicator */}
                    <div className="relative w-2.5 h-2.5">
                      <span
                        className="absolute inset-0 rounded-full animate-ping opacity-40"
                        style={{ backgroundColor: loc.color }}
                      />
                      <span
                        className="relative block w-2.5 h-2.5 rounded-full group-hover:bg-white transition-colors duration-300"
                        style={{
                          backgroundColor: loc.color,
                          boxShadow: `0 0 6px ${loc.color}`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-black group-hover:text-white font-black text-base leading-snug transition-colors duration-300 tracking-tight">
                      {loc.name}
                    </h4>
                    <p
                      className="text-[10px] uppercase font-extrabold tracking-[0.18em] mt-1 transition-colors duration-300"
                      style={{ color: loc.color }}
                    >
                      <span className="group-hover:text-blue-200 transition-colors duration-300">
                        {loc.region}
                      </span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-between gap-2 px-5 py-4 rounded-2xl border border-[#f5c800]/40 bg-[#001e4d]/90 shadow-[0_4px_24px_rgba(245,200,0,0.1)]"
            >
              {[
                { value: "4", label: "Continents" },
                { value: "20+", label: "Countries" },
                { value: "24/7", label: "Support" },
              ].map((stat, i) => (
                <React.Fragment key={stat.label}>
                  {i > 0 && (
                    <div className="h-9 w-px bg-white/15 shrink-0" />
                  )}
                  <div className="text-center flex-1">
                    <div className="text-[#f5c800] font-black text-[22px] leading-none tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-blue-200 text-[9px] uppercase font-bold tracking-[0.15em] mt-1">
                      {stat.label}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f5c800]/40 to-transparent" />
    </section>
  );
};

export default LocationsGlobe;
