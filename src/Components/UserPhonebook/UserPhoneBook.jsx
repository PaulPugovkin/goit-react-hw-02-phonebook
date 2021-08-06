import NewContact from '../NewContact';

const UserPhoneBook = ({ contact }) => {
    return (
        <div>
            <h2>Your contacts</h2>
            <ul>
                {contact.map(({ id, name, number }) => (
                    <NewContact key={id} name={name} number={number} />
                ))}
            </ul>
        </div>
    );
};

export default UserPhoneBook;
