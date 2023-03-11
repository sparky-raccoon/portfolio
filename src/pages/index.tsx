import Image from 'next/image'
import archelonJpg from '../../public/images/permanent/archelon_skull.jpg';
import instagramSvg from '../../public/images/permanent/instagram.svg';
import githubSvg from '../../public/images/permanent/github.svg';
import styles from '@/styles/index.module.css';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
          <div className={styles.homeFigureWrapper}>
          <figure className={styles.homeFigure}>
              <Image src={archelonJpg} alt="Archelon skull" priority />
              <figcaption>fig 1. archelon skull</figcaption>
          </figure>
          </div>
      </main>
      <footer className={styles.footer}>
        <p className={styles.credits}>
          Portfolio 2023<br />
          Code, design & contents are my own.<br />
          <span>SSG with NextJs, fonts provided by <a href="https://www.design-research.be/by-womxn/" target="_blank" rel="noreferrer">WOMXN collective</a>.</span>
        </p>
        <div className={styles.externalLinks}>
          <a href="https://www.instagram.com/anicolyd.graph/" target="_blank" rel="noreferrer"><Image src={instagramSvg} alt="Instagram account" /></a>
          <a href="https://github.com/sparky-raccoon" target="_blank" rel="noreferrer"><Image src={githubSvg} alt="Github account" /></a>
        </div>
      </footer>
    </>
  )
};