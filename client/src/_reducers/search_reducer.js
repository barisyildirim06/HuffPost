import {
    INPUT_VALUE
} from '../_actions/types';

export default function(state="",action){
    console.log('reducer', action)
    switch(action.type){
        case INPUT_VALUE:
            return {...state}, action.payload;
        default:
            return state;
    }
}

