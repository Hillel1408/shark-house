import classNames from 'classnames';
import { CustomCheckbox } from '../../components/CustomCheckbox';
import styles from './Order.module.scss';

function Order() {
    return (
        <div className={classNames(styles.order)}>
            <form action="">
                <label className="label">
                    ФИО
                    <input type="text" />
                </label>
                <label className="label">
                    Телефон
                    <input type="tel" />
                </label>
                <label className="label">
                    Самовывоз
                    <div>
                        <CustomCheckbox />
                        ул. 3-е Почтовое отделение, 98А стр 1, Москва,
                        Московская обл., 140014
                    </div>
                </label>
                <label className="label">
                    Адрес доставки
                    <textarea></textarea>
                </label>
            </form>
        </div>
    );
}

export { Order };
