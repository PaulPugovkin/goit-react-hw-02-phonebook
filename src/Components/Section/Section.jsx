import styles from './Section.module.css';

const Section = ({ children }) => {
    return <section className={styles.wrapper}>{children}</section>;
};

export default Section;
