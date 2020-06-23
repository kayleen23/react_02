import axios from 'axios'
import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';

import{import {  } from "module";}

REGISTER_SUCCESS,
REGISTER_FAIL,
USER_LOADED,
AUTH_ERROR,
LOGIN_SUCCESS,
LOGIN_FAIL,
LOGOUT,
CLEAR_ERROS,
} from '../types';

const AuthState = props => {
    const initialstate ={
        const intialState = {
            taken: localStorage.getItem('taken')
            isAuthenticated: null,
        }
    )
}

const setAuthTaken = taken => {
    if(taken) {
        axios.defaults.header.common['x-auth-taken'] = taken;
    } else {
        delete axios.defaults.headers.common['x-auth-taken'];

    }
    }
}

