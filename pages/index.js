import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import Imagem from '../components/imagem';
import Link from '../components/link';
import { Container, Footer, Main, Subtitle, Title } from '../components/style';
import { Article, Sidebar } from '../styles';
const { useEffect } = React;


export function getStaticProps() { return { props: {} }; }

export default function Home() {

  // https://eight-bites.blog/en/2021/11/adsense-localhost/
  // useEffect(() => {
  //   var ads = document.getElementsByClassName("adsbygoogle").length;
  //   for (var i = 0; i < ads; i++) {
  //     try {
  //       console.log('ads started', ads)
  //         (adsbygoogle = window.adsbygoogle || []).push({});
  //     } catch (e) { }
  //   }
  // }, []);

  return (
    <Container>



      {/* <Script async crossOrigin="anonymous" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9458208914000555"></Script> */}
      {/* <Script async crossOrigin="anonymous" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9458208914000555"></Script> */}
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="this is description." />
        <meta name="keywords" content="this is keywords." />
        <meta name="author" content="Aung Kyaw Nyunt" />
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9458208914000555"
     crossOrigin="anonymous"></script> */}

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9458208914000555"
          crossOrigin="anonymous"
        ></script>

        {/* <Script
          id="Adsense-id"
          data-ad-client="ca-pub-9458208914000555"
          async="true"
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          onError={(e) => { console.error('Script failed to load', e) }}
        /> */}
      </Head>

      {/* Usar como modelo */}
      {/* https://tecnoblog.net/responde/como-funciona-o-programa-de-afiliados-da-amazon/ */}

      <Main>

        <Article>
          Article
          <Container className='grid8'>

            <Title>
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </Title>

            <Subtitle>
              Get started by editing
            </Subtitle>



            <Imagem src={'https://melhoreschurrasqueiras.com.br/wp-content/uploads/2021/11/Churrasqueira-a-Gas-de-embutir-Fischer-Ranch-5-Espetos-GLP-BIVOLT-1-300x195.jpg'}></Imagem>

            <Container>
              <strong>Pr??s</strong>
              <ul>
                <li><a href="">Produto vers??til que pode ser embutido ou usado na bancada;</a></li>
                <li><a href="">Produto vers??til que pode ser embutido ou usado na bancada;</a></li>
                <li><a href="">Produto vers??til que pode ser embutido ou usado na bancada;</a></li>
                <li><a href="">Produto vers??til que pode ser embutido ou usado na bancada;</a></li>
                <li><a href="">Produto vers??til que pode ser embutido ou usado na bancada;</a></li>
                <li><a href="">Produto vers??til que pode ser embutido ou usado na bancada;</a></li>
                <li><a href="">Produto vers??til que pode ser embutido ou usado na bancada;</a></li>
                <li><a href="">Produto vers??til que pode ser embutido ou usado na bancada;</a></li>
                <li><a href="">Produto vers??til que pode ser embutido ou usado na bancada;</a></li>
                <li><a href="">Produto vers??til que pode ser embutido ou usado na bancada;</a></li>
              </ul>
            </Container>

            <Container>
              <Link link={'https://amzn.to/3pDR0ng'}>Comprar com desconto</Link>
            </Container>
          </Container>
          <Sidebar>Sidebar
            {/* <ins className="adsbygoogle"
              style={{ "display": "block", textAlign: "center" }}
              data-ad-client="ca-pub-9458208914000555"
              data-ad-slot="8020809607"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins> */}
          </Sidebar>
        </Article>
      </Main>

      <Footer>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </Footer>
    </Container>
  )
}
