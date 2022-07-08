/** @jsxImportSource @emotion/react */
import legoImage from "../assets/LEGO-Star-Wars.jpg";
import MortalKombat from "../assets/Mortal-Kombat.jpg";

import { css } from "@emotion/react";

const gameStyle = {
  self: css({
    padding: "0",
    cursor: "pointer",
  }),
  image: css({
    width: "100%",
  }),
};

export const GameImage = () => {
  return (
    <div css={gameStyle.self}>
      <img src={MortalKombat} alt="Lego Star Wars" css={gameStyle.image} />
    </div>
  );
};
