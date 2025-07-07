import { useState, useRef, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./exampleCardImage.css";

const jsxCode = `
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
/>
`.trim();

const cssCode = `
.myCard {
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.199);
  width: 20rem;
  transition: transform 0.1s ease-in-out;
}
.myCard:hover {
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.199);
  transform: scale(1.01);
}
.glowCardTop {
  margin: -3rem -3rem 1rem -3rem;
  overflow: hidden;
  height: 15rem;
}
.glowCardTop img {
  width: 100%;
  border-radius: 2rem;
  object-fit: cover;
  display: block;
}
.glowCardMiddle h1 {
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.myButton {
  margin-bottom: 0;
}
`.trim();

export default function ExampleCardImage() {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("jsx");
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (accordionOpen && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight + "px");
    } else {
      setMaxHeight("0px");
    }
  }, [accordionOpen, activeTab]);

  return (
    <div className="accordion">
      <button
        className="accordion-toggle"
        onClick={() => setAccordionOpen((prev) => !prev)}
        aria-expanded={accordionOpen}
        aria-controls="glow-card-image-code"
      >
        <span
          className={`i-chevron-right ${accordionOpen ? "open" : ""}`}
          aria-hidden="true"
        ></span>
        <span className="accordion-title">Show Code</span>
      </button>
      <hr />
      <div
        id="glow-card-image-code"
        className={`accordion-content${accordionOpen ? " open" : ""}`}
        style={{
          maxHeight,
          transition: "max-height 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          overflow: "hidden",
        }}
        ref={contentRef}
      >
        <div style={{ padding: accordionOpen ? "1rem 0" : "0 0" }}>
          <div className="tabs">
            <button
              className={activeTab === "jsx" ? "tab active" : "tab"}
              onClick={() => setActiveTab("jsx")}
            >
              JSX
            </button>
            <button
              className={activeTab === "css" ? "tab active" : "tab"}
              onClick={() => setActiveTab("css")}
            >
              CSS
            </button>
          </div>
          <div className="tab-content">
            {activeTab === "jsx" ? (
              <SyntaxHighlighter
                language="jsx"
                style={vscDarkPlus}
                customStyle={{ margin: 0 }}
              >
                {jsxCode}
              </SyntaxHighlighter>
            ) : (
              <SyntaxHighlighter
                language="css"
                style={vscDarkPlus}
                customStyle={{ margin: 0 }}
              >
                {cssCode}
              </SyntaxHighlighter>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
