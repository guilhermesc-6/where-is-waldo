import { Header } from "./components/Header";
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
          }
        `}
      />
      <Header />
    </div>
  );
}

export default App;
