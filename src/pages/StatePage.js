import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

import StateData from 'components/state/StateData'
import StateMap from 'components/state/StateMap'
import StateGlobe from 'components/state/StateGlobe'

import useQueryShow from 'hooks/useQueryShow'
import useQueryOverlay from 'hooks/useQueryOverlay'

import PageNavigation from 'common/PageNavigation'

import STATE from 'graphql/STATE'
import STATE_WITH_EVENTS from 'graphql/STATE_WITH_EVENTS'

const StatePage = () => {
  const { countryId, stateId } = useParams()

  const show = useQueryShow()
  const overlay = useQueryOverlay()

  const query = overlay === 'TERRORISM' ? STATE_WITH_EVENTS : STATE

  const { loading, error, data } = useQuery(query, {
    variables: { countryId, stateId },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( </p>

  const countries = data.countries
  const states = data.country.states

  const country = data.country
  const state = country.state

  let display = <StateData state={state} />

  if (show === 'MAP') {
    display = (
      <StateMap
        countries={countries}
        selectedCountry={country}
        selectedState={state}
        states={states}
      />
    )
  } else if (show === 'GLOBE') {
    display = (
      <StateGlobe
        countries={countries}
        selectedCountry={country}
        selectedState={state}
        states={states}
      />
    )
  }

  return (
    <Box className="StatePage full-page">
      <PageNavigation show={show} overlay={overlay} country={country} state={state} />
      <Container className="fill-area" maxWidth={false} disableGutters>
        {display}
      </Container>
    </Box>
  )
}

export default StatePage
