import React, { Component } from 'react';

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
            <form onSubmit={this.handlerOnSubmit}>
                <label>
                    First name{' '}
                    <input
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
                    Phone number
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={this.userInputHandler}
                    />
                </label>
                <button type="button" onClick={this.handlerOnSubmit}>
                    Add contact
                </button>
            </form>
        );
    }
}

export default AddForm;
