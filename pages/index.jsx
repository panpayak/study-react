import Head from "next/head";
import { Inter } from "next/font/google";
import Main from "@/components/main.jsx";
import { Header } from "@/components/header.jsx";
import { useCallback, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    // マウント
    document.body.style.backgroundColor = "lightblue";

    // アンマウント
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
    </>
  );
}
