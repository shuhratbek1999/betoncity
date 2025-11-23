import { useEffect, useRef, useState } from "react";

export default function Adress() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!window.__ymaps_v2__) {
      const script = document.createElement("script");
      script.src =
        "https://api-maps.yandex.ru/2.1/?apikey=d8d80a96-bfba-4810-baaf-e4a249cb1729&lang=ru_RU";
      script.onload = () => {
        window.__ymaps_v2__ = true;
        window.ymaps.ready(initMap);
      };
      document.body.appendChild(script);
    } else {
      window.ymaps.ready(initMap);
    }
  }, []);

  const initMap = () => {
    if (!mapRef.current || mapInstance.current) return;

    const map = new window.ymaps.Map(
      mapRef.current,
      {
        center: [55.751244, 37.618423],
        zoom: 9,
        controls: ["zoomControl"],
      },
      {
        suppressMapOpenBlock: true,
        zoomControlPosition: { left: 15, top: 100 },
      }
    );

    mapInstance.current = map;

    // ⭐ MARKERLAR
    const points = [
      { coords: [55.7522, 37.6156] },
      { coords: [55.7897, 37.679] },
      { coords: [55.7, 37.62] },
      { coords: [55.585, 37.6] },
      { coords: [56.3952, 38.7122] },
      { coords: [55.74, 37.5] },
      { coords: [55.68, 37.8] },
    ];

    points.forEach((p) => {
      const placemark = new window.ymaps.Placemark(
        p.coords,
        {},
        { preset: "islands#yellowIcon" }
      );
      map.geoObjects.add(placemark);
    });
  };

  // ⭐ DARK MODE STYLE
  const darkStyle = [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: { color: "#0b0b0f" },
    },
    { featureType: "landscape", stylers: { color: "#0b0b0f" } },
    { featureType: "road", stylers: { color: "#1c1f33" } },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: { color: "#6a7cff" },
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: { color: "#2a2d45" },
    },
    { featureType: "poi", stylers: { color: "#14141a" } },
    { featureType: "poi.park", stylers: { color: "#0f1e14" } },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: { color: "#3cb371" },
    },
    { featureType: "water", stylers: { color: "#0a0e19" } },
    { featureType: "administrative", stylers: { color: "#1f1f26" } },
    { featureType: "transit", stylers: { color: "#1a1e2d" } },
  ];

  const changeLayer = (type) => {
    const map = mapInstance.current;
    if (!map) return;

    // avval style'ni o‘chirib qo‘yamiz
    map.options.set("yandexMapStyle", null);

    if (type === "map") {
      map.setType("yandex#map");
    }
    if (type === "satellite") {
      map.setType("yandex#satellite");
    }
    if (type === "hybrid") {
      map.setType("yandex#hybrid");
    }
    if (type === "dark") {
      map.setType("yandex#map");
      map.options.set("yandexMapStyle", darkStyle);
    }

    setOpen(false);
  };

  return (
    <div className="relative w-full h-[800px]">
      <h1 className="text-center text-4xl font-bold h-28">Адреса заводов</h1>

      {/* SLOI SELECT */}
      <div className="absolute top-32 right-6 z-50">
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 bg-white shadow-lg px-5 py-2 rounded-lg cursor-pointer"
        >
          <span className="text-sm font-medium">Слои</span>
        </div>

        {open && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden w-40 text-sm">
            <div
              className="px-3 py-2 hover:bg-gray-100"
              onClick={() => changeLayer("map")}
            >
              🗺 Схема
            </div>
            <div
              className="px-3 py-2 hover:bg-gray-100"
              onClick={() => changeLayer("satellite")}
            >
              🛰 Спутник
            </div>
            <div
              className="px-3 py-2 hover:bg-gray-100"
              onClick={() => changeLayer("hybrid")}
            >
              🌍 Гибрид
            </div>
            <div
              className="px-3 py-2 hover:bg-gray-100"
              onClick={() => changeLayer("dark")}
            >
              🌑 Тёмная тема
            </div>
          </div>
        )}
      </div>

      {/* MAP */}
      <div className="w-full h-[700px]">
        <div ref={mapRef} className="w-full h-full overflow-hidden"></div>
      </div>
    </div>
  );
}
