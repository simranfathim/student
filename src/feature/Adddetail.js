import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const contacts = [
    { id: 1, name: 'fathima', phoneno: '637336873663', email: 'sam@gmail.com', batchno:'22',course: 'fsd' },
]


const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        value: contacts
    },
    reducers: {
        addContact: (state, action) => {
            state.value.push(action.payload)
        
        }, updatecontact: (state, action) => {
            state.value.map((contacts) => {
                if (contacts.id == action.payload.id) {
                    contacts.name = action.payload.name
                    contacts.email = action.payload.email
                    contacts.course = action.payload.course
                    contacts.phoneno = action.payload.phoneno
                    contacts.batchno=action.payload.batchno

                }
            })
        }, deleteContact: (state, action) => {
            state.value = state.value.filter((contacts) => contacts.id !== action.payload.id)
        },viewcontact:(state,action)=>{
            state.value.push(action.payload)
        }


    }
})

export default contactSlice.reducer
export const { addContact, deleteContact, updatecontact,viewcontact } = contactSlice.actions
