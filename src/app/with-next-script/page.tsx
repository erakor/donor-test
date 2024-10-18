import Link from "next/link";
import DonateEmbedNextScript from "../components/donorEmbedScript";

export default async function Home() {
  return (
    <div>
      <h1>Embed should be below. Is it?</h1>
      <h2>Using `Script` here</h2>
      <DonateEmbedNextScript />
      <p>Go to <Link href="/without-next-script">without-next-script</Link></p>
    </div>
  );
}
