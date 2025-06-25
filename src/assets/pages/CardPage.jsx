import React, { useState, useRef, useEffect } from "react";
import GlowCardDefault from "../components/cards/default/GlowCardDefault";
import ExampleCardImage from "../docs/exsamples/exampleCardImage";
import { GlowCardDocs } from "../docs/GlowCardDocs";
import "./cardPage.css";
import GlowCardImage from "../components/cards/image/GlowCardImage";

export default function CardPage() {
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (open && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight + "px");
    } else {
      setMaxHeight("0px");
    }
  }, [open]);

  return (
    <>
      <div className="componentShowcase">
        <h1 id="card">Card</h1>
        <p>
          Card is a flexible component used to group and display content in a
          clear and concise format.
        </p>
        <div className="componentShowcaseBkg">
          <GlowCardDefault />
        </div>
        {/* Accordion Section */}
        <div className="accordion">
          <button
            className="accordion-toggle"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="glow-card-docs"
          >
            <span className={`arrow ${open ? "open" : ""}`} aria-hidden="true">
              ▶
            </span>
            <span className="accordion-title">Show Card Docs</span>
          </button>
          <hr />
          <div
            id="glow-card-docs"
            className={`accordion-content${open ? " open" : ""}`}
            style={{
              maxHeight,
              transition: "max-height 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            ref={contentRef}
          >
            <div style={{ padding: "1rem 0" }}>
              <GlowCardDocs />
              {open && (
                <button
                  className="accordion-close-btn"
                  onClick={() => setOpen(false)}
                  aria-label="Close Card Docs"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
        {/* End Accordion Section */}
        <div className="examples">
          <h2>Other Card variants example</h2>
          <p>
            You can achive different styles and effects by using the{" "}
            <code>enableGlow</code> prop and customizing the CSS classes like in
            Docs section.
          </p>
          <div className="componentShowcaseBkg">
            <h2>Card with image</h2>
            <hr />
            <section>
              <GlowCardImage />
            </section>
            <div>
              <ExampleCardImage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
