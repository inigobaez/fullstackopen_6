import { useSelector } from 'react-redux'
import Anecdote from './Anecdote.jsx'

const AnecdoteList = () => {

  const filteredAnecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter === '') {
      return anecdotes
    } else {
      return anecdotes.filter(a => a.content.includes(filter))
    }

  })
  const sortedAnecdotes = [...filteredAnecdotes].sort((a, b) => a.votes > b.votes ? -1 : 1)
  return (
    <>
      {
        sortedAnecdotes.map(anecdote =>
          <Anecdote key={anecdote.id} anecdote={anecdote} />
        )
      }
    </>
  )
}
export default AnecdoteList