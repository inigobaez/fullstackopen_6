import { createContext, useReducer } from 'react'

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return action.payload
    case "REMOVE":
      return null
    default:
      return state
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, null)
  const setNotification = (noti) => {
    notificationDispatch({ type: 'ADD', payload: noti })
    setTimeout(() => {
      notificationDispatch({ type: 'REMOVE' })

    }, 5000)
  }

  return (
    <NotificationContext.Provider value={[notification, setNotification]}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext