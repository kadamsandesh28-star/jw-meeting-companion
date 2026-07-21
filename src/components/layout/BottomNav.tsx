import {
  Home,
  User,
  Landmark,
  Briefcase,
  Settings as SettingsIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/personal", icon: User, label: "Personal" },
  { to: "/meeting", icon: Landmark, label: "Meeting" },
  { to: "/ministry", icon: Briefcase, label: "Ministry" },
  { to: "/settings", icon: SettingsIcon, label: "Settings" },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-white/90 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/90">
      <div className="grid grid-cols-5">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center py-3 transition ${
                  isActive
                    ? "text-indigo-600"
                    : "text-slate-500 hover:text-indigo-500"
                }`
              }
            >
              <Icon size={20} />
              <span className="mt-1 text-xs">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}