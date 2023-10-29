import { ADD, INCREMENT } from '../action/actionType';

const initialState = [];

const counterReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD :
            return [...state, {bird: action.payLoad, count: 0}];
        case INCREMENT :
            return state.map((task, index) => {
                if(index === action.payLoad) {
                    return {...task, count: task.count + 1};
                }
                return task;
            });
        default:
            return state;
    }
}

export default counterReducer;