import Head from "next/head";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";
import Menu from "@/components/Menu";


export default function HomePage(){
  return (
    <>
      <Head>
        <title>The Games &copy; 2024</title>
        <meta
          name="description"
          content="Consumo em React de uma API de Games"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <Menu/>
        <Container>
            <HomeContent/>
        </Container>
      </main>
      <Footer/>
    </>
  );
};
