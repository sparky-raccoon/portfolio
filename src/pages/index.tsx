import Head from 'next/head'
import Image from 'next/image'
import Heading from '../components/Heading';
import archelonJpg from '../../public/images/permanent/archelon_skull.jpg';
import underSeasJpg from '../../public/images/permanent/underseas.jpg';
import instagramSvg from '../../public/images/permanent/instagram.svg';
import githubSvg from '../../public/images/permanent/github.svg';
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Anicolydelsa</title>
        <meta name="description" content="Anicolydelsa Portfolio 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.commonSection}>
          <div className={styles.commonImage}><Image src={underSeasJpg} alt="Under seas monster" /></div>
          <div className={styles.commonText}>
            <Heading isFake>anicolydelsa ✺</Heading>
            <span>7E7</span>
          </div>
        </div>
        <div className={styles.pageSection}>
          <header className={styles.header}>
              <div className={styles.pageTitle}>
                <Heading level={1}>anicolydelsa</Heading>
                <span>/</span>
                <Heading level={2} useBodyFont>home</Heading>
              </div>
              <div className={styles.navAndBattery}>
                <nav>
                  <ul>
                    <li>about</li>
                    <li>blog</li>
                    <li>ongoing project</li>
                    <li>archive</li>
                  </ul>
                </nav>
                <span>84%</span>
              </div>
            </header>
          <main className={styles.main}>
            <figure className={styles.homeFigure}>
              <Image src={archelonJpg} alt="Archelon skull" />
              <figcaption>fig 1. archelon skull</figcaption>
            </figure>
          </main>
          <footer className={styles.footer}>
            <p>
              Portfolio 2023<br />
              Code, design & contents are my own<br />
              SSG with NextJs, fonts provided by WOMXN collective
            </p>
            <div className={styles.externalLinks}>
              <a href="https://www.instagram.com/anicolyd.graph/" target="_blank" rel="noreferrer"><Image src={instagramSvg} alt="Instagram account" /></a>
              <a href="https://github.com/sparky-raccoon" target="_blank" rel="noreferrer"><Image src={githubSvg} alt="Github account" /></a>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
