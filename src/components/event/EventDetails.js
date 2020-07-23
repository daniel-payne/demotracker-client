import React from 'react'

import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

import EventSummary from './parts/EventSummary'
import EventNumbers from './parts/EventNumbers'
import EventTarget from './parts/EventTarget'
import EventWeapons from './parts/EventWeapons'

const EventDetails = (props) => {
  const { event } = props

  return (
    <div className="EventDetails">
      <Box p={2}>
        <Card variant="outlined">
          <CardHeader title={event.perpetrator} subheader={event.date}></CardHeader>
          <CardContent>
            <EventNumbers event={event} />
            <EventTarget event={event} />
            <EventWeapons event={event} />
          </CardContent>
          <CardActions>
            <EventSummary event={event} />
          </CardActions>
        </Card>
      </Box>
    </div>
  )
}

export default EventDetails
