import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

import WorldMap from 'components/world/WorldMap'
import WorldGlobe from 'components/world/WorldGlobe'
import WorldData from 'components/world/WorldData'

import PageNavigation from 'common/PageNavigation'

import useParamsShow from 'hooks/useParamsShow'
import useParamsOverlay from 'hooks/useParamsOverlay'

import WORLD from 'graphql/WORLD'
import WORLD_WITH_DATA from 'graphql/WORLD_WITH_DATA'

import 'css/WorldPage.css'

const WorldPage = () => {
  const [enableRotation, setRotation] = useState(false)

  const show = useParamsShow()
  const overlay = useParamsOverlay()

  const query = overlay === 'TERRORISM' ? WORLD_WITH_DATA : WORLD

  const { loading, error, data } = useQuery(query)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( {error.message}</p>

  const { viewer, information } = data
  const { globalMarkers, globalCounts } = viewer || {}
  const { countries } = information

  if (globalCounts) {
    for (const count of globalCounts) {
      const country = countries.find((item) => item.id === count.id)

      if (country) {
        country.eventCount = count.eventCount
      }
    }
  }

  let display

  const handleRotation = () => {
    const nextRotation = !enableRotation
    setRotation(nextRotation)
  }

  if (show === 'MAP') {
    display = <WorldMap countries={countries} markers={globalMarkers} />
  } else if (show === 'GLOBE') {
    display = (
      <WorldGlobe countries={countries} markers={globalMarkers} enableRotation={enableRotation} />
    )
  } else {
    display = <WorldData countries={countries} />
  }

  const overflowClass = show === 'MAP' || show === 'GLOBE' ? 'overflow-hidden' : ''

  return (
    <Box className={'WorldPage full-page ' + overflowClass}>
      {show === 'GLOBE' && (
        <div style={{ position: 'absolute', bottom: 24, right: 24 }}>
          <Button onClick={handleRotation}>Rotate</Button>
        </div>
      )}
      <PageNavigation show={show} overlay={overlay} viewer={viewer} />
      <Container className="fill-area" maxWidth={false} disableGutters>
        {display}
      </Container>
    </Box>
  )
}

export default WorldPage
