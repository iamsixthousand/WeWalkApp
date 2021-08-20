import {
    NO_FILTER,
    FILTER_ADDED,
    FILTER_DELETED
    } from './filterAC';

const initState = {

    filtered: ['none'],

}

function placesReducer(state = initState, action) {
    switch (action.type) {

        case NO_FILTER: {
            console.log(action.filtered)
            console.log(state)
            let newState = {...state,
                filtered: [action.filtered],
            };
            console.log(newState)
            return newState;
        }

        case FILTER_ADDED: {
            console.log(action.filtered)
            console.log(state)
            console.log(state.filtered)
            console.log('filter added')
            let filterS = [];
            state.filtered.forEach((elem) => {
                if (elem !== 'none' && elem !== action.filtered) {
                    filterS.push(elem);
                }
            })
            filterS.push(action.filtered)
            console.log(filterS)
            let newState = {...state, 
                filtered: filterS
            };
            console.log(newState)
            return newState;
        }

        case FILTER_DELETED: {
            console.log('filter deleted')
            let filterS = [];
            state.filtered.forEach((elem) => {
                if (elem !== action.filtered) {
                    filterS.push(elem);
                }
            })
                if (filterS.length === 0) {
                    filterS.push('none')
                }
            let newState = {...state, 
                filtered: filterS
            };
            console.log(newState);
            
            return newState;
        }

        default:
            return state;
    }
}

export default placesReducer;