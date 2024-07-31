import React from 'react'
import { useState } from '../../../dist/index.7826abd7';
import NoteContext from './NoteContext';

const NoteContextState = (props) => {
    const [name, setName] = useState("dummy name");

    function getName(){
        console.log(name);
    }
  return (
    <NoteContext.provider value={{
        name, 
        setName,
        getName
    }}>
        {props.children}
    </NoteContext.provider>
  )
}

export default NoteContextState;
