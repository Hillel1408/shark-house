import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="_container">
                <NavLink to="/">
                    <img
                        className={styles.footerLogo}
                        src="/shark-house/logo.png"
                        alt=""
                    />
                </NavLink>
            </div>
        </footer>
    );
}

export { Footer };
