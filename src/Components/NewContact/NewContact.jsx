import styles from './NewContact.module.css';

const NewContact = ({ name, number, onDelete, id }) => {
    return (
        <li className={styles.item}>
            {name}: {number}{' '}
            <button
                className={styles.button}
                type="button"
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </li>
    );
};

export default NewContact;
