import classNames from 'classnames';
import styles from './Catalog.module.scss';

function Catalog() {
    return (
        <div className={classNames('_container', styles.catalog)}>
            <div className={styles.catalogItems}>
                <div className={styles.catalogItem}>
                    <h3 className={styles.catalogItemTitle}>
                        Eames Lounge Chair & Ottoman
                    </h3>
                    <img src="/img-1.jpg" alt="" />
                    <div className={styles.catalogItemImages}>
                        <div className={styles.catalogItemImage}>
                            <img src="/img-2.jpg" alt="" />
                        </div>
                        <div className={styles.catalogItemImage}>
                            <img src="/img-2.jpg" alt="" />
                        </div>
                        <div className={styles.catalogItemImage}>
                            <img src="/img-2.jpg" alt="" />
                        </div>
                        <div className={styles.catalogItemImage}>
                            <img src="/img-2.jpg" alt="" />
                        </div>
                        <div className={styles.catalogItemImage}>
                            <img src="/img-2.jpg" alt="" />
                        </div>
                        <div className={styles.catalogItemImage}>
                            <img src="/img-2.jpg" alt="" />
                        </div>
                        <div className={styles.catalogItemImage}>
                            <img src="/img-2.jpg" alt="" />
                        </div>
                        <div className={styles.catalogItemImage}>
                            <img src="/img-2.jpg" alt="" />
                        </div>
                        <div className={styles.catalogItemImage}>
                            <img src="/img-2.jpg" alt="" />
                        </div>
                        <div className={styles.catalogItemImage}>
                            <img src="/img-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className={styles.catalogItemFlex}>
                        <span className={styles.catalogItemTitle}>
                            75,000 руб.
                        </span>
                        <button className={styles.catalogItemBtn}>
                            Купить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Catalog };
