/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import chewbacca from "../assets/chewbacca.png";
import vader from "../assets/Darth_vader.png";
import yoda from "../assets/lego-yoda.png";
import edBoom from "../assets/ed-boom.png";
import liuKang from "../assets/liu-kang.png";
import scorpions from "../assets/scorpion.png";

const headerStyle = {
  self: css({
    width: "100%",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5rem",
    backgroundColor: "#17181f",
    color: "#fff",
  }),
  characters: css({
    display: "flex",
    alignItems: "center",
    gap: "15px",
    div: css({
      display: "flex",
      alignItems: "center",
      gap: "5px",
      fontSize: "1.2rem",
      overflow: "hidden",
      img: css({
        height: "75px",
      }),
    }),
  }),
  time: css({
    fontSize: "1.3rem",
  }),
};

export const Header = ({ itemsList }) => {
  console.log(itemsList);
  return (
    <header css={headerStyle.self}>
      <h1>header</h1>
      <div css={headerStyle.characters}>
        {itemsList &&
          itemsList.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </div>
            );
          })}
      </div>
      <span css={headerStyle.time}>00.00.00</span>
    </header>
  );
};
