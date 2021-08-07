import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Section from './Components/Section';
import AddForm from './Components/AddForm';
import UserPhoneBook from './Components/UserPhonebook';
import Filter from './Components/Filter';

class App extends Component {
    state = {
        contacts: [],
        filter: '',
    };

    onSubmit = data => {
        if (this.checkEnteredName(data)) {
            return alert(`${data.name} is already in contact`);
        }

        const contact = {
            id: uuidv4(),
            ...data,
        };
        this.setState(prevState => ({
            contacts: [contact, ...prevState.contacts],
        }));
    };

    onDeleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(
                contact => contact.id !== contactId,
            ),
        }));
    };

    checkEnteredName = data => {
        const { name } = data;
        const normalizedName = name.toLowerCase();
        const { contacts } = this.state;
        return contacts.some(
            ({ name }) => name.toLowerCase() === normalizedName,
        );
    };

    handlerFilterChange = data => {
        this.setState({ filter: data.currentTarget.value });
    };

    handlerUserSearch = () => {
        const { filter, contacts } = this.state;
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    render() {
        const {
            onSubmit,
            handlerFilterChange,
            handlerUserSearch,
            onDeleteContact,
        } = this;

        return (
            <Section>
                <AddForm onSubmit={onSubmit} />
                {this.state.contacts.length > 0 ? (
                    <Filter onChange={handlerFilterChange} />
                ) : (
                    ''
                )}

                {this.state.contacts.length > 0 ? (
                    <UserPhoneBook
                        contact={handlerUserSearch()}
                        onDelete={onDeleteContact}
                    />
                ) : (
                    <h2>There is no contacts</h2>
                )}
            </Section>
        );
    }
}

export default App;
