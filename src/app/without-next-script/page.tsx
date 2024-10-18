import Link from "next/link";
import DonateEmbedScriptLowercase from "../components/DonateEmbedScriptLowercase";


export default async function Home() {
  return (
    <div>
      <h1>Embed should be below. Is it?</h1>
      <h2>Using `script` hhere</h2>
      <DonateEmbedScriptLowercase />
      <p>Go to <Link href="/with-next-script">with-next-script</Link></p>
    </div>
  );
}
