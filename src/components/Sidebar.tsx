import { LayoutDashboard, Pill, ShoppingCart, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeView: string;
  setActiveView: (view: "dashboard" | "medicines" | "sales" | "users") => void;
}

export const Sidebar = ({ activeView, setActiveView }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "medicines", label: "Medicines", icon: Pill },
    { id: "sales", label: "Sales", icon: ShoppingCart },
    { id: "users", label: "Users", icon: Users },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border">
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          PharmaCare
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Management System</p>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              // onClick={() => setActiveView(item.id as any)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300",
                "hover:bg-muted",
                activeView === item.id && "bg-primary text-primary-foreground shadow-md"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
