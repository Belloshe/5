import styles from '../styles/portfolio.module.css';
import Layout from './layout';
import Image from 'next/image'
import Im from './images/1.png';
import Imag from './images/2.png';
import Images from './images/3.png';

export default function Portfolio() {
  return (
    <Layout>
      <div className={styles.container}>
         <h1>Mina arbeten</h1>
        <ul className={styles.portfolioList}>
          <li>
            <h2>Projekt 1</h2>
            <Image src={Im} alt=" image" />
            <p>Personal Project</p>
            <a href="https://github.com/Belloshe/3/tree/new-branch" className={styles.portfolioLink}>Github</a>
            <a href="https://3s-silk.vercel.app/" className={styles.portfolioLink}>Vercel</a>
          </li>
          <li>
            <h2>Projekt 2</h2>
            <Image src={Imag} alt=" image" />
            <p>DateTime</p>
            <a href="https://github.com/Belloshe/2" className={styles.portfolioLink}>Github</a>
            <a href="https://belloshe.github.io/2/" className={styles.portfolioLink}>Github Pages</a>
          </li>
          <li>
            <h2>Projekt 3</h2>
            <Image src={Images} alt=" image" />
            <p>API</p>
            <a href="https://github.com/Belloshe/4/tree/master" className={styles.portfolioLink}>Github</a>
            <a href="https://4-belloshe.vercel.app/" className={styles.portfolioLink}>Vercel</a>
          </li>
          <li>
            <h2>Projekt 4</h2>
            <p>Articles</p>
            <a href="https://github.com/Belloshe/1" className={styles.portfolioLink}>Github</a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
