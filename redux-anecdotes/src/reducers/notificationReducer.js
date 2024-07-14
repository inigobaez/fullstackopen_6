
import { createSlice } from '@reduxjs/toolkit'


const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    appendNotification(state, action) {
      return action.payload
    },
    removeNotification(state, action) {
      if (state === action.payload) {
        return null
      } else {
        return state
      }

    }
  }
})
export const setNotification = (notification, clearOn) => {
  console.log('not,clearOn', notification, clearOn)
  return async dispatch => {
    //console.log('reducer', anecdote)
    dispatch(appendNotification(notification))
    setTimeout(() => {
      dispatch(removeNotification(notification))
    }, clearOn)
  }
}
export const { appendNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer