import { createAction } from '@reduxjs/toolkit';

export const actionSignUp = createAction('AUTH/SIGN-UP');

export const actionSignIn = createAction('AUTH/SIGN-IN');

export const actionThisUserData = createAction('AUTH/GET-THIS-USER-DATA');
