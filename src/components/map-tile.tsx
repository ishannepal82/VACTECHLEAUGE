import { MapContainer, TileLayer, Polyline, Popup, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface Route {
  pollutionScore: number;
  path: [number, number][];
}

interface MapProps {
  routes: Route[];
  location: [number, number];
}

function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 14);
  }, [center, map]);
  return null;
}

export default function MapComponent({ routes, location }: MapProps) {
  const getStyle = (score: number) => ({
    color: score < 50 ? "#22c55e" : score < 100 ? "#f97316" : "#ef4444",
    weight: 7,
    opacity: 0.8,
    lineJoin: 'round' as const,
  });

  return (
    <MapContainer
      center={location}
      zoom={13}
      className="h-full w-full z-0"
      zoomControl={false} 
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      
      <MapUpdater center={location} />

      <Marker position={location} icon={icon}>
        <Popup>You are here</Popup>
      </Marker>

      {routes.map((route, idx) => (
        <Polyline 
          key={idx} 
          positions={route.path} 
          pathOptions={getStyle(route.pollutionScore)}
        >
          <Popup>
            <div className="text-sm font-sans">
              <span className="text-gray-500 font-bold block uppercase text-[10px]">Air Quality</span>
              <span className="text-lg font-bold" style={{ color: getStyle(route.pollutionScore).color }}>
                Score: {route.pollutionScore}
              </span>
            </div>
          </Popup>
        </Polyline>
      ))}
    </MapContainer>
  );
}