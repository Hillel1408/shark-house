import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
    const socialMediaRef = useRef(null);

    useEffect(() => {
        const a = () => {
            if (window.innerWidth <= 1080 && socialMediaRef.current) {
                socialMediaRef.current.remove();
                const ab = document.querySelector('.main');
                ab && ab.prepend(socialMediaRef.current);
            }
            if (window.innerWidth > 1080 && socialMediaRef.current) {
                const ab = document.querySelector('.header-flex');
                ab && ab.prepend(socialMediaRef.current);
            }
        };
        window.addEventListener('resize', a);
        a();
        return () => window.addEventListener('resize', a);
    }, []);

    return (
        <header className={styles.header}>
            <div className={classNames('_container', styles.headerContainer)}>
                <NavLink to="/">
                    <img className={styles.headerLogo} src="/logo.png" alt="" />
                </NavLink>
                <div className={classNames(styles.headerFlex, 'header-flex')}>
                    <div
                        ref={socialMediaRef}
                        className={styles.headerSocialMedia}
                    >
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
