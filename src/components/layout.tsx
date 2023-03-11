import { useState, ReactNode, ReactEventHandler } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Heading from '@/components/heading';
import underSeasJpg from '../../public/images/permanent/underseas.jpg';
import styles from '@/styles/layout.module.css';

const LINK_LABELS: { [ key: string ]: string } = {
  about: 'about',
  blog: 'blog',
  project: 'ongoing projects',
  archive: 'archive',
};

export default function Layout({ children, className, routerPathName }: { children: ReactNode, className: string, routerPathName: string }) {
  const currentPathName = routerPathName.slice(1);
  const CustomLink = ({ pathname, label }: { pathname: string, label: string }) => <Link
    id={pathname}
    href={`/${pathname}`}
    style={{ fontWeight: currentPathName === pathname ? 'bold' : 'normal' }}
  >
    {label}
  </Link>

  return (
      <div className={className}>
        <Head>
          <title>Anicolydelsa</title>
          <meta name="description" content="Anicolydelsa Portfolio 2023" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.wrapper}>
          <div className={styles.commonSection}>
            <div className={styles.commonImage}>{
              currentPathName === '' && <Image src={underSeasJpg} alt="Under seas monster" priority />
            }</div>
            <div className={styles.commonText}>
              <Heading isFake>anicolydelsa ✺</Heading>
              <span className={styles.hexaYear}>7E7</span>
            </div>
          </div>
          <div className={styles.pageSection}>
            <header className={styles.header}>
                <div className={styles.pageTitle}>
                  <Heading level={1}><Link href="/">anicolydelsa</Link></Heading>
                  <span>/</span>
                  <Heading id="layout-path-heading" level={2} useBodyFont>{LINK_LABELS[currentPathName] || 'home'}</Heading>
                </div>
                <div className={styles.navAndBattery}>
                  <nav>
                    <ul>
                      <li><CustomLink pathname="about" label="about" /></li>
                      <li><CustomLink pathname="blog" label="blog" /></li>
                      <li><CustomLink pathname="project" label="ongoing project" /></li>
                      <li><CustomLink pathname="archive" label="archive" /></li>
                    </ul>
                  </nav>
                  <span className={styles.battery}>84%</span>
                </div>
              </header>
            {children}
          </div>
        </div>
      </div>
    )
}