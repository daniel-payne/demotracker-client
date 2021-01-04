import React from 'react'

import EventDetails from 'components/event/EventDetails'

const CityData = (props) => {
  const { events } = props

  return (
    <div className="CityData">
      {events && events.map((event) => <EventDetails event={event} />)}
    </div>
  )
}

export default CityData
