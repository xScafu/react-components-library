import { GlowCard } from "xscafu-component-library";
import "xscafu-component-library/dist/glowCard.css";
import { GlowCardDocs } from "./GlowCardDocs";
import "./glowCard.css";

export default function GlowCardDefault() {
  return (
    <>
      <div className="componentShowcase">
        <h1 id="card">Card</h1>
        <p>
          Card is a flexible component used to group and display content in a
          clear and concise format.
        </p>
      </div>
      <div className="componentShowcaseBkg">
        <GlowCard enableGlow={true} className="card"></GlowCard>
        <div className="codeSnippetContainer">
          <GlowCardDocs />
        </div>
      </div>
    </>
  );
}
