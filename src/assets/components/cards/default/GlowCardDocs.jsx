import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./glowCardDocs.css";

export function GlowCardDocs() {
  return (
    <div className="glowCardDocs">
      <h1>
        How to Customize the <code>GlowCard</code> component
      </h1>
      <p>
        The <code>GlowCard</code> component is highly customizable. Below are
        some examples and explanations on how to modify its appearance and
        behavior using CSS and props.
      </p>
      <ol>
        <li>
          <strong>Customize title, subtitle, and paragraph content</strong>
          <p>
            You can modify the content of the <code>title</code>,{" "}
            <code>subtitle</code>, and <code>paragraph</code> inside the{" "}
            <code>GlowCard</code> by passing them as children. This allows you
            to dynamically set the text or HTML content for these elements.
          </p>
          <div className="codeSnippet">
            <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
              {`// JSX component
<GlowCard>
  <h1 className="cardTitle">Custom Title</h1>
  <h3 className="cardSubtitle">Custom Subtitle</h3>
  <p className="cardContent">Custom paragraph content</p>
</GlowCard>`}
            </SyntaxHighlighter>
          </div>
          <p>
            In the example above, the <code>GlowCard</code> contains three child
            elements: a title, a subtitle, and a paragraph. You can replace
            their content with any text or HTML you need.
          </p>
          <p>Here is how you can style these elements using CSS:</p>
          <div className="codeSnippet">
            <SyntaxHighlighter language="css" style={vscDarkPlus}>
              {`/* CSS rules */
.cardTitle {
  font-size: 2rem;
  color: #fff;
}

.cardSubtitle {
  font-size: 1.5rem;
  color: #ccc;
}

.cardContent {
  font-size: 1rem;
  color: #aaa;
}`}
            </SyntaxHighlighter>
          </div>
        </li>
        <li>
          <strong>
            Add a custom CSS class via <code>className</code> prop
          </strong>
          <p>
            You can pass a custom CSS class to the <code>GlowCard</code> using
            the <code>className</code> prop. This allows you to override default
            styles or add new ones.
          </p>
          <div className="codeSnippet">
            <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
              {`// JSX component
<GlowCard className="myCustomCard" ... />`}
            </SyntaxHighlighter>
          </div>
          <p>Here is an example of the CSS rules you can apply:</p>
          <div className="codeSnippet">
            <SyntaxHighlighter language="css" style={vscDarkPlus}>
              {`/* CSS rules */
.myCustomCard {
  background: #222;
  border-radius: 2rem;
  box-shadow: 0 0 20px #ff0;
}`}
            </SyntaxHighlighter>
          </div>
        </li>
        <li>
          <strong>Enable or disable glow effect</strong>
          <p>
            The <code>GlowCard</code> has a built-in glow effect that can be
            toggled using the <code>enableGlow</code> prop. Set it to{" "}
            <code>true</code> to enable the glow or <code>false</code> to
            disable it.
          </p>
          <div className="codeSnippet">
            <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
              {`// JSX component
<GlowCard enableGlow={true}>
  <h1>Glow Enabled</h1>
</GlowCard>`}
            </SyntaxHighlighter>
          </div>
        </li>
      </ol>
    </div>
  );
}
