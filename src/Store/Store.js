import {createStore } from 'redux'
import notesReducer from "../reducer/notesReducer"

let store = createStore(notesReducer)

export default store;