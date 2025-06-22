import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./glowCardDocs.css";

export function GlowCardDocs() {
  return (
    <div className="glowCardDocs">
      <h1>
        How to Install and Use <code>GlowCard</code>
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
          <strong>Customize CSS with props</strong>
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
          <SyntaxHighlighter language="css" style={vscDarkPlus}>
            {`.glowCard {
  background: linear-gradient(135deg, #f0f, #0ff);
}
.cardTitle {
  text-shadow: 2px 2px 4px #000;
}`}
          </SyntaxHighlighter>
        </li>
        <li>
          <strong>Toggle the glow effect</strong>
          <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
            {`<GlowCard enableGlow={false} ... />`}
          </SyntaxHighlighter>
        </li>
      </ol>
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
        <strong>Summary:</strong> Use <code>className</code>,{" "}
        <code>titleClassName</code>, <code>subtitleClassName</code>,{" "}
        <code>paragraphClassName</code> for custom classes, inline style props
        for quick tweaks, and override default classes for global changes.
        Toggle the glow effect with <code>enableGlow</code>.
      </p>
    </div>
  );
}
