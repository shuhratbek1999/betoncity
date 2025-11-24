import { useEffect, useRef, useState } from "react";

export default function Address() {
  const mapRef = useRef(null);
  const map = useRef(null);
  const layers = useRef({});
  const [mode, setMode] = useState("dark"); // DEFAULT DARK

  useEffect(() => {
    loadYandex().then(initMap);
  }, []);

  const loadYandex = () =>
    new Promise((resolve) => {
      if (window.ymaps3) return resolve();
      const script = document.createElement("script");
      script.src =
        "https://api-maps.yandex.ru/v3/?apikey=d8d80a96-bfba-4810-baaf-e4a249cb1729&lang=ru_RU";
      script.onload = resolve;
      document.body.appendChild(script);
    });

  const initMap = async () => {
    await window.ymaps3.ready;

    const {
      YMap,
      YMapDefaultSchemeLayer,
      YMapDefaultSatelliteLayer,
      YMapDefaultFeaturesLayer,
      YMapMarker,
    } = window.ymaps3;

    // --- CREATE MAP ---
    map.current = new YMap(mapRef.current, {
      location: { center: [37.62, 55.75], zoom: 9 },
      theme: "dark",
    });

    // --- LAYERS ---
    layers.current.dark = new YMapDefaultSchemeLayer({
      visible: true,
      customization: [
        { tags: { any: ["landscape"] }, stylers: { color: "#1c1c1e" } },
        { tags: { any: ["road"] }, stylers: { color: "#2b2b2d" } },
        { tags: { any: ["water"] }, stylers: { color: "#11151c" } },
        { tags: { any: ["building"] }, stylers: { color: "#2c2c2e" } },
      ],
    });

    layers.current.light = new YMapDefaultSchemeLayer({ visible: false });

    layers.current.satellite = new YMapDefaultSatelliteLayer({
      visible: false,
    });

    layers.current.hybrid = new YMapDefaultSatelliteLayer({
      visible: false,
      features: true,
    });

    // Correct layer order
    map.current.addChild(layers.current.light);
    map.current.addChild(layers.current.dark);
    map.current.addChild(layers.current.satellite);
    map.current.addChild(layers.current.hybrid);

    map.current.addChild(new YMapDefaultFeaturesLayer());

    // --- MARKERS ---
    const points = [
      [37.65, 55.75],
      [37.69, 55.79],
      [37.6, 55.7],
      [37.55, 55.72],
      [37.5, 55.68],
    ];

    points.forEach((coords) => {
      const el = document.createElement("div");

      el.style.cssText = `
        width: 32px;
        height: 32px;
        background: #ffcc00;
        border: 3px solid white;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        position: relative;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      `;

      const dot = document.createElement("div");
      dot.style.cssText = `
        width: 10px;
        height: 10px;
        background: black;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      `;

      el.appendChild(dot);
      el.style.zIndex = 20;

      map.current.addChild(new YMapMarker({ coordinates: coords }, el));
    });
  };

  // --- CHANGE MODE ---
  const changeMode = (value) => {
    setMode(value);

    Object.values(layers.current).forEach((l) => l.update({ visible: false }));
    layers.current[value].update({ visible: true });
  };

  // --- ZOOM BUTTONS (React — ishlaydi!) ---
  const zoomIn = () => {
    if (!map.current) return;

    const { center, zoom } = map.current._props.location;

    map.current.update({
      location: { center, zoom: zoom + 1 },
    });
  };

  const zoomOut = () => {
    if (!map.current) return;

    const { center, zoom } = map.current._props.location;

    map.current.update({
      location: { center, zoom: zoom - 1 },
    });
  };

  return (
    <div className="relative w-full h-[720px]" id="Контакты">
      <h1 className="text-32 lg:text-5xl text-[#272727] font-space-grotesk text-center my-10 font-bold">
        Адреса заводов
      </h1>
      {/* LEFT ZOOM UI — SENING VARIANTING */}
      <div className="absolute left-4 top-60 -translate-y-1/2 flex flex-col items-center z-30">
        <button
          onClick={zoomIn}
          className="w-8 h-8 bg-gray-100 font-black text-3xl rounded-md shadow flex items-center justify-center"
        >
          +
        </button>

        <div className="w-1.5 h-20 bg-[#686666]"></div>

        <div className="w-8 h-4 bg-white rounded-md shadow flex items-center justify-center text-[10px]">
          ····
        </div>

        <div className="w-1.5 h-20 bg-[#686666]"></div>

        <button
          onClick={zoomOut}
          className="w-8 h-8 bg-gray-100 font-black rounded-md shadow flex items-center justify-center text-3xl"
        >
          –
        </button>
      </div>

      {/* SELECT */}
      <div className="absolute top-24 right-4 z-30">
        <select
          value={mode}
          onChange={(e) => changeMode(e.target.value)}
          className="bg-white px-4 py-2 shadow text-sm font-medium"
        >
          <option value="light">🌎 Схема</option>
          <option value="satellite">🛰 Спутник</option>
          <option value="hybrid">🌍 Гибрид</option>
        </select>
      </div>

      {/* MAP */}
      <div
        ref={mapRef}
        className="w-full h-full overflow-hidden"
        style={{
          filter: mode === "dark" ? "brightness(0.75)" : "none",
        }}
      />
    </div>
  );
}
