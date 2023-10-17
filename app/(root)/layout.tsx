import Navbar from "@/components/shared/navbar/Navbar";
import Footer from"@/components/Footer"
import Building from "@/components/Building"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <section className="flex flex-col">{children}</section>
      <Building></Building>
      <Footer/>
    </main>
  );
};

export default Layout;
