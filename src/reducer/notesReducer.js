let initialState = {
    notebooks: [
        {
            id: "1",
            title: "Advance React-Redux",
            date: "02-09-2022",
            description:"This lesson will introduce you to advance concepts in React-Redux"
        }
    ]
}

let  noteReducers = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_NEW_NOTE":
            return {
                ...state, notebooks: [...state.notebooks, action.payload]
            };
        
        case "DELETE_NOTE":
            const deletedNotes = state.notebooks.filter((notebook) =>
                notebook.id!== action.payload)
            return {
                ...state, notebooks:deletedNotes
            }
        
        case "EDIT_NOTE":
            const updatedNotes = state.notebooks.map((notebook) => {
                if(notebook.id===action.payload.updatedNotebook.id) {
                    return action.payload.updatedNotebook;
                }
                else{return notebook}
            })
            return {...state, notebooks:updatedNotes}
        default:
    return state
    }
}

export default noteReducers;