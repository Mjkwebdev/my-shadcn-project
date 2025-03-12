import { ReactNode } from "react";
import SideBar from "./SideBar"; // Make sure this import is correct
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex gap-3">
      <div className="w-[18%]"><SideBar /></div> 
      <div className="w-[82%] p-4">
       <Header/>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
