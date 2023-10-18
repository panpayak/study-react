import { Inter } from "next/font/google";
import styles from "./headline.module.css";
import { Vercel } from "@/components/vercel.js";

const inter = Inter({ subsets: ["latin"] });

export function Headline(props) {
  return (
    <>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/{props.page}.js</code>
        </p>

        <Vercel />
      </div>

      <div className={styles.center}>
        <h1>{props.page} Page</h1>
      </div>
    </>
  );
}
