import GlowCardDefault from "./assets/components/cards/default/GlowCardDefault";
import { GlowButton } from "xscafu-component-library";
import "xscafu-component-library/dist/glowButton.css";

function App() {
  return (
    <>
      <GlowCardDefault />
      <div className="button">
        <GlowButton>Clicca quì</GlowButton>
      </div>
    </>
  );
}

export default App;
