import Card from './shared/Card'
import PropTypes from 'prop-types'

function Feedbackitem({ item }) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

Feedbackitem.prototype = {
  item: PropTypes.object.isRequired,
}
export default Feedbackitem
