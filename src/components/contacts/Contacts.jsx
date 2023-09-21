
import { ContactsStyle } from "./Contacts.styled";

export const Contacts = ({contacts, deleteContact}) => {
    return (
        <ContactsStyle>
            {contacts.map(({ id, name, number }) => (
                <li className="list" key={id}>
                    <h3 className="list-name">{name}:</h3>
                    <p className="list-number">{number}</p>
                    <button className="btn" 
                    type="button"
                    onClick={() => deleteContact(id)}>Delete</button>
                    </li>
            ))}
            </ContactsStyle>
        
        
    )
};



