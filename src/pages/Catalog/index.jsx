import classNames from 'classnames';
import { CatalogItem } from '../../components/CatalogItem';
import styles from './Catalog.module.scss';

function Catalog() {
    return (
        <div className={classNames('_container', styles.catalog)}>
            <div className={styles.catalogItems}>
                <CatalogItem /> <CatalogItem /> <CatalogItem /> <CatalogItem />
                <CatalogItem />
            </div>
        </div>
    );
}

export { Catalog };
