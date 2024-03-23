import "./App.css";
import GameContainer from "./components/GameContainer";
import ContextProvider from "./store";

function App() {
  return (
    <ContextProvider>
      <GameContainer />;
    </ContextProvider>
  );
}

export default App;
