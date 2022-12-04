import { createContext, useReducer, useState } from 'react';
import Child from './components/Child';
import Counter from './components/Counter';
import LongForm from './components/LongForm';
import Parent from './components/Parent';
import ShortForm from './components/ShortForm';
export const COUNTER_CONTEXT = createContext();
function App() {
  const [count, setCount] = useState(0);
  // creating a context 
  /* 
   <COUNTER_CONTEXT.Provider value={value}>
        <div>
          <Parent />
          <ShortForm /> 
        </div>
    </COUNTER_CONTEXT.Provider>
  */

  // creating provider value
  const value = { count, setCount };


  return (
    <div>
      <LongForm />
    </div>
  );
}

export default App;
