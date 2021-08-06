import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddForm from './Components/AddForm';
import UserPhoneBook from './Components/UserPhonebook';

class App extends Component {
    state = {
        contacts: [],
    };

    onSubmit = data => {
        const contact = {
            id: uuidv4(),
            ...data,
        };
        this.setState(prevState => ({
            contacts: [contact, ...prevState.contacts],
        }));
    };

    render() {
        return (
            <>
                <AddForm onSubmit={this.onSubmit} />
                {this.state.contacts.length > 0 ? (
                    <UserPhoneBook contact={this.state.contacts} />
                ) : (
                    <h2>There is no contacts</h2>
                )}
            </>
        );
    }
}

export default App;
