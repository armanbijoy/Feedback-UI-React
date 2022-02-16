import React from 'react'
import Feedbackitem from './Feedbackitem'
function FeedbackList({ feedback }) {
  if (!feedback || feedback.legth === 0) {
    return <p>No Feedback</p>
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <Feedbackitem key={item.key} item={item} />
      ))}
    </div>
  )
}

export default FeedbackList
