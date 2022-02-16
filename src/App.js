import Header from './component/Header'
import { useState } from 'react'
import FeedbackList from './component/FeedbackList'
import Feedbackdata from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(Feedbackdata)
  return (
    <>
      <Header />

      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
