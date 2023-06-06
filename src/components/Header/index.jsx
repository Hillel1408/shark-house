import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <div className={classNames('_container', styles.headerContainer)}>
                <NavLink to="/">
                    <img src="/logo.png" alt="" />
                </NavLink>
                <div className={styles.headerFlex}>
                    <div className={styles.headerSocialMedia}>
                        <ul>
                            <li>
                                <a href="/">
                                    <img src="/icon-1.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="/icon-2.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="/icon-3.svg" alt="" />
                                </a>
                            </li>
                        </ul>
                        <a href="tel:+7(985)950-85-25">+7(985)950-85-25</a>
                    </div>
                    <nav className={styles.headerNav}>
                        <ul>
                            <li>
                                <NavLink to="/about-us">О нас</NavLink>
                            </li>
                            <li>
                                <NavLink to="/delivery">
                                    Доставка и гарантия
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Каталог</NavLink>
                            </li>
                            <li>
                                <NavLink to="/order">Заказ</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export { Header };
