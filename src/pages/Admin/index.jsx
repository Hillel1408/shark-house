import classNames from 'classnames';
import { TableRow } from './TableRow';
import styles from './Admin.module.scss';

function Admin() {
    return (
        <div className={classNames(styles.admin)}>
            <div className={styles.adminTableWrapper}>
                <table>
                    <thead>
                        <tr>
                            <td>Номер заказа</td>
                            <td>ФИО</td>
                            <td>Телефон</td>
                            <td>Самовывоз</td>
                            <td>Адрес доставки</td>
                            <td>Товары</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow /> <TableRow /> <TableRow /> <TableRow />
                        <TableRow /> <TableRow /> <TableRow /> <TableRow />
                    </tbody>
                </table>
            </div>
            <button className="btn">Добавить</button>
        </div>
    );
}

export { Admin };
