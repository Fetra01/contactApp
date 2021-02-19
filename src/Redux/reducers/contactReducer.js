import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT} from '../constant/type';


const initialState = {
    contacts: [
        {
            id: 1,
            nom: "John Doe",
            email: "john@gmail.com",
            tel: "555-555-5555",
        },
    
        {
            id: 2,
            nom: "Miguel Angel",
            email: "miguel@gmail.com",
            tel: "333-333-3333",
        },
    
        {
            id: 3,
            nom: "Pablo Escobar",
            email: "pablo@gmail.com",
            tel: "444-444-4444",
        },
    
        {
            id: 4,
            nom : "Franck Lucas",
            email: "franck@gmail.com",
            tel: "222-222-2222"
        }
    ],

    contact: null,
};

export const contactReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts],
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
        case GET_CONTACT:
            let arr = state.contacts.filter(
                contact => contact.id === action.payload
            );
            arr = arr.values();
            for(let val of arr){
                arr = val
            }
            return {
                ...state,
                contact: arr,
            };
        case UPDATE_CONTACT: 
            return {
                ...state,
                contacts: state.contacts.map((contact) =>
                    contact.id === action.payload ? action.payload : contact    
                )
            };

        /*case ADD_CONTACT:
            newContacts = [...state];
            newContacts.push(action.payload);
            return newContacts;

        case DELETE_CONTACT:
            newContacts= [...state];
            newContacts= newContacts.filter(contact => contact.id !== action.payload);
            return newContacts;

        case UPDATE_CONTACT:
            break;*/
        
        default:
            return state;
    }
}