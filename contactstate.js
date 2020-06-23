import { createContext } from 'react';
import React, { useReducer }
import uuid from 'uuid'
import ContactContext from './contactContext';
import contactReducer from './contactReducer';


const contactContext = createContext();

export default contactContext