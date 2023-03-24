import Head from "next/head";
import TipCalculator from "../components/tipCalculator";

export default function Home() {
  return (
    <>
      <Head>
        <title>Splitter</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex flex-col sm:h-screen items-center justify-center pt-8 sm:px-4 bg-lightgrayishcyan">
        <h1 className="tracking-[0.4rem] text-verydarkcyan/80">
          SPLI
          <br />
          TTER
        </h1>
        <TipCalculator />
      </main>
    </>
  );
}
