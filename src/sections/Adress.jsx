import { useEffect, useRef, useState } from "react";

export default function FactoryMap() {
  const mapRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [mapType, setMapType] = useState("yandex#map");
  const API_KEY = "YOUR_API_KEY_HERE";

  useEffect(() => {
    if (!document.getElementById("yandex-map-script")) {
      const script = document.createElement("script");
      script.id = "yandex-map-script";
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=${API_KEY}&lang=ru_RU`;
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      if (window.ymaps && !window.myMap) initMap();
    }
  }, []);

  useEffect(() => {
    if (window.myMap) {
      const type =
        mapType === "map"
          ? "yandex#map"
          : mapType === "satellite"
          ? "yandex#satellite"
          : "yandex#hybrid";
      window.myMap.setType(type);
    }
  }, [mapType]);

  const initMap = () => {
    window.ymaps.ready(() => {
      if (window.myMap) return;
      window.myMap = new window.ymaps.Map(mapRef.current, {
        center: [55.751244, 37.618423],
        zoom: 9,
        type: "yandex#map",
        controls: ["zoomControl", "fullscreenControl"],
      });

      const points = [
        [55.751244, 37.618423],
        [55.82, 37.5],
        [55.66, 37.44],
        [55.62, 37.48],
        [55.75, 37.7],
        [56.4, 38.71],
      ];

      const svg = encodeURIComponent(`
        <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24'>
          <circle cx='12' cy='10' r='6' fill='#FFD23F' stroke='#C47E00' stroke-width='1.5'/>
          <path d='M12 18c0-1.5 0-3 0-3' fill='none' stroke='#C47E00' stroke-width='1.2' stroke-linecap='round'/>
        </svg>`);

      points.forEach((coords) => {
        const placemark = new window.ymaps.Placemark(
          coords,
          {},
          {
            iconLayout: "default#image",
            iconImageHref: `data:image/svg+xml;utf8,${svg}`,
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40],
            iconContentLayout: null,
          }
        );
        window.myMap.geoObjects.add(placemark);
      });
    });
  };

  return (
    <div className="relative w-full h-[600px]" id="Контакты">
      <h1 className="text-32 lg:text-5xl text-center font-bold text-[#272727] font-space-grotesk">
        Адреса заводов
      </h1>
      <div className="absolute top-16 right-4 z-50">
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 bg-white shadow-lg px-3 py-2 rounded-lg cursor-pointer select-none"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#444"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 12 12 17 22 12" />
            <polyline points="2 17 12 22 22 17" />
          </svg>
          <span className="text-sm font-medium">Слои</span>
        </div>

        {open && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden w-40 text-sm">
            <div
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setMapType("map");
                setOpen(false);
              }}
            >
              🗺 Схема
            </div>
            <div
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setMapType("satellite");
                setOpen(false);
              }}
            >
              🛰 Спутник
            </div>
            <div
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setMapType("hybrid");
                setOpen(false);
              }}
            >
              🌍 Гибрид
            </div>
            <div
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => alert("Панорамы hali qo‘shilmagan")}
            >
              📷 Панорамы
            </div>
          </div>
        )}
      </div>

      <div className="w-full h-[calc(600px - 100px)] map-dark-filter relative">
        <div className="map-dark-overlay" aria-hidden="true" />
        <div ref={mapRef} className="w-full h-full" />
      </div>
    </div>
  );
}
