/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { DropdownMenu } from "./DropdownMenu";

import { getCoords } from "../services/firebase";

import { css } from "@emotion/react";

const gameStyle = {
  self: css({
    padding: "0",
  }),
  image: css({
    width: "100%",
    cursor: "crosshair",
  }),
};

export const GameImage = ({ itemList, setMenuCoords, menuCoords }) => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const handleImageClick = (e) => {
    //get the location of click
    const { pageY, pageX } = e;
    setShowDropdownMenu(!showDropdownMenu);
    setMenuCoords({ pageX, pageY });
  };

  const handleDropdownMenuClick = async (e) => {
    setShowDropdownMenu(!showDropdownMenu);
    //get a relative number to total screen
    const relx = menuCoords.pageX / screen.availWidth;
    const rely = menuCoords.pageY / screen.availHeight;

    //get cordinates from firebase
    const coords = await getCoords(itemList.id, e.target.id);

    let x = Math.abs(relx - coords[0].X) < 0.01;
    let y = Math.abs(rely - coords[0].Y) < 0.04;

    if (x && y) {
      console.log("You found");
    } else {
      console.log("keep looking");
    }
  };
  return (
    <div css={gameStyle.self}>
      {itemList && (
        <img
          src={itemList.imageUrl}
          alt={itemList.imageName}
          css={gameStyle.image}
          onClick={handleImageClick}
        />
      )}

      <DropdownMenu
        showDropdownMenu={showDropdownMenu}
        menuCoords={menuCoords}
        handleDropdownMenuClick={handleDropdownMenuClick}
        itemList={itemList && itemList.itemList}
      />
    </div>
  );
};
