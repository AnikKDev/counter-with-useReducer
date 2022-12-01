import React, { Fragment, useReducer } from 'react';

const Counter = () => {

    //? reducer
    const initialState = 0;
    // 1. reducer function will get two elements as its param. First one will be the old state. ager jei state ta chilo sheta (amra je ager state er upor base kore new state declare korina?...oije setState function er vetor callback diye, param hishebe prevstate naamer ekta argument niye, shei prev state ta. in this case, initial state for the starter).

    // 2. second param hocche, action. New state jeta sheta hocche action. eta muloto denote kortese, action er type ta ki..ba seta diye amra ki kortesi. jei kaaj korte chai, sheta hocche action.
    const reducer = (state, action) => {
        console.log(state)
        if (action.type === 'INCREMENT') {
            return state + 1;
        } else if (action.type === 'DECREMENT') {
            return state - 1;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Fragment>
            <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center dark:text-white">{state}</h5>
                <div
                    className='flex justify-evenly'
                >
                    <button
                        onClick={() => dispatch({ type: 'DECREMENT' })}
                        className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                    >Decrement -</button>
                    <button
                        onClick={() => dispatch({ type: 'INCREMENT' })}
                        className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                    >Increment +</button>
                </div>

            </div>
        </Fragment>
    );
};

export default Counter;