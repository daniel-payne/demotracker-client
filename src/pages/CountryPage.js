import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

import PageNavigation from 'common/PageNavigation'

import CountryData from 'components/country/CountryData'
import CountryMap from 'components/country/CountryMap'
import CountryGlobe from 'components/country/CountryGlobe'

import useQueryShow from 'hooks/useQueryShow'
import useQueryOverlay from 'hooks/useQueryOverlay'

import COUNTRY from 'graphql/COUNTRY'
import COUNTRY_WITH_MARKERS from 'graphql/COUNTRY_WITH_MARKERS'

const CountryPage = () => {
  const { countryId } = useParams()

  const show = useQueryShow()
  const overlay = useQueryOverlay()

  const query = overlay === 'TERRORISM' ? COUNTRY_WITH_MARKERS : COUNTRY

  const { loading, error, data } = useQuery(query, {
    variables: { countryId },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( </p>

  const { viewer, reference } = data

  const { countryMarkers, countryCounts } = viewer || {}
  const { countries, country } = reference

  const states = country.states || []
  const cities = country.cities || []

  if (countryCounts) {
    for (const count of countryCounts) {
      const state = states.find((item) => item.id === count.id)
      const city = cities.find((item) => item.id === count.id)

      if (state) {
        state.eventCount = count.eventCount
      } else if (city) {
        city.eventCount = count.eventCount
      }
    }
  }

  let display

  if (show === 'MAP') {
    display = (
      <CountryMap
        countries={countries}
        selectedCountry={country}
        states={states}
        cities={cities}
        markers={countryMarkers}
      />
    )
  } else if (show === 'GLOBE') {
    display = (
      <CountryGlobe
        countries={countries}
        selectedCountry={country}
        states={states}
        cities={cities}
        markers={countryMarkers}
      />
    )
  } else {
    display = <CountryData country={country} states={states} cities={cities} />
  }

  return (
    <Box className="CountryPage full-page">
      <PageNavigation show={show} overlay={overlay} country={country} />
      <Container className="fill-area" maxWidth={false} disableGutters>
        {display}
      </Container>
    </Box>
  )
}

export default CountryPage
