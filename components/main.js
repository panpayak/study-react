import { Inter } from "next/font/google";
import styles from "./main.module.css";
import { Link } from "../components/links.js";
import { Headline}  from "@/components/headline.js";

const inter = Inter({ subsets: ["latin"] });

export default function Main(props) {
  return (
      <main className={`${styles.main} ${inter.className}`}>
        <Headline page={props.page}/>

        <Link />
      </main>
  );
}
