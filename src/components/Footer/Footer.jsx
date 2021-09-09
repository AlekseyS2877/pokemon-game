import React from "react";
import footerStyles from "./Footer.module.css";

const Footer = () => {
   return (
      <footer>
         <div className={footerStyles.wrapper}>
            <h3>THANKS FOR VISITING</h3>
            <p>© 2021 #ReactMarathon.</p>
         </div>
      </footer>
   );
};

export default Footer;
