import classNames from 'classnames';
import { CatalogItem } from '../../components/CatalogItem';
import { Pagination } from '../../components/Pagination';
import styles from './Catalog.module.scss';

function Catalog() {
    return (
        <div className={classNames(styles.catalog)}>
            <Pagination />
            <div className={styles.catalogItems}>
                <CatalogItem /> <CatalogItem /> <CatalogItem /> <CatalogItem />
                <CatalogItem /> <CatalogItem />
            </div>
            <Pagination />
        </div>
    );
}

export { Catalog };
