import React from "react";
import PropTypes from "prop-types";
import layoutStyles from "./Layout.module.css";

const Layout = ({ title, descr, urlBg = "", colorBg = "" }) => {
   console.log(urlBg);
   return (
      <section
         className={layoutStyles.root}
         style={{ background: colorBg, backgroundImage: `url(${urlBg})` }}
      >
         <div className={layoutStyles.wrapper}>
            <article>
               <div className={layoutStyles.title}>
                  <h3>{title}</h3>
                  <span className={layoutStyles.separator}></span>
               </div>
               <div className={`${layoutStyles.desc} ${layoutStyles.full}`}>
                  <p>{descr}</p>
               </div>
            </article>
         </div>
      </section>
   );
};

Layout.propTypes = {
   title: PropTypes.string.isRequired,
   descr: PropTypes.string.isRequired,
   urlBg: PropTypes.string,
   colorBg: PropTypes.string,
};

export default Layout;
