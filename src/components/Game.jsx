/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const gameStyle = {
  self: css({
    padding: "0",
  }),
  image: css({
    width: "100%",
  }),
};

export const GameImage = ({ itemList }) => {
  return (
    <div css={gameStyle.self}>
      {itemList && (
        <img
          src={itemList.imageUrl}
          alt={itemList.imageName}
          css={gameStyle.image}
        />
      )}
    </div>
  );
};
