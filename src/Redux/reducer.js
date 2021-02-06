import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT} from './actions';
import { contacts } from './states';


export const reducer = (state = contacts, action) => {

    let newContacts;

    switch(action.type) {
        case ADD_CONTACT:
            newContacts = [...state];
            newContacts.push(action.payload);
            return newContacts;

        case DELETE_CONTACT:
            newContacts= [...state];
            newContacts= newContacts.filter(contact => contact.id !== action.payload);
            return newContacts;

        case UPDATE_CONTACT:
            break;
        
        default:
            return state
    }
}