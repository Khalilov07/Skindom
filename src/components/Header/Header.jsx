import { Link } from 'react-router-dom';
import styles from './header.module.css'

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerTop}>
                    <select>
                        <option value="">Санкт-петербург</option>
                        <option value="">Санкт-петербург</option>
                        <option value="">Санкт-петербург</option>
                    </select>
                    <p> +8 495 259 25 00</p>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.links}>

                        <div className={styles.headerLeft}>
                            <Link to='/'>
                                <div className={styles.logo}>

                                </div>
                            </Link>
                            <li>
                                <Link className={styles.link} to='/'>Каталог</Link>
                            </li>
                            <li>
                                <Link className={styles.link} to='/'>Контакты</Link>
                            </li>
                            <li>
                                <Link className={styles.link} to='/'>Блог</Link>
                            </li>
                        </div>

                        <div className={styles.headerRight}>
                            <p>Search</p>
                            <p>Account</p>
                            <p>Basket</p>
                        </div>

                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;