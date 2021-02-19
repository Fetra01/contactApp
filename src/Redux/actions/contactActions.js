import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT } from '../constant/type';

// Actions

// ADD a contact
export const addContact = (contact) => ({
    type: ADD_CONTACT,
    payload: contact,
});

// DELETE a contact
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id,
});

// GET a contact
export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id,
});

// UPDATE a contact
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
});




/*export function addContact(contact) {
    return {
        type: ADD_CONTACT,
        payload: contact,
    }
} 

export function deleteContact(contactId) {
    return {
        type: DELETE_CONTACT,
        payload: contactId,
    }
}

export function updateContact(contact) {
    return {
        type: UPDATE_CONTACT,
        payload: contact,
    }
}*/
