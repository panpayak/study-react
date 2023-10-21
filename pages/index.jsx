import Head from "next/head";
import { Inter } from "next/font/google";
import Main from "@/components/main.jsx";
import { Header } from "@/components/header.jsx";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("５文字以内にしてください");
      return;
    }
    setText(e.target.value.trim().toLowerCase());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
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
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <button onClick={handleClick}>ボタン</button>
      <input type="text" value={text} onChange={handleChange} />
      <Main page="index" />
    </>
  );
}
