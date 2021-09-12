import React from "react";
import PropTypes from "prop-types";
import layoutStyles from "./Layout.module.css";

const Layout = ({ title, urlBg, colorBg, children }) => (
   <section
      className={layoutStyles.root}
      style={{ background: colorBg, backgroundImage: `url(${urlBg})` }}
   >
      <div className={layoutStyles.wrapper}>
         <article>
            <div className={layoutStyles.title}>
               <h3>{title}</h3>
               <span className={layoutStyles.separator} />
            </div>
            <div className={`${layoutStyles.desc} ${layoutStyles.full}`}>
               <p>{children}</p>
            </div>
         </article>
      </div>
   </section>
);

Layout.propTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired,
   urlBg: PropTypes.string,
   colorBg: PropTypes.string,
};

Layout.defaultProps = {
   urlBg: "",
   colorBg: "",
};

export default Layout;
