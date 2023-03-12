import Image from 'next/image'
import NetworkLinks from '@/components/networklinks';
import archelonJpg from '../../public/images/permanent/archelon_skull.jpg';
import styles from '@/styles/index.module.scss';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.figureWrapper}>
          <figure>
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
        <NetworkLinks />
      </footer>
    </>
  )
};