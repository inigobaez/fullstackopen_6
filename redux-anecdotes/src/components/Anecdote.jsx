import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, removeNotification } from "../reducers/notificationReducer"
import { useDispatch } from 'react-redux'

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()
  const vote = () => {
    //console.log('voting for', id)
    const votedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    //console.log('comp', votedAnecdote)
    dispatch(voteAnecdote(votedAnecdote))
    const notification = `You voted ${anecdote.content}`
    dispatch(setNotification(notification, 1000))
  }
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
  )
}

export default Anecdote