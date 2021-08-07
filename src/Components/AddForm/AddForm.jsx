import React, { Component } from 'react';
import styles from './AddForm.module.css';

const initialState = {
    name: '',
    number: '',
};

class AddForm extends Component {
    state = {
        ...initialState,
    };

    userInputHandler = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handlerOnSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ ...initialState });
    };

    render() {
        const { name, number } = this.state;
        return (
            <form
                className={styles['form-wrapper']}
                onSubmit={this.handlerOnSubmit}
            >
                <label>
                    <span className={styles['label-text']}>First name:</span>
                    <input
                        className={styles.input}
                        placeholder="Ivanov Ivan"
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={this.userInputHandler}
                    />
                </label>
                <label>
                    <span className={styles['label-text']}>Phone number:</span>
                    <input
                        className={styles.input}
                        placeholder="+7-999-999-99-99"
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={this.userInputHandler}
                    />
                </label>
                <button type="submit" className={styles.button}>
                    Add contact
                </button>
            </form>
        );
    }
}

export default AddForm;
