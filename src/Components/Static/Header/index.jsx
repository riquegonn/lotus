import React from "react";
import styles from "./styles.module.css";
import Logo from "../../../assets/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import useMedia from "../../../Hooks/useMedia";
import OutsideClickHandler from "react-outside-click-handler";

const index = () => {
  const mobile = useMedia("(max-width:40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" end>
          <img src={Logo} alt="" />
        </NavLink>
        {mobile && (
          <OutsideClickHandler onOutsideClick={() => setMobileMenu(false)}>
            <button
              className={`${styles.mobileButton} ${
                mobileMenu && styles.active
              }`}
              aria-label="Menu"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenu(!mobileMenu);
              }}
            ></button>
          </OutsideClickHandler>
        )}
        <ul
          className={`${mobile ? styles.navMobile : styles.nav} ${
            mobileMenu && styles.navMobileActive
          }`}
        >
          <li>
            <NavLink to="caloriasDiarias">Calorias diárias</NavLink>
          </li>
          <li>
            <NavLink to="macronutrientes">Macronutrientes</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default index;
