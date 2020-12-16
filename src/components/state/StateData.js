import React from 'react'

import EventDetails from 'components/event/EventDetails'

const StateData = (props) => {
  const { events } = props

  return (
    <div className="StateData">
      {events && events.map((event) => <EventDetails event={event} />)}
    </div>
  )
}

export default StateData
