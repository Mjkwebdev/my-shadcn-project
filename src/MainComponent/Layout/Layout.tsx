import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex gap-3">
      <div className="w-[18%]"><SideBar /></div>
      <div className="w-[82%] p-4">
        <Header />
        <main>
          <Outlet /> {/* This will render nested routes inside Layout */}
        </main>
      </div>
    </div>
  );
}

export default Layout;
