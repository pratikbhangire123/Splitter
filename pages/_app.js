import "../styles/globals.css";
import { Space_Mono } from "next/font/google";

const space_mono = Space_Mono({ subsets: ["latin"], weight: "700" });

export default function App({ Component, pageProps }) {
  return (
    <main className={space_mono.className}>
      <Component {...pageProps} />
    </main>
  );
}
