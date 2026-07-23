import {
  Home,
  User,
  Landmark,
  Briefcase,
  Wrench,
  Settings,
  LayoutDashboard,
  Users,
  FileBarChart,
} from "lucide-react";

export type WorkspaceType = "personal" | "congregation";

export interface NavigationItem {
  label: string;
  path: string;
  icon: React.ElementType;
}

export interface NavigationGroup {
  workspace: WorkspaceType;
  title: string;
  items: NavigationItem[];
}

export const navigation: NavigationGroup[] = [
  {
    workspace: "personal",
    title: "Personal",
    items: [
      {
        label: "Home",
        path: "/",
        icon: Home,
      },
      {
        label: "Personal",
        path: "/personal",
        icon: User,
      },
      {
        label: "Meetings",
        path: "/meetings",
        icon: Landmark,
      },
      {
        label: "Ministry",
        path: "/ministry",
        icon: Briefcase,
      },
      {
        label: "Tools",
        path: "/tools",
        icon: Wrench,
      },
      {
        label: "Settings",
        path: "/settings",
        icon: Settings,
      },
    ],
  },
  {
    workspace: "congregation",
    title: "Congregation",
    items: [
      {
        label: "Dashboard",
        path: "/congregation",
        icon: LayoutDashboard,
      },
      {
        label: "Publishers",
        path: "/congregation/publishers",
        icon: Users,
      },
      {
        label: "Reports",
        path: "/congregation/reports",
        icon: FileBarChart,
      },
    ],
  },
];