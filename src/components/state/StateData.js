import React from 'react'

import EventDetails from 'components/event/EventDetails'

const StateData = (props) => {
  const { state } = props
  const { events } = state

  return (
    <div className="StateData">
      {events && events.map((event) => <EventDetails event={event} />)}
    </div>
  )
}

export default StateData
