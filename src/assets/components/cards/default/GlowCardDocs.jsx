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
          <p>
            Import the <code>GlowCard</code> component and its CSS. <br />
            <em>
              (If your build system already includes the CSS automatically, you
              can skip the manual import.)
            </em>
          </p>
          <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
            {`import { GlowCard } from "xscafu-component-library";
import "xscafu-component-library/dist/glowCard.css";`}
          </SyntaxHighlighter>
        </li>
        <li>
          <strong>Basic usage</strong>
          <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
            {`<GlowCard
  title="My Card Title"
  subtitle="A subtitle"
  paragraph="This is the card content."
/>`}
          </SyntaxHighlighter>
        </li>
        <li>
          <strong>Custom content with JSX</strong>
          <p>
            You can pass any JSX as <code>title</code>, <code>subtitle</code>,
            or <code>paragraph</code>:
          </p>
          <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
            {`<GlowCard
  title={<span style={{ color: "red" }}>Custom <b>Title</b></span>}
  subtitle={<i>Subtitle with italics</i>}
  paragraph={
    <div>
      <p>Paragraph with <strong>custom</strong> content.</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    </div>
  }
/>`}
          </SyntaxHighlighter>
        </li>
        <li>
          <strong>Customize with props and classes</strong>
          <p>
            Use <code>className</code> and <code>Style</code> props to style
            each section:
          </p>
          <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
            {`<GlowCard
  className="myCard"
  titleClassName="myTitle"
  subtitleClassName="mySubtitle"
  paragraphClassName="myParagraph"
  titleStyle={{ color: "orange" }}
  subtitleStyle={{ fontWeight: "bold" }}
  paragraphStyle={{ marginTop: "2rem" }}
  enableGlow={true}
/>`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="css" style={vscDarkPlus}>
            {`.myCard { background: #222; }
.myTitle { font-size: 2rem; }
.mySubtitle { color: green; }
.myParagraph { color: blue; }`}
          </SyntaxHighlighter>
        </li>
        <li>
          <strong>Override default classes globally</strong>
          <p>
            You can override the default classes for global style changes.{" "}
            <br />
            <em>
              Default class names: <code>gc-glowCard</code>,{" "}
              <code>gc-cardTitle</code>, <code>gc-cardSubtitle</code>,{" "}
              <code>gc-cardParagraph</code>
            </em>
          </p>
          <SyntaxHighlighter language="css" style={vscDarkPlus}>
            {`.gc-glowCard {
  background: linear-gradient(135deg, #f0f, #0ff);
}
.gc-cardTitle {
  text-shadow: 2px 2px 4px #000;
}`}
          </SyntaxHighlighter>
        </li>
        <li>
          <strong>Toggle the glow effect</strong>
          <p>
            Use <code>enableGlow</code> to enable or disable the animated glow
            border:
          </p>
          <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
            {`<GlowCard enableGlow={false} ... />`}
          </SyntaxHighlighter>
        </li>
      </ol>
      <h2>Props Reference</h2>
      <ul>
        <li>
          <code>title</code>, <code>subtitle</code>, <code>paragraph</code>:{" "}
          <em>ReactNode</em> – Content for each section.
        </li>
        <li>
          <code>className</code>, <code>titleClassName</code>,{" "}
          <code>subtitleClassName</code>, <code>paragraphClassName</code>:{" "}
          <em>string</em> – Custom classes for styling.
        </li>
        <li>
          <code>titleStyle</code>, <code>subtitleStyle</code>,{" "}
          <code>paragraphStyle</code>: <em>React.CSSProperties</em> – Inline
          styles for each section.
        </li>
        <li>
          <code>enableGlow</code>: <em>boolean</em> – Show/hide the animated
          glow border.
        </li>
      </ul>
      <h3>Full Example</h3>
      <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
        {`<GlowCard
  className="myCard"
  titleClassName="myTitle"
  subtitleClassName="mySubtitle"
  paragraphClassName="myParagraph"
  title={<span style={{ color: "orange" }}>Custom Title</span>}
  subtitle="Custom Subtitle"
  paragraph="Custom content"
  enableGlow={true}
/>`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="css" style={vscDarkPlus}>
        {`.myCard { background: #222; }
.myTitle { font-size: 2rem; }
.mySubtitle { color: green; }
.myParagraph { color: blue; }`}
      </SyntaxHighlighter>
      <p>
        <strong>Tips:</strong> Use <code>className</code> and style props for
        quick customization, or override the default classes for global changes.
        The glow effect can be toggled with <code>enableGlow</code>.
      </p>
    </div>
  );
}
