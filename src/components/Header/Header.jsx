import { Link } from 'react-router-dom';
import styles from './header.module.css'
import { AccountBoxOutlined, Search, ShoppingBasket } from '@material-ui/icons';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerTop}>
                    <div className="container">
                        <div className={styles.headerTopContent}>
                            <select className={styles.headerTop__select}>
                                <option value="">Санкт-петербург</option>
                                <option value="">Санкт-петербург</option>
                                <option value="">Санкт-петербург</option>
                            </select>
                            <p> +8 495 259 25 00</p>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <nav className={styles.nav}>
                        <ul className={styles.links}>

                            <div className={styles.headerLeft}>
                                <Link to='/'>
                                    <div className={styles.logo}>
                                        <img src="./images/logo.png" alt="" />
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
                                <Search />
                                <AccountBoxOutlined />
                                <ShoppingBasket />
                            </div>

                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;