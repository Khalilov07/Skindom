import React from 'react';
import styles from './newproduct.module.css'


const NewProducts = () => {
    return (
        <div>
            <h1 style={{ padding: "64px 0 32px 0" }}>Новинки</h1>
            <div className={styles.cont}>

                <div className={styles.NewProducts}>
                    <div className={styles.NeweProduct}>
                        <div className={styles.NeweProduct__img}>
                            <img src="./images/image1.png" alt="" />
                        </div>
                        <div className={styles.sell}>
                            <h3>SELL</h3>
                        </div>
                    <h4>Slimming Gel Body</h4>
                    <p>Гель для тела для похудения</p>
                    <p>2 480 руб</p>
                    <p>3579 руб</p>
                    </div>
                    <div className={styles.NeweProduct}>
                        <div className={styles.NeweProduct__img}>
                            <img src="./images/image1.png" alt="" />
                        </div>
                        <div className={styles.sell}>
                            <h3>SELL</h3>
                        </div>
                    <h4>Slimming Gel Body</h4>
                    <p>Гель для тела для похудения</p>
                    <p>2 480 руб</p>
                    <p>3579 руб</p>
                    </div>
                    <div className={styles.NeweProduct}>
                        <div className={styles.NeweProduct__img}>
                            <img src="./images/image1.png" alt="" />
                        </div>
                        <div className={styles.sell}>
                            <h3>SELL</h3>
                        </div>
                    <h4>Slimming Gel Body</h4>
                    <p>Гель для тела для похудения</p>
                    <p>2 480 руб</p>
                    <p>3579 руб</p>
                    </div>
                    <div className={styles.NeweProduct}>
                        <div className={styles.NeweProduct__img}>
                            <img src="./images/image1.png" alt="" />
                        </div>
                        <div className={styles.sell}>
                            <h3>SELL</h3>
                        </div>
                    <h4>Slimming Gel Body</h4>
                    <p>Гель для тела для похудения</p>
                    <p>2 480 руб</p>
                    <p>3579 руб</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewProducts;