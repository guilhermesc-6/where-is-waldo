/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { getListUsers, setUsers } from "../services/firebase";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

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
    zIndex: "10",
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
  score: css({
    backgroundColor: "#fffffa",
    minWidth: "450px",
    minHeight: "300px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    span: css({
      fontSize: "1.2rem",
    }),
  }),
  scoreInput: css({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    input: css({
      height: "38px",
      paddingLeft: ".5rem",
      backgroundColor: "transparent",
      borderRadius: "10px",
    }),
    button: css({
      border: "none",
      padding: ".5rem",
      cursor: "pointer",
      fontSize: "1.2rem",
      borderRadius: "10px",
      backgroundColor: "rgba(66,106,90,1)",
      color: "#fffffa",
      "&:hover": css({ backgroundColor: "rgba(66,106,90,0.8)", color: "#000" }),
    }),
  }),
  scoreBtn: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    a: css({
      textDecoration: "none",
      color: "#fffffa",
      textTransform: "capitalize",
      padding: ".5rem",
      borderRadius: "15px",
      backgroundColor: "#36382E",
      "&:hover": css({ backgroundColor: "#82876E" }),
    }),
    "a:first-of-type": css({
      backgroundColor: "#42885A",
      "&:hover": css({
        backgroundColor: "#68B683",
      }),
    }),
  }),
  board: css({
    display: "flex",
    alignItems: "center",
    gap: "50px",
    padding: "2rem .5rem",
    div: css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      h1: css({ fontSize: "1.5rem" }),
      ol: css({ listStyleType: "upper-roman" }),
    }),
  }),
};

export const Modal = ({
  itemsList,
  setLevelSelected,
  isModalOpen,
  setIsModalOpen,
  isGameOver,
  setIsGameOver,
  time,
  setLevelInfo,
  levelInfo,
}) => {
  const [text, setText] = useState("");
  const [showScore, setShowScore] = useState(false);
  const [scoreBoard, setScoreBoard] = useState([]);

  useEffect(() => {
    if (showScore) {
      getListUsers("").then((res) => setScoreBoard(res));
    }
  }, [showScore]);

  const handleClickSelection = (e) => {
    setLevelSelected(e.target.parentElement.id);
    setIsModalOpen(!isModalOpen);
  };
  //display the selection scenarios
  const handlePlayAgain = () => {
    setIsGameOver(false);
    setShowScore(false);
    setLevelInfo({});
  };
  //register the player and the time
  const handleSubmitText = () => {
    const timeSeconds = (time.end - time.start) / 1000;
    setUsers(text, timeSeconds, levelInfo.id);
    Toastify({
      text: `Saved sucessfully! 👍`,
      duration: 4000,
      gravity: "top",
      position: "center",
      style: {
        background: "rgb(66,106,90)",
        background:
          "linear-gradient(90deg, rgba(66,106,90,1) 0%, rgba(31,107,39,1) 100%)",
      },
    }).showToast();
    setText("");
  };

  return (
    <div
      css={modalStyle.self}
      style={isModalOpen ? { display: "flex" } : { display: "none" }}
    >
      {!isGameOver ? (
        itemsList.map((item) => {
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
        })
      ) : (
        <div css={modalStyle.score}>
          <span>Your time was: {(time.end - time.start) / 1000}s</span>
          <div css={modalStyle.scoreInput}>
            <input
              type="text"
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
            />
            <button type="button" onClick={handleSubmitText}>
              save
            </button>
          </div>
          <div css={modalStyle.scoreBtn}>
            <a href="#" onClick={handlePlayAgain}>
              play again
            </a>
            <a
              href="#"
              onClick={() => {
                setShowScore(!showScore);
              }}
            >
              Check leaderBoard
            </a>
            {showScore ? (
              <div css={modalStyle.board}>
                <div>
                  <h1>Mortal Kombat</h1>
                  <ol>
                    {scoreBoard.map((item) => {
                      if (item.data.id === "mortal-kombat") {
                        return (
                          <li key={item.id}>
                            {item.data.name} - {item.data.time} s
                          </li>
                        );
                      }
                    })}
                  </ol>
                </div>
                <div>
                  <h1>Lego Star Wars</h1>
                  <ol>
                    {scoreBoard.map((item) => {
                      if (item.data.id === "lego-star-wars") {
                        return (
                          <li key={item.id}>
                            {item.data.name} - {item.data.time} s
                          </li>
                        );
                      }
                    })}
                  </ol>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
};
