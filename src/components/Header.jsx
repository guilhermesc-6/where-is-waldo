/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import bb8 from "../assets/bb-8.png";
import vader from "../assets/Darth_vader.png";
import luke from "../assets/luke.png";

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
        width: "60px",
      }),
    }),
  }),
  time: css({
    fontSize: "1.3rem",
  }),
};

export const Header = () => {
  return (
    <header css={headerStyle.self}>
      <h1>header</h1>
      <div css={headerStyle.characters}>
        <div>
          <img src={bb8} alt="" />
          <span>Bb 8</span>
        </div>
        <div>
          <img src={vader} alt="" />

          <span>Darth Vader</span>
        </div>
        <div>
          <img src={luke} alt="" />
          <span>Luke Skywalker</span>
        </div>
      </div>
      <span css={headerStyle.time}>00.00.00</span>
    </header>
  );
};
