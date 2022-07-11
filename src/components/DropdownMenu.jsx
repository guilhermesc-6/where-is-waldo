/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const menuStyle = {
  self: css({
    width: "100px",
    position: "absolute",
    backgroundColor: "#fffffa",
    borderRadius: "5px",
  }),
  list: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    listStyle: "none",
    li: css({
      width: "100%",
      textAlign: "center",
      cursor: "pointer",
      padding: "0.2rem 0",
      "&:hover": css({
        backgroundColor: "#17181f",
        color: "#fffffa",
      }),
    }),
  }),
};

export const DropdownMenu = ({
  showDropdownMenu,
  menuCoords,
  handleDropdownMenuClick,
  itemList,
}) => {
  const notFound = itemList ? itemList.filter((item) => !item.found) : "";
  return (
    <div
      css={css`
        ${menuStyle.self};
        display: ${showDropdownMenu ? "auto" : "none"};
        top: ${menuCoords.pageY}px;
        left: ${menuCoords.pageX + 10}px;
      `}
    >
      <ul css={menuStyle.list}>
        {itemList &&
          notFound.map((item) => {
            return (
              <li key={item.id} id={item.id} onClick={handleDropdownMenuClick}>
                {item.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
