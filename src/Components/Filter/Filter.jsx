import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <div className={styles.wrapper}>
            <label>
                <span className={styles['label-text']}>Find contact:</span>
                <input
                    placeholder="Search contact"
                    className={styles.input}
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

export default Filter;
