import { GlowButton } from "xscafu-component-library";
import "xscafu-component-library/dist/glowButton.css";
import CardPage from "./assets/pages/CardPage";

function App() {
  return (
    <>
      <CardPage />
      <div className="button">
        <GlowButton>Clicca quì</GlowButton>
      </div>
    </>
  );
}

export default App;
