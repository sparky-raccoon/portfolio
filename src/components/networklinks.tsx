import Image from 'next/image'
import instagramSvg from '../../public/images/permanent/instagram.svg';
import githubSvg from '../../public/images/permanent/github.svg';
import styles from '@/styles/networklinks.module.scss';

export default function NetworkLinks({ fixed }: { fixed?: boolean }) {
	return (
		<div className={`${styles.externalLinks} ${fixed ? styles.fixed : ''}`}>
			<a href="https://www.instagram.com/anicolyd.graph/" target="_blank" rel="noreferrer"><Image src={instagramSvg} alt="Instagram account" /></a>
			<a href="https://github.com/sparky-raccoon" target="_blank" rel="noreferrer"><Image src={githubSvg} alt="Github account" /></a>
		</div>
	)
}