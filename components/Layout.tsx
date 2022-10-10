import Navbar from "./Navbar";
import Footer from "./Footer";
import { AppProps } from "./types/props";
import {useState} from "react";

const Layout = ({ children }: AppProps) => {
  const [darkToggle, setDarkToggle] = useState<boolean>(false)

  return (
    <div className="font-serif flex flex-col min-h-screen">
      <div
        className={`${
          darkToggle && 'dark'
        }`}
      >
        <Navbar>
          <label className="toggleDarkBtn">
            <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)}/>
            <span className="slideBtnTg round"/>
          </label>
        </Navbar>
      <main className="flex-1">{children}</main>
      <Footer />
      </div>
    </div>
  );
};

export default Layout;
