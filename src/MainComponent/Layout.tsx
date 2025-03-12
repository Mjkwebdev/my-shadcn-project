import { ReactNode } from "react";
import SideBar from "./SideBar"; // Make sure this import is correct

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex gap-6">
      <div className="w-[18%]"><SideBar /></div> 
      <div className="w-[82%]">
        <header>My Header</header>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
