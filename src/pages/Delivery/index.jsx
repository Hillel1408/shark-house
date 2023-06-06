import classNames from 'classnames';
import styles from './Delivery.module.scss';

function Delivery() {
    return (
        <div className={classNames(styles.delivery)}>
            <h1 className="title">Доставка и гарантия.</h1>
            <div className={styles.deliveryBlock}>
                <div>
                    <h2 className="sub-title">Доставка.</h2>
                    <ul className={styles.deliveryText}>
                        <li>Доставка в пределах МКАД - 1000 руб.</li>
                        <li>Доставка за МКАД (до 25км от МКАД) - 1500 руб.</li>
                        <li>Сборка - 500 руб.</li>
                    </ul>
                </div>
                <p className={styles.deliveryText}>
                    Доставка в регионы России осуществляется следующими ТК:
                    СДЭК, ПЭК, КИТ, Деловые линии, Почта России - стоимость
                    будет определяться самой ТК, по выбору клиента.
                </p>
            </div>
            <div className={styles.deliveryBlock}>
                <p className={styles.deliveryText}>
                    На всю нашу продукцию мы предоставляем гарантию 12 месяцев с
                    момента доставки.
                </p>
                <div className={styles.deliveryText}>
                    <p>
                        Ненадлежащее использование нашей продукции влечет за
                        собой прерывание гарантийного срока!
                    </p>
                    <p>
                        Механические повреждения кожи, каркаса и других
                        элементов, в результате небрежной эксплуатации под
                        гарантийный случай не подпадают.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="sub-title">Гарантия.</h2>
                <p className={styles.deliveryText}>
                    Условия гарантии и правила эксплуатации описаны в данном
                    разделе.
                </p>
            </div>
            <div className={styles.deliveryBlock}>
                <div>
                    <h2
                        className={classNames(
                            'sub-title',
                            styles.deliverySubTitle
                        )}
                    >
                        Правила обмена и возврата товара
                    </h2>
                    <p className={styles.deliveryText}>
                        Гарантийный период – это срок, во время которого,
                        обнаружив недостаток товара, вы можете потребовать
                        принять меры по устранению дефекта.
                    </p>
                </div>
                <div className={styles.deliveryText}>
                    <p>С какого момента начинается гарантия?</p>
                    <ul className={styles.deliveryList}>
                        <li>
                            С момента передачи товара потребителю, если в
                            договоре нет уточнения.
                        </li>
                        <li>
                            При заказе товара из интернет-магазина гарантия
                            начинается со дня доставки.
                        </li>
                    </ul>
                </div>
                <div className={styles.deliveryText}>
                    <p>Обслуживание по гарантии включает в себя:</p>
                    <ul className={styles.deliveryList}>
                        <li>
                            Устранение недостатков товара в сервисных центрах.
                        </li>
                        <li>
                            Возврат товара и перечисление денежных средств на
                            счёт покупателя.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.deliveryBlock}>
                <div>
                    <h2
                        className={classNames(
                            'sub-title',
                            styles.deliverySubTitle
                        )}
                    >
                        Возврат денежных средств
                    </h2>
                    <p className={styles.deliveryText}>
                        Срок возврата денежных средств составляет 5 дней после
                        предъявления покупателем обоснованных требований о
                        возврате.
                    </p>
                </div>
                <div className={styles.deliveryText}>
                    <p>
                        Случаи, в которых гарантийное обслуживание не
                        предоставляется:
                    </p>
                    <ul className={styles.deliveryList}>
                        <li>
                            Наличие повреждений в результате самостоятельной
                            сборки, самовывоза и хранения.
                        </li>
                        <li>
                            Нарушение правил эксплуатации и ухода за изделиями,
                            повлекших поломку.
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h2
                    className={classNames('sub-title', styles.deliverySubTitle)}
                >
                    Послегарантийное обслуживание
                </h2>
                <p className={styles.deliveryText}>
                    Даже самая качественная мебель со временем изнашивается и
                    может потребовать ремонта.
                </p>
                <p className={styles.deliveryText}>
                    После окончания гарантийного периода имеется возможность
                    послегарантийного обслуживания. Данная услуга
                    предоставляется продавцом при наличии возможности и
                    комплектующих.
                </p>
            </div>
        </div>
    );
}

export { Delivery };
