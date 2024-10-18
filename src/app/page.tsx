import DonateEmbedNextScript from "./components/donorEmbedScript";
import DonateEmbedScriptLowercase from "./components/donorEmbed";


export default function Home() {
  return (
    <div>
      <h1>Embed should be below. Is it?</h1>
      <DonateEmbedNextScript />
      <DonateEmbedScriptLowercase />

    </div>
  );
}
