import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={classNames('_container', styles.footerFlex)}>
                <NavLink to="/">
                    <img
                        className={styles.footerLogo}
                        src="/shark-house/logo.png"
                        alt=""
                    />
                </NavLink>
                <NavLink to="/admin" className={styles.footerLink}>
                    Вход
                </NavLink>
            </div>
        </footer>
    );
}

export { Footer };
