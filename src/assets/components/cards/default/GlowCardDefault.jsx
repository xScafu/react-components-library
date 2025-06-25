import { GlowCard } from "xscafu-component-library";
import "xscafu-component-library/dist/glowCard.css";

import "./glowCard.css";

export default function GlowCardDefault() {
  return (
    <>
      <GlowCard
        top={<h1>Card Top section</h1>}
        middle={<h3>Card middle section</h3>}
        bottom={<p>Card bottom section</p>}
        className="myDefaultCard"
        enableGlow={false}
      ></GlowCard>
    </>
  );
}
