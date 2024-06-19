import React from 'react';
import styles from './homepage.module.css'
import NewProducts from './Sections/NewProducts/NewProducts';

const Catalog = () => {
    return (
        <div className="containerr">
            <div className={styles.skindom}>
                <img src="./images/homepage.png" alt="" />
                <div className={styles.text}>
                    <h1 >SKINDOM</h1>
                    <p >Специальные цены только до 30 апреля</p>
                    <button>ПЕРЕЙТИ В КАТАЛОГ</button>
                </div>
            </div>
            <div className={styles.wrapper}>
                <img src="./images/Rectangle 7.png" alt="" />
                <div className={styles.info}>
                    <h3 style={{ fontSize: "32px" }}>Ведущий эксперт на российском рынке <br /> профессиональной косметики <br /> из Кореи—ККshop™</h3>
                    <p>Мы делаем мир профессиональной корейской косметики доступным <br />для каждого косметолога в России, предоставляя возможность работать <br />с лучшими достижениями корейских учёных и специалистов в области <br />сохранения здоровья и ухода за кожей</p>
                    <li><a href="">Подробнее</a></li>
                </div>
            </div>
            <div className={styles.buttonss}>
                <div className={styles.form}>БЕЗУПРЕЧНЫЙ СОСТАВ <br /> И ЭФФЕКТИВНОСТЬ</div>
                <div className={styles.form}>НАТУРАЛЬНОСТЬ И <br /> ЭКОЛОГИЧНОСТЬ</div>
                <div className={styles.form}>НАЛИЧНЫЙ <br /> И БЕЗНАЛИЧНЫЙ РАСЧЕТ</div>
                <div className={styles.form}>ДОСТАВКА <br /> ПО ВСЕЙ РОССИИ</div>
            </div>

            <NewProducts />

        </div>
    );
};

export default Catalog;