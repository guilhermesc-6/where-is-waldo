/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const headerStyle = {
  self: css({
    width: "100%",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
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
};

export const Header = ({ list, isGameOver, time }) => {
  return (
    <header css={headerStyle.self}>
      <h1>header</h1>
      <div css={headerStyle.characters}>
        {list &&
          list.map((item) => {
            return (
              <div
                key={item.id}
                css={css`
                  opacity: ${item.found ? "0.5" : "1"};
                `}
              >
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </div>
            );
          })}
      </div>
    </header>
  );
};
