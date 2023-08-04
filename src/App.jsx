import { BiChevronRight, BiHomeAlt, BiMoon } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineAnalytics } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaWalletSolid } from "react-icons/lia";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";

function App() {
  const [close, setClose] = useState(false);
  const [dark, setDark] = useState(false);
  const handleClick = () => {
    setClose(!close);
  };
  const handleDark = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? "dark-container" : "container"}>
      <nav
        className={`${dark ? "dark-sidebar" : "sidebar"} ${
          close && "close-sidebar"
        }`}
      >
        <header className={dark ? "dark-header" : "header"}>
          <div className={dark ? "dark-image-text" : "image-text"}>
            <span className={dark ? "dark-image" : "image"}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png"
                alt="LOGO"
              />
            </span>
            <div
              className={dark ? "dark-header-text text" : "header-text text"}
            >
              <span className={dark ? "dark-name" : "name"}>Vite Sidebar</span>
              <span className={dark ? "dark-profession" : "profession"}>
                Frontend Developer
              </span>
            </div>
          </div>
          <button
            onClick={handleClick}
            className={dark ? "dark-toggle" : "toggle"}
          >
            <BiChevronRight className={close ? "close" : "open"} />
          </button>
        </header>
        <div className={dark ? "dark-menu-bar" : "menu-bar"}>
          <ul className={dark ? "dark-menu-links" : "menu-links"}>
            <li className={dark ? "dark-menu-link" : "menu-link"}>
              <a href="#">
                <BiHomeAlt className="icon" />
                <span className={dark ? "dark-nav-text text" : "nav-text text"}>
                  Anasayfa
                </span>
              </a>
            </li>
            <li className={dark ? "dark-menu-link" : "menu-link"}>
              <a href="#">
                <MdOutlineAnalytics className="icon" />
                <span className={dark ? "dark-nav-text text" : "nav-text text"}>
                  Satışlar
                </span>
              </a>
            </li>
            <li className={dark ? "dark-menu-link" : "menu-link"}>
              <a href="#">
                <IoMdNotificationsOutline className="icon" />
                <span className={dark ? "dark-nav-text text" : "nav-text text"}>
                  Bildirimler
                </span>
              </a>
            </li>
            <li className={dark ? "dark-menu-link" : "menu-link"}>
              <a href="#">
                <SlGraph className="icon" />
                <span className={dark ? "dark-nav-text text" : "nav-text text"}>
                  Analizler
                </span>
              </a>
            </li>
            <li className={dark ? "dark-menu-link" : "menu-link"}>
              <a href="#">
                <AiOutlineHeart className="icon" />
                <span className={dark ? "dark-nav-text text" : "nav-text text"}>
                  Beğeniler
                </span>
              </a>
            </li>
            <li className={dark ? "dark-menu-link" : "menu-link"}>
              <a href="#">
                <LiaWalletSolid className="icon" />
                <span className={dark ? "dark-nav-text text" : "nav-text text"}>
                  Cüzdan
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className={dark ? "dark-bottom-content" : "bottom-content"}>
          <ul>
            <li className={dark ? "dark-logout" : "logout"}>
              <CiLogout className="icon" />
              <span className={dark ? "dark-text" : "text"}>Çıkış Yap</span>
            </li>
            <li className={dark ? "dark-mode" : "mode"}>
              <BiMoon className="icon" />
              <span className={dark ? "dark-text" : "text"}>Koyu Tema</span>
              <div className={dark ? "dark-toggle-switch" : "toggle-switch"}>
                <span
                  onClick={handleDark}
                  className={dark ? "dark-switch" : "switch"}
                ></span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
