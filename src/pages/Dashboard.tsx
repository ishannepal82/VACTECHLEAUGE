import { 
  LayoutDashboard, 
  Map as MapIcon, 
  Settings, 
  BarChart3, 
  TrendingUp, 
  AlertCircle,
  Wind
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { Header } from "../components/Header";
import MapComponent from "../components/map-tile";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-900">

      <div className="flex-1 flex flex-col relative overflow-y-auto">
        <div className="sticky top-0 z-10 bg-primary">
            <Header />
        </div>
        <main className="p-6 space-y-6">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Environmental Overview</h2>
              <p className="text-slate-500">Real-time air quality data for your current location.</p>
            </div>
            <div className="flex gap-3">
               <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold shadow-sm hover:bg-slate-50">
                Export Report
               </button>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
              title="Current AQI" 
              value="42" 
              status="Good" 
              color="text-green-500" 
              icon={<Wind className="text-green-500" />} 
            />
            <StatCard 
              title="PM2.5 Level" 
              value="12.4" 
              status="Moderate" 
              color="text-orange-500" 
              icon={<TrendingUp className="text-orange-500" />} 
            />
            <StatCard 
              title="Active Alerts" 
              value="0" 
              status="Clear" 
              color="text-blue-500" 
              icon={<AlertCircle className="text-blue-500" />} 
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-[400px]">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                <span className="font-bold text-slate-700">Live Coverage</span>
                <span className="flex items-center gap-1 text-xs text-green-600 font-bold uppercase">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Live
                </span>
              </div>

              <div className="h-[350px]">
                <MapComponent routes={[]} location={[37.7749, -122.4194]} />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-bold text-slate-800 mb-4">Nearby Areas</h3>
              <div className="space-y-4">
                <LocationRow name="Central Park" aqi={32} />
                <LocationRow name="Downtown Industrial" aqi={112} />
                <LocationRow name="Westside Suburbs" aqi={45} />
                <LocationRow name="East Harbor" aqi={67} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


function SidebarLink({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
      active ? 'bg-primary text-white shadow-blue-200 shadow-lg' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
    }`}>
      {icon}
      {label}
    </a>
  );
}

function StatCard({ title, value, status, color, icon }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-3xl font-bold mt-1">{value}</h3>
        <p className={`text-xs font-bold mt-1 uppercase tracking-wider ${color}`}>{status}</p>
      </div>
      <div className="p-3 bg-slate-50 rounded-xl">
        {icon}
      </div>
    </div>
  );
}

function LocationRow({ name, aqi }: { name: string, aqi: number }) {
  const getDotColor = (val: number) => val > 100 ? 'bg-red-500' : val > 50 ? 'bg-orange-500' : 'bg-green-500';
  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
      <span className="text-sm font-semibold text-slate-700">{name}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold">{aqi}</span>
        <div className={`w-2 h-2 rounded-full ${getDotColor(aqi)}`} />
      </div>
    </div>
  );
}