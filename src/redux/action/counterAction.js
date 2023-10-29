import { ADD, INCREMENT } from './actionType';

export const add = (bird) => {
    return {
        type : ADD,
        payLoad: bird
    }
}

export const increment = (index) => {
    return {
        type: INCREMENT,
        payLoad: index
    }
}
