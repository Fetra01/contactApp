export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const SHOW_CONTACT = "SHOW_CONTACT";

export function addContact(contact) {
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
}

export function showContact(contactId) {
    return{
        type: SHOW_CONTACT,
        payload: contactId,
    }
}