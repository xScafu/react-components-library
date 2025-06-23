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
        <GlowCard
          className="myCard"
          titleClassName="myTitle"
          subtitleClassName="mySubtitle"
          paragraphClassName="myParagraph"
          enableGlow={true}
          title={
            <span style={{ color: "red" }}>
              <b>This is a </b> basic <b>card</b>
            </span>
          }
          subtitle={<i>Hover me for glow effect</i>}
          paragraph={
            <div>
              <p>
                Paragraph with <strong>custom</strong> content.
              </p>
              <ul>
                <li>List item 1</li>
                <li>List item 2</li>
              </ul>
            </div>
          }
        ></GlowCard>
      </div>
      <div className="codeSnippetContainer">
        <GlowCardDocs />
      </div>
    </>
  );
}
