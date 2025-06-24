import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./glowCardDocs.css";

export function GlowCardDocs() {
  return (
    <div className="glowCardDocs">
      <h1>
        <code>GlowCard</code> – Quick Start & Usage Guide
      </h1>
      <ol>
        <li>
          <strong>Install the library</strong>
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`npm install xscafu-component-library`}
          </SyntaxHighlighter>
        </li>
        <li>
          <strong>Import the component and CSS</strong>
          <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
            {`import { GlowCard } from "xscafu-component-library";
import "xscafu-component-library/dist/glowCard.css";`}
          </SyntaxHighlighter>
        </li>
        <li>
          <strong>Card structure: top, middle, bottom</strong>
          <p>
            <code>GlowCard</code> is divided into three flexible sections:
          </p>
          <ul>
            <li>
              <b>top</b>: for images, headers, or any custom content
            </li>
            <li>
              <b>middle</b>: for main content, text, or forms
            </li>
            <li>
              <b>bottom</b>: for actions, buttons, or footers
            </li>
          </ul>
          Each section is optional and fully customizable.
          <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
            {`<GlowCard
  top={<img src="https://placehold.co/300x100" alt="Banner" style={{ width: "100%", borderRadius: "1rem" }} />}
  middle={<div><h2>Title</h2><p>Some content here.</p></div>}
  bottom={<button>Action</button>}
  cardStyle={{ width: 350, minHeight: 200 }}
/>`}
          </SyntaxHighlighter>
        </li>
        <li>
          <strong>Customize with classes and styles</strong>
          <p>
            Use <code>topClassName</code>, <code>middleClassName</code>,{" "}
            <code>bottomClassName</code> and their <code>Style</code> props for
            advanced styling.
          </p>
          <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
            {`<GlowCard
  top={<img src="..." />}
  middle={<div>...</div>}
  bottom={<button>OK</button>}
  topClassName="myTop"
  middleClassName="myMiddle"
  bottomClassName="myBottom"
  topStyle={{ padding: 8 }}
  cardStyle={{ width: 400, minHeight: 250 }}
/>`}
          </SyntaxHighlighter>
        </li>
        <li>
          <strong>Make the glow overflow the card (advanced)</strong>
          <p>
            To allow the animated glow to extend outside the card, remove or
            override <code>overflow: hidden</code> from{" "}
            <code>.gc-glowCard</code>
            in your CSS.
          </p>
          <SyntaxHighlighter language="css" style={vscDarkPlus}>
            {`.gc-glowCard {
  /* overflow: visible; */
}`}
          </SyntaxHighlighter>
        </li>
      </ol>
      <h2>Props Reference</h2>
      <ul>
        <li>
          <code>top</code>, <code>middle</code>, <code>bottom</code>:{" "}
          <em>ReactNode</em> – Content for each section.
        </li>
        <li>
          <code>topClassName</code>, <code>middleClassName</code>,{" "}
          <code>bottomClassName</code>, <code>className</code>: <em>string</em>{" "}
          – Custom classes for styling.
        </li>
        <li>
          <code>topStyle</code>, <code>middleStyle</code>,{" "}
          <code>bottomStyle</code>, <code>cardStyle</code>:{" "}
          <em>React.CSSProperties</em> – Inline styles for each section or the
          card.
        </li>
        <li>
          <code>enableGlow</code>: <em>boolean</em> – Show/hide the animated
          glow border.
        </li>
      </ul>
      <h3>Full Example</h3>
      <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
        {`<GlowCard
  top={<img src="https://placehold.co/300x100" alt="Banner" style={{ width: "100%", borderRadius: "1rem" }} />}
  middle={<div><h2>Custom Title</h2><p>Custom content</p></div>}
  bottom={<button className="myButton">Action</button>}
  cardStyle={{ width: 350, minHeight: 200 }}
  enableGlow={true}
/>`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="css" style={vscDarkPlus}>
        {`.myButton { background: #222; color: #fff; border-radius: 8px; padding: 0.5rem 1.5rem; }`}
      </SyntaxHighlighter>
      <p>
        <strong>Tips:</strong> Each section is optional. You can use images,
        text, forms, or any JSX in <code>top</code>, <code>middle</code>, or{" "}
        <code>bottom</code>. The card size is fully customizable via{" "}
        <code>cardStyle</code>.
      </p>
    </div>
  );
}
