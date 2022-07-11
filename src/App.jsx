import { Global, css } from "@emotion/react";
import { Header } from "./components/Header";
import { GameImage } from "./components/Game";
import { Modal } from "./components/ModalScenarios";
import { itemsList } from "./services/dataItemsList";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [levelSelected, setLevelSelected] = useState("");
  const [levelInfo, setLevelInfo] = useState([]);

  useEffect(() => {
    const result = itemsList.filter((item) => item.id === levelSelected);
    setLevelInfo(...result);
  }, [levelSelected]);

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
      <Modal itemsList={itemsList} setLevelSelected={setLevelSelected} />
      <Header itemsList={levelInfo && levelInfo.itemList} />
      <GameImage itemList={levelInfo && levelInfo} />
    </>
  );
}

export default App;
