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

  const countries = data.countries
  const country = data.country

  const states = country.states || []
  const cities = country.cities || []
  const markers = country.markers || []

  let display

  if (show === 'MAP') {
    display = (
      <CountryMap
        countries={countries}
        selectedCountry={country}
        states={states}
        cities={cities}
        markers={markers}
      />
    )
  } else if (show === 'GLOBE') {
    display = (
      <CountryGlobe
        countries={countries}
        selectedCountry={country}
        states={states}
        cities={cities}
        markers={markers}
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
