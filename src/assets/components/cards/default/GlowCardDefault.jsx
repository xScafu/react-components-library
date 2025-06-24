import { GlowCard } from "xscafu-component-library";
import "xscafu-component-library/dist/glowCard.css";

import "./glowCard.css";

export default function GlowCardDefault() {
  return (
    <>
      <GlowCard top={<h1>Card Title</h1>}></GlowCard>
    </>
  );
}
