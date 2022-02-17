import Header from './component/Header'
import { useState } from 'react'
import FeedbackList from './component/FeedbackList'
import Feedbackdata from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(Feedbackdata)
  const deleteFeedback = (id) => {
    if (window.confirm('Are You SureYou Want to Delete ?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <>
      <Header />

      <div className='container'>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
