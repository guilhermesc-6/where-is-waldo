import { Header } from "./components/Header";
import { GameImage } from "./components/Game";
import { Global, css } from "@emotion/react";

function App() {
  return (
    <div className="App">
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: "Work Sans", sans-serif;
            background-color: #17181f;
          }
        `}
      />
      <Header />
      <GameImage />
    </div>
  );
}

export default App;
