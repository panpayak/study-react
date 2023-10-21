import Head from "next/head";
import { Inter } from "next/font/google";
import Main from "@/components/main.jsx";
import { Header } from "@/components/header.jsx";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { useBg } from "@/hooks/useBg";


const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBg();

  
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
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
    </>
  );
}
