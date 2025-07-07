import { GlowButton } from "xscafu-component-library";
import "xscafu-component-library/dist/glowButton.css";
import CardPage from "./assets/pages/CardPage";
import NavMenu from "./assets/components/NavMenu";
import "./icons.css";

function App() {
  return (
    <>
      <div className="layout">
        <NavMenu />
        <CardPage />
        <div className="button">
          <GlowButton>Clicca quì</GlowButton>
        </div>
      </div>
    </>
  );
}

export default App;
