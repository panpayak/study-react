import Head from "next/head";
import { Inter } from "next/font/google";
import Main from "@/components/main.jsx";
import { Header } from "@/components/header.jsx";


const inter = Inter({ subsets: ["latin"] });


export default function About({
  doubleCount,
  isShow,
  handleClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAdd,
}) {

  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{doubleCount}</h1> : null}
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <button onClick={handleClick}>ボタン</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="about" />
    </>
  );
}
