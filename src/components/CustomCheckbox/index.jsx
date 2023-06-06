import styles from './CustomCheckbox.module.scss';

function CustomCheckbox() {
    return (
        <div className={styles.customCheckbox}>
            <input type="checkbox" />
            <span></span>
        </div>
    );
}

export { CustomCheckbox };
