import Header from './component/Header'
import { useState } from 'react'
import FeedbackList from './component/FeedbackList'
import Feedbackdata from './data/FeedbackData'
import Feedbackstats from './component/Feedbackstats'
import Feedbackform from './component/Feedbackform'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [feedback, setFeedback] = useState(Feedbackdata)
  const deleteFeedback = (id) => {
    if (window.confirm('Are You SureYou Want to Delete ?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <>
      <Header />

      <div className='container'>
        <Feedbackform handleAdd={addFeedback} />
        <Feedbackstats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
