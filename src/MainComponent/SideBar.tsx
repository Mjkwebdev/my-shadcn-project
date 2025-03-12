import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Home",
    icon: PresentationChartBarIcon,
    path: "/home",
  },
  {
    title: "Book a Sunbed",
    icon: ShoppingBagIcon,
    path: "/book-sunbed",
  },
  {
    title: "My Bookings",
    icon: InboxIcon,
    path: "/my-booking",
  },
  {
    title: "Profile",
    icon: UserCircleIcon,
    path: "/profile",
  },
  {
    title: "Settings",
    icon: Cog6ToothIcon,
    path: "/settings",
  },
  {
    title: "Support & FAQs",
    icon: PowerIcon,
    path: "/support-&-faqs",
  },
];

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path

  return (
    <div className="h-[calc(100vh-2rem)] w-full rounded-[11px] m-4 p-4 bg-[#f5f5f5] shadow-lg">
      <div className="flex items-center justify-center mb-4">
        <img src="/src/assets/Logo.svg" alt="Logo" />
      </div>
      <ul className="space-y-2 mt-20">
        {menuItems.map(
          ({ title, icon: Icon, path}, index) => {
            const isActive = location.pathname === path; // Check if the current path matches the menu item path

            return (
              <li
                key={index}
                className={`flex items-center px-4 py-2 rounded-lg cursor-pointer transition ${
                  isActive
                    ? "bg-[#ad8330] text-white hover:bg-[#ad8330]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => navigate(path)}
              >
                <Icon className="h-5 w-5 mr-3" />
                <span className="font-[Poppins,Sans-serif] font-normal text-sm">
                  {title}
                </span>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default SideBar;
