import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "./header.module.css";

const inter = Inter({ subsets: ["latin"] });

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.anchor}>
        index
      </Link>
      <Link href="/about" className={styles.anchor}>
        about
      </Link>
    </header>
  );
}
