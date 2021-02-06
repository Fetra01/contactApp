import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT} from './actions';
import { contacts } from './states';


export const reducer = (state = contacts, action) => {

    switch(action.type) {
        case ADD_CONTACT:
            break;
        case DELETE_CONTACT:
            break;
        case UPDATE_CONTACT:
            break;
        
        default:
            return state
    }
}