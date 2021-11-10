//call useState
// return piece of State AND a function to toggle it
import { useState } from 'react';

export function useToggle(initialVal = false){
    // call useState, 'reserve piece of state'
    const [ state, setState ] = useState(initialVal);
    const toggle = () => {
        setState(!state);
    };
    // return piece of state AND a function to toggle it
    return [state, toggle];
};

