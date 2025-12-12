import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    submissionId : ""
}

export const submissionSlice = createSlice({
    name: "submission",
    initialState,
    reducers: {
        setSubmissionIdIS: (state, action) => {
            state.submissionId = action.payload
        }
    }

})

export const { setSubmissionIdIS } = submissionSlice.actions

export default submissionSlice.reducer