import { GlowCard, GlowButton } from "xscafu-component-library";
import "my-component-library/dist/glowButton.css";
import "my-component-library/dist/glowCard.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function App() {
  const codeSnippet = `
//Import the components and styles
import { GlowButton } from "my-component-library";
import { GlowCard } from "my-component-library";
import "my-component-library/dist/glowButton.css";
import "my-component-library/dist/glowCard.css";

//This is the code to use the GlowCard component
<GlowCard enableGlow={true}>
  <h1 className="cardTitle">Questo è il titolo della card</h1>
  <h3 className="cardSubTitle">Questo è il contenuto della card</h3>
  <p className="cardContent">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda
    sequi exercitationem veritatis repellat eaque voluptas ut consequuntur aut
    eligendi ipsa quis velit, provident omnis incidunt aperiam officiis, quaerat
    aliquam?
  </p>
</GlowCard>
`;

  return (
    <>
      <div className="cardBkg">
        <h1 id="card">Card</h1>
        <GlowCard enableGlow={true} className="card">
          <h1 className="cardTitle">Questo è il titolo della card</h1>
          <h3 className="cardSubTitle">Questo è il contenuto della card</h3>
          <p className="cardContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            assumenda sequi exercitationem veritatis repellat eaque voluptas ut
            consequuntur aut eligendi ipsa quis velit, provident omnis incidunt
            aperiam officiis, quaerat aliquam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Beatae magni, eveniet aut illum
            fugiat, eum voluptatibus, nostrum aperiam expedita dolores est
            deserunt architecto esse? Eum praesentium soluta adipisci tenetur
            hic.
          </p>
        </GlowCard>
        <div className="codeSnippetContainer">
          <SyntaxHighlighter
            language="jsx"
            style={atomDark}
            className="codeSnippet"
          >
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="button">
        <GlowButton>Clicca quì</GlowButton>
      </div>
    </>
  );
}

export default App;
