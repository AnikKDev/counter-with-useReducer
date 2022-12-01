import React, { Fragment, useContext, useState } from 'react';
import { COUNTER_CONTEXT } from '../App';
const Child = () => {
    const { count, setCount } = useContext(COUNTER_CONTEXT)
    return (
        <Fragment>
            <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center dark:text-white">{count}</h5>
                <div
                    className='flex justify-evenly'
                >
                    <button
                        className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                        onClick={() => setCount(count - 1)}>Decrement</button>
                    <button
                        className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                        onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
                </div>

            </div>
        </Fragment>
    );
};
export default Child;