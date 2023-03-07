import { BiUserCircle, BiCartAlt } from "react-icons/bi";
import React from "react";

// Navbar component
const NavBar = () => {
  return (
    <section id={styles.headerContainer}>
      <h2 id={styles.welcomeTitle}>ORNG</h2>
      <section>
        <input
          type="search"
          id={styles.searchBar}
          placeholder="🔍   Qué estás buscando?"
        />
      </section>
      <button id={styles.btnUser}>
        <BiUserCircle color="rgba(43, 43, 43, 1)" />
      </button>
      <button id={styles.btnCart}>
        <BiCartAlt color="rgba(43, 43, 43, 1)" />
      </button>
    </section>
  );
};

export default NavBar;
