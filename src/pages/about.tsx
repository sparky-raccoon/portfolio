import Image from 'next/image'
import selfieJpg from '../../public/images/permanent/selfie.jpg';
import ectodermalJpg from '../../public/images/permanent/ectodermal_cells.jpg';
import styles from '@/styles/about.module.scss';

export default function About() {
    return (
        <main className={styles.main}>
            <p className={styles.introduction}>
            je suis une artiste développeuse qui sévit à Paris depuis quelques années, prête à prendre ses bagages pour élever des moutons avant que le monde n’explose.<br/>
j’ai passé mon enfance dans une littérature trop obscure pour mon âge. ma mère n’aime pas mes dessins.<br/>
je cherche à mêler différents médiums et représentations symboliques de formes humaines & moins humaines en investissant peu à peu l’art numérique. mes inspirations se trouvent dans l’ésotérisme, la science et la psyché.<br/>
pour toute question, ou collaboration sur un projet, envoyez-moi un email : <span>anicolydelsa@gmail.com</span>
            </p>
            <div className={styles.images}>
                <div className={styles.figureWrapper}>
                    <figure>
                        <Image src={selfieJpg} alt="selfie" priority />
                        <figcaption>fig 1. selfie</figcaption>
                    </figure>
                </div>
                <span />
                <div className={styles.figureWrapper}>
                    <figure>
                        <Image src={ectodermalJpg} alt="ectodermal neurites of ganglionic cells" priority />
                        <figcaption>fig 2. ectodermal neurites of ganglionic cells</figcaption>
                    </figure>
                </div>
            </div>
        </main>
    );
};