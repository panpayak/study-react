import { Inter } from "next/font/google";
import styles from "./main.module.css";
import { Links } from "./links.jsx";
import { Headline } from "@/components/headline.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function Main(props) {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Headline page={props.page} />

      <Links />
    </main>
  );
}
