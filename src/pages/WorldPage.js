import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

import WorldMap from 'components/world/WorldMap'
import WorldGlobe from 'components/world/WorldGlobe'
import WorldData from 'components/world/WorldData'

import PageNavigation from 'common/PageNavigation'

import useQueryShow from 'hooks/useQueryShow'
import useQueryOverlay from 'hooks/useQueryOverlay'

import WORLD from 'graphql/WORLD'
import WORLD_WITH_MARKERS from 'graphql/WORLD_WITH_MARKERS'

import 'css/WorldPage.css'

const WorldPage = () => {
  const [enableRotation, setRotation] = useState(false)

  const show = useQueryShow()
  const overlay = useQueryOverlay()

  const query = overlay === 'TERRORISM' ? WORLD_WITH_MARKERS : WORLD

  const { loading, error, data } = useQuery(query)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( {error.message}</p>

  const { countries, markers } = data

  let display

  if (show === 'MAP') {
    display = <WorldMap countries={countries} markers={markers} />
  } else if (show === 'GLOBE') {
    display = <WorldGlobe countries={countries} markers={markers} enableRotation={enableRotation} />
  } else {
    display = <WorldData countries={countries} />
  }

  const handleRotation = () => {
    const nextRotation = !enableRotation
    setRotation(nextRotation)
  }

  const overflowClass = show === 'MAP' || show === 'GLOBE' ? 'overflow-hidden' : ''

  return (
    <Box className={'WorldPage full-page ' + overflowClass}>
      {show === 'GLOBE' && (
        <div style={{ position: 'absolute', bottom: 24, right: 24 }}>
          <Button onClick={handleRotation}>Rotate {enableRotation}</Button>
        </div>
      )}
      <PageNavigation show={show} overlay={overlay} />
      <Container className="fill-area" maxWidth={false} disableGutters>
        {display}
      </Container>
    </Box>
  )
}

export default WorldPage
