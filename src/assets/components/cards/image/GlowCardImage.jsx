import { GlowButton, GlowCard } from "xscafu-component-library";
import "xscafu-component-library/dist/glowCard.css";
import "./glowCardImage.css";

export default function GlowCardImage() {
  return (
    <>
      <GlowCard
        className="myCard"
        titleClassName="myTitle"
        subtitleClassName="mySubtitle"
        paragraphClassName="myParagraph"
        enableGlow={true}
        top={
          <div className="glowCardTop">
            <img src="https://picsum.photos/1200/800" alt="Sample" />
          </div>
        }
        middle={
          <div className="glowCardMiddle">
            <h1>Only premium images</h1>
            <h3>Click down below for more informations</h3>
          </div>
        }
        bottom={<GlowButton className="myButton">More</GlowButton>}
      ></GlowCard>
    </>
  );
}
