import styles from './CatalogItem.module.scss';

function CatalogItem() {
    return (
        <div className={styles.catalogItem}>
            <h3 className={styles.catalogItemTitle}>
                Eames Lounge Chair & Ottoman
            </h3>
            <img src="/shark-house/img-1.jpg" alt="" />
            <div className={styles.catalogItemImages}>
                <div className={styles.catalogItemImage}>
                    <img src="/shark-house/img-2.jpg" alt="" />
                </div>
                <div className={styles.catalogItemImage}>
                    <img src="/shark-house/img-2.jpg" alt="" />
                </div>
                <div className={styles.catalogItemImage}>
                    <img src="/shark-house/img-2.jpg" alt="" />
                </div>
                <div className={styles.catalogItemImage}>
                    <img src="/shark-house/img-2.jpg" alt="" />
                </div>
                <div className={styles.catalogItemImage}>
                    <img src="/shark-house/img-2.jpg" alt="" />
                </div>
                <div className={styles.catalogItemImage}>
                    <img src="/shark-house/img-2.jpg" alt="" />
                </div>
                <div className={styles.catalogItemImage}>
                    <img src="/shark-house/img-2.jpg" alt="" />
                </div>
                <div className={styles.catalogItemImage}>
                    <img src="/shark-house/img-2.jpg" alt="" />
                </div>
                <div className={styles.catalogItemImage}>
                    <img src="/shark-house/img-2.jpg" alt="" />
                </div>
                <div className={styles.catalogItemImage}>
                    <img src="/shark-house/img-2.jpg" alt="" />
                </div>
            </div>
            <div className={styles.catalogItemFlex}>
                <span className={styles.catalogItemTitle}>75,000 руб.</span>
                <button className="btn">Купить</button>
            </div>
        </div>
    );
}

export { CatalogItem };
