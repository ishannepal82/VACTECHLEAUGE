import { Map, Wind, Menu, Bell, LayoutDashboard } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full px-6 py-3 bg-primary/95 backdrop-blur-md shadow-lg border-b border-white/10 sticky top-0 z-[1000]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
       
        <Link to="/dashboard" className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors">
            <Wind className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-white tracking-tight leading-none">
              Breathe<span className="text-blue-200">Map</span>
            </h1>
            <span className="text-[10px] text-blue-100/70 font-medium uppercase tracking-widest">
              Maps that Care about your Lungs
            </span>
          </div>
        </Link>

        
        <nav className="hidden md:flex items-center gap-8">
          <CustomNavLink to="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <CustomNavLink to="/maps" icon={<Map size={18} />} label="Live Map" />
          <CustomNavLink to="/alerts" icon={<Bell size={18} />} label="Alerts" />
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:block px-4 py-2 text-sm font-semibold text-primary bg-white rounded-full hover:bg-blue-50 transition-all active:scale-95 shadow-md">
            Profile
          </button>
          <button className="p-2 text-white md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

// Helper component for React Router links
function CustomNavLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => `
        flex items-center gap-2 text-sm font-medium transition-all duration-200 border-b-2 py-1
        ${isActive 
          ? 'text-white border-white' 
          : 'text-blue-100/80 border-transparent hover:text-white hover:border-white/30'}
      `}
    >
      {icon}
      {label}
    </NavLink>
  );
}