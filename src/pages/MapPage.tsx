import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import MapComponent from "../components/map-tile";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";

type LocationState = {
  lat: number;
  lon: number;
};

const KATHMANDU_DEFAULT: LocationState = { lat: 27.7172, lon: 85.324 };

export default function MapPage() {
  const [location, setLocation] = useState<LocationState>(KATHMANDU_DEFAULT);
  const [loading, setLoading] = useState(true);

  const routes = [
    { pollutionScore: 35, path: [[27.7172, 85.324], [27.721, 85.332]] as [number, number][] },
    { pollutionScore: 85, path: [[27.716, 85.320], [27.710, 85.315]] as [number, number][] },
    { pollutionScore: 160, path: [[27.725, 85.340], [27.730, 85.350]] as [number, number][] },
  ];

  useEffect(() => {
    if (!navigator.geolocation) {
      toast.error("Browser doesn't support geolocation");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        setLoading(false);
        toast.success("Location synced");
      },
      () => {
        toast.error("Permission denied. Using default map.");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  return (
    <div className="relative flex flex-col h-screen w-screen overflow-hidden bg-slate-50">
      <Toaster position="top-center" />
      
      
      <div className="absolute top-0 w-full z-[1000] bg-primary w-full">
        <Header />
      </div>

      
      <div className="absolute bottom-10 left-6 z-[500] pointer-events-none">
        <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-2xl border border-white pointer-events-auto min-w-[180px]">
          <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Live Air Quality</h4>
          <div className="space-y-4">
            <LegendRow color="bg-green-500" label="Healthy" range="0-50" />
            <LegendRow color="bg-yellow-500" label="Moderate" range="51-100" />
            <LegendRow color="bg-orange-500" label="Sensitive" range="101-150" />
            <LegendRow color="bg-red-500" label="Unhealthy" range="151-200" />
            <LegendRow color="bg-red-900" label="Very Unhealthy" range="200-300" />
            <LegendRow color="bg-black" label="Hazardous" range="300+" />
          </div>
        </div>
      </div>

      <main className="flex-1 w-full h-full relative">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-500 font-medium">Fetching GPS coordinates...</p>
          </div>
        ) : (
          <MapComponent routes={routes} location={[location.lat, location.lon]} />
        )}
      </main>
    </div>
  );
}

function LegendRow({ color, label, range }: { color: string; label: string; range: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className={`w-3 h-3 rounded-full ring-4 ring-opacity-20 ${color.replace('bg-', 'ring-')} ${color}`} />
      <div>
        <p className="text-sm font-bold text-slate-700 leading-none">{label}</p>
        <p className="text-[10px] text-slate-400 font-semibold">{range} AQI</p>
      </div>
    </div>
  );
}