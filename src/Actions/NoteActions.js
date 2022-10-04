export const typeNewNote = (newNote) => {
    return {
        type: "ADD_NEW_NOTE",
        payload: newNote
    }
}

export const deletedNotes = (id) => {
    return {
        type: "DELETE_NOTE",
        payload: id
    }
};
export const editedNotes = (updatedNotebook) => {
    return {
        type: "EDIT_NOTE",
        payload: {updatedNotebook}
    }
};