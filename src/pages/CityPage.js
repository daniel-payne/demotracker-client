import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

import CityData from 'components/city/CityData'
import CityMap from 'components/city/CityMap'
import CityGlobe from 'components/city/CityGlobe'

import useParamsShow from 'hooks/useParamsShow'
import useParamsOverlay from 'hooks/useParamsOverlay'

import PageNavigation from 'common/PageNavigation'

import CITY from 'graphql/CITY'
import CITY_WITH_EVENTS from 'graphql/CITY_WITH_EVENTS'

const CityPage = () => {
  const { countryId, cityId } = useParams()

  const show = useParamsShow()
  const overlay = useParamsOverlay()

  const query = overlay === 'TERRORISM' ? CITY_WITH_EVENTS : CITY

  const { loading, error, data } = useQuery(query, {
    variables: { countryId, cityId },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <pre>{JSON.stringify(error, null, 2)} </pre>

  const { viewer, information } = data

  const { events } = viewer || {}
  const { country, countries } = information

  const { cities } = countries
  const { city } = country

  let display = <CityData city={city} events={events} />

  if (show === 'MAP') {
    display = (
      <CityMap
        countries={countries}
        selectedCountry={country}
        selectedCity={city}
        cities={cities}
        markers={events}
      />
    )
  } else if (show === 'GLOBE') {
    display = (
      <CityGlobe
        countries={countries}
        selectedCountry={country}
        selectedCity={city}
        cities={cities}
        markers={events}
      />
    )
  }

  return (
    <Box className="CityPage full-page">
      <PageNavigation show={show} overlay={overlay} country={country} city={city} />
      <Container className="fill-area" maxWidth={false} disableGutters>
        {display}
      </Container>
    </Box>
  )
}

export default CityPage
