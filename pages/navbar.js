import NextLink from 'next/link';
import styles from '../styles/navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Bella
      </div>
      <ul>
        <li>
          <NextLink href="/" passHref>
          home
          </NextLink>
        </li>
        <li>
          <NextLink href="/portfolio" passHref>
         Portfolio
          </NextLink>
        </li>
        <li>
          <NextLink href="/about" passHref>
      About
          </NextLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
