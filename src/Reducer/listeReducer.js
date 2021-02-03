const INITIAL_STATE = {
    contacts : [
        {
            id : 1,
            nom : 'John Doe',
            email : 'john@gmail.com',
            tel : '555-555-5555'
        },
        {
            id : 2,
            nom : 'John Doe',
            email : 'john@gmail.com',
            tel : '555-555-5555'
        },
        {
            id : 3,
            nom : 'John Doe',
            email : 'john@gmail.com',
            tel : '555-555-5555'
        }
    ],

    show : true
}

export default function listeReducer(state = INITIAL_STATE, action) {
    
    switch(action.type) {
        case 'SHOW' : {
            return {
                ...state,
                show : !state.show
            }
        }
        default: 
            return state;
    }
}