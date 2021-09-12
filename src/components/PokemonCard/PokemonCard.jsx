import React, { useState } from "react";
import PropTypes from "prop-types";
import pokemonCardStyles from "./PokemonCard.module.css";
import cardBackSideImg from "../../img/card-back-side.jpg";

const PokemonCard = ({ id, name, type, img, values, tabIndex }) => {
   const [activeFlag, setActiveFlag] = useState(false);

   const pokemonCardOnClick = () => setActiveFlag(!activeFlag);

   return (
      <div
         className={pokemonCardStyles.root}
         onClick={pokemonCardOnClick}
         onKeyPress={pokemonCardOnClick}
         role="button"
         tabIndex={tabIndex}
      >
         <div
            className={`${pokemonCardStyles.pokemonCard} ${
               activeFlag ? pokemonCardStyles.active : ""
            }`}
         >
            <div className={pokemonCardStyles.cardFront}>
               <div className={`${pokemonCardStyles.wrap} ${pokemonCardStyles.front}`}>
                  <div className={`${pokemonCardStyles.pokemon} ${pokemonCardStyles[type]}`}>
                     <div className={pokemonCardStyles.values}>
                        <div className={`${pokemonCardStyles.count} ${pokemonCardStyles.top}`}>
                           {values.top}
                        </div>
                        <div className={`${pokemonCardStyles.count} ${pokemonCardStyles.right}`}>
                           {values.right}
                        </div>
                        <div className={`${pokemonCardStyles.count} ${pokemonCardStyles.bottom}`}>
                           {values.bottom}
                        </div>
                        <div className={`${pokemonCardStyles.count} ${pokemonCardStyles.left}`}>
                           {values.left}
                        </div>
                     </div>
                     <div className={pokemonCardStyles.imgContainer}>
                        <img src={img} alt={name} />
                     </div>
                     <div className={pokemonCardStyles.info}>
                        <span className={pokemonCardStyles.number}>#{id}</span>
                        <h3 className={pokemonCardStyles.name}>{name}</h3>
                        <small className={pokemonCardStyles.type}>
                           Type: <span>{type}</span>
                        </small>
                     </div>
                  </div>
               </div>
            </div>

            <div className={pokemonCardStyles.cardBack}>
               <div className={`${pokemonCardStyles.wrap} ${pokemonCardStyles.back}`}>
                  <img src={cardBackSideImg} alt="Сard Backed" />
               </div>
            </div>
         </div>
      </div>
   );
};

PokemonCard.propTypes = {
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   img: PropTypes.string.isRequired,
};

export default PokemonCard;
