import { Inter } from "next/font/google";
import styles from "./headline.module.css";
import { Vercel } from "@/components/vercel.jsx";

const inter = Inter({ subsets: ["latin"] });

export function Headline(props) {
  return (
    <>
      <div className={styles.description}>
        <p>
          アイテムの数は
          <code className={styles.code}>{props.items}個です</code>
        </p>

        <Vercel />
      </div>

      <div className={styles.center}>
        <h1>{props.page} Page</h1>
        <button onClick={props.handleReduce}>減らす</button>
      </div>
    </>
  );
}
