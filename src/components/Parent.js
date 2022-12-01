import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';
import Child from './Child';

const Parent = () => {
    const { count } = useContext(COUNTER_CONTEXT)
    return (
        <div>
            <div
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{count}</h5>
            </div>

            <Child />
        </div>
    );
};

export default Parent;