/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

const modalStyle = {
  self: css({
    minHeight: "100%",
    width: "100%",
    backgroundColor: "#774a5578",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
  }),
  card: css({
    width: "auto",
    display: "flex",
    padding: "2rem",
    backgroundColor: "#B2BBBD",
    color: "#17181f",
    borderRadius: "25px",
  }),
  imageDiv: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    img: css({ height: "350px" }),
    button: css({
      alignSelf: "flex-end",
      padding: "0.9rem",
      fontWeight: "bold",
      border: "none",
      borderRadius: "15px",
      backgroundColor: "#426A5A",
      color: "#fffffa",
      cursor: "pointer",
      fontSize: "1.2rem",
      "&:hover": css({
        backgroundColor: "#68A18A",
      }),
    }),
  }),
  characters: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
    gap: "20px",
    div: css({
      display: "flex",
      alignItems: "center",
      gap: "25px",
      justifyContent: "center",
      img: css({ width: "60px" }),
      p: css({
        fontWeight: "bold",
      }),
    }),
  }),
};

export const Modal = ({ itemsList, setLevelSelected }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClickSelection = (e) => {
    setLevelSelected(e.target.parentElement.id);
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div
      css={modalStyle.self}
      style={isModalOpen ? { display: "flex" } : { display: "none" }}
    >
      {itemsList.map((item) => {
        return (
          <div css={modalStyle.card} key={item.id}>
            <div css={modalStyle.imageDiv} id={item.id}>
              <h2>{item.imageName}</h2>
              <img src={item.imageUrl} alt={item.imageName} />
              <button onClick={handleClickSelection}>Select</button>
            </div>
            <div css={modalStyle.characters}>
              {item.itemList.map((list) => {
                return (
                  <div key={list.id}>
                    <img src={list.image} alt={list.name} />
                    <p>{list.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
