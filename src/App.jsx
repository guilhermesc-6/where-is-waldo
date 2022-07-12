import { Global, css } from "@emotion/react";
import { useEffect, useState } from "react";
import { itemsList } from "./services/dataItemsList";

import { Header } from "./components/Header";
import { GameImage } from "./components/Game";
import { Modal } from "./components/Modal";

function App() {
  const [levelSelected, setLevelSelected] = useState("");
  const [levelInfo, setLevelInfo] = useState({});
  const [menuCoords, setMenuCoords] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [time, setTime] = useState({});

  useEffect(() => {
    if (levelSelected !== "") {
      const result = itemsList.filter((item) => item.id === levelSelected);
      setLevelInfo(...result);
      //start recordind seconds
      setTime({ end: 0, start: Date.now() });
    }
  }, [levelSelected]);

  useEffect(() => {
    if (levelInfo.id) {
      //verify if all items were found
      const win = levelInfo.itemList.every((item) => item.found);
      if (win) {
        handleWin();
      }
    }
  }, [levelInfo]);

  const handleWin = () => {
    console.log("YOU WIN");
    setIsGameOver(true);
    //set the time elapsed
    setTime({ ...time, end: Date.now() });
    setIsModalOpen(true);
    setLevelInfo({});
  };

  return (
    <>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: "Work Sans", sans-serif;
          }
          body {
            background-color: #17181f;
          }
        `}
      />

      <Modal
        itemsList={itemsList}
        setLevelSelected={setLevelSelected}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
        time={time}
      />
      <Header
        list={levelInfo && levelInfo.itemList}
        isGameOver={isGameOver}
        time={time}
      />
      <GameImage
        itemList={levelInfo && levelInfo}
        setMenuCoords={setMenuCoords}
        menuCoords={menuCoords}
        setLevelInfo={setLevelInfo}
      />
    </>
  );
}

export default App;
