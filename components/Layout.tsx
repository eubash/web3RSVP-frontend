import Navbar from "./Navbar";
import Footer from "./Footer";
import { AppProps } from "./types/props";

const Layout = ({ children }: AppProps) => {
  return (
    <div className="font-serif flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;