import Head from "next/head";
import { Inter } from "next/font/google";
import Main from "@/components/main.jsx";
import { Header } from "@/components/header.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />

      <Main page="about" />
    </>
  );
}
