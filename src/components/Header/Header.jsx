import React from "react";
import PropTypes from "prop-types";
import headerStyles from "./Header.module.css";

const Header = ({ title, descr }) => (
   <header className={headerStyles.root}>
      <div className={headerStyles.forest} />
      <div className={headerStyles.container}>
         <h1>{title}</h1>
         <p>{descr}</p>
      </div>
   </header>
);

Header.propTypes = {
   title: PropTypes.string.isRequired,
   descr: PropTypes.string.isRequired,
};

export default Header;
