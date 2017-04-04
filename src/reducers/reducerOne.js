export function reducerOne(state = {}, action) {
    switch(action.type) {
        case 'CONSOLE_MSG': 
        state = {
            ...state,
            consoleMsg: 'Get set, ready GO!'
        }
         console.log(state.consoleMsg);
         break;
    }
    return state;
}