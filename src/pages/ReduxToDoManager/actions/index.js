import {createAction} from 'redux-actions';

export const COMPLETE_TODO = createAction('COMPLETE_TODO');
export const EDIT_TODO = createAction("EDIT_TODO");
export const DELETE_TODO = createAction("DELETE_TODO");

export const CREATE_TODO = createAction("CREATE_TODO");