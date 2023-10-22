import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/components/main.jsx";
import { Header } from "@/components/header.jsx";


const inter = Inter({ subsets: ["latin"] });


const About = (props) => {

  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      {props.isShow ? <h1>{props.doubleCount}</h1> : null}
      <button onClick={props.handleDisplay}>{props.isShow ? "非表示" : "表示"}</button>
      <button onClick={props.handleClick}>ボタン</button>
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="about" />
    </>
  );
}

export default About;