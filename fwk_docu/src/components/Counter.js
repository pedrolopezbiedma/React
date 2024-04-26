import { useReducer } from 'react';

import Panel from './Panel'
import Button from './Button'

// Initial state
const initialState = {
    count: 0,
    valueToIncrement: ''
}

// Actions
const INCREMENT_COUNT = 'increment_count'
const DECREMENT_COUNT = 'decrement_count';
const SET_VALUE_TO_INCREMENT = 'set_value_to_increment';
const ADD_INCREMENT_TO_COUNT = 'add_increment_to_count';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
    
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        
        case SET_VALUE_TO_INCREMENT:
            return {
                ...state,
                valueToIncrement: action.payload
            }

        case ADD_INCREMENT_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToIncrement,
                valueToIncrement: 0
            }

        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleIncrement = () => {
        dispatch({ type: INCREMENT_COUNT })
    }

    const handleDecrement = () => {
        dispatch({ type: DECREMENT_COUNT })
    }

    const handleInputChange = (event) => {
        dispatch({ type: SET_VALUE_TO_INCREMENT, payload: parseInt(event.target.value) })
    }

    const handleAddToCount = (event) => {
        event.preventDefault();
        dispatch({ type: ADD_INCREMENT_TO_COUNT })
    }

    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count: { state.count }</h1>
            <div className='flex flex-row'>
                <Button primary onClick={handleIncrement}>Increment the count</Button>
                <Button primary onClick={handleDecrement}>Decrement the count</Button>
            </div>
            <div>
                <form onSubmit={handleAddToCount}>
                    <label htmlFor='count'>Number to add</label>
                    <input className='p-1 m-3 bg-gray-50 border border-gray-300' id='count' type='number' value={ state.valueToIncrement } onChange={(event) => handleInputChange(event)}/>
                    <Button primary>Add the count</Button>
                </form>
            </div>
        </Panel>
    )
}

export default Counter;