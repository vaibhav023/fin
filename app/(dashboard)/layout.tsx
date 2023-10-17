import DashboardNavbar from "@/components/shared/navbar/DashboardNavbar";
import Navbar from "@/components/shared/navbar/Navbar";
import Sidebar from "@/components/shared/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative flex flex-row">
      <Sidebar />
      <div className="flex-1">
        <DashboardNavbar />
        <div>{children}</div>
      </div>
    </main>
  );
};

export default Layout;
