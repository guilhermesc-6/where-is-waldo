/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { DropdownMenu } from "./DropdownMenu";

import { getCoords } from "../services/firebase";

import { css } from "@emotion/react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const gameStyle = {
  self: css({
    padding: "0",
  }),
  image: css({
    width: "100%",
    cursor: "crosshair",
  }),
};

export const GameImage = ({
  itemList,
  setMenuCoords,
  menuCoords,
  setLevelInfo,
}) => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const toggleFound = (itemid) => {
    //return a new Object with the change in item.found
    const updatedImage = {
      ...itemList,
      itemList: itemList.itemList.map((item) => {
        if (item.id === itemid) {
          return { ...item, found: true };
        } else {
          return item;
        }
      }),
    };
    setLevelInfo(updatedImage);
  };

  const handleImageClick = (e) => {
    //get the location of click
    const { pageY, pageX } = e;
    setShowDropdownMenu(!showDropdownMenu);
    setMenuCoords({ pageX, pageY });
  };

  const handleDropdownMenuClick = async (e) => {
    setShowDropdownMenu(!showDropdownMenu);
    const itemId = e.target.id;
    try {
      //get a relative number to total screen
      const relx = menuCoords.pageX / screen.availWidth;
      const rely = menuCoords.pageY / screen.availHeight;

      //get cordinates from firebase
      const coords = await getCoords(itemList.id, itemId);

      let x = Math.abs(relx - coords[0].X) < 0.01;
      let y = Math.abs(rely - coords[0].Y) < 0.04;

      if (x && y) {
        console.log("You found");
        Toastify({
          text: `You found ${e.target.innerText} !`,
          duration: 3000,
          gravity: "top",
          position: "center",
          style: {
            background: "rgb(66,106,90)",
            background:
              "linear-gradient(90deg, rgba(66,106,90,1) 0%, rgba(31,107,39,1) 100%)",
          },
        }).showToast();

        toggleFound(itemId);
      } else {
        console.log("keep looking");
        Toastify({
          text: "Wrong target! keep looking.",
          duration: 3000,
          gravity: "top",
          position: "center",
          style: {
            background: "rgb(226,10,10)",
            background:
              "linear-gradient(90deg, rgba(226,10,10,0.7902758515515581) 0%, rgba(255,128,0,0.9051217899269083) 100%)",
          },
        }).showToast();
      }
    } catch (error) {}
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
