import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './Button'
import RatingSelect from './RatingSelect'

function Feedbackform({ handleAdd }) {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [ratting, setRatting] = useState(10)

  const handleTextChange = (e) => {
    setText(e.target.value)
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text Must be at list 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        ratting,
      }
      handleAdd(newFeedback)
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <RatingSelect select={(ratting) => setRatting(ratting)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled} version='secondary'>
            Send
          </Button>

          {message && <div className='message'>{message}</div>}
        </div>
      </form>
    </Card>
  )
}

export default Feedbackform
