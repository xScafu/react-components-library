import { GlowButton, GlowCard } from "xscafu-component-library";
import "xscafu-component-library/dist/glowCard.css";
import "./glowCard.css";

export default function GlowCardImage() {
  return (
    <>
      <GlowCard
        className="myCard"
        titleClassName="myTitle"
        subtitleClassName="mySubtitle"
        paragraphClassName="myParagraph"
        enableGlow={true}
        title={
          <div>
            <figure>
              <img src="https://placehold.co/600x400" alt="" />
            </figure>
            <span style={{ color: "red" }}>
              <b>This is a </b> <b>card</b> with an image
            </span>
          </div>
        }
        subtitle={<i>Hover me for glow effect</i>}
        paragraph={
          <div>
            <p>
              Paragraph with <strong>custom</strong> content.
            </p>
            <GlowButton>More</GlowButton>
          </div>
        }
      ></GlowCard>
    </>
  );
}
