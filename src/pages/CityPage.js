import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useParams } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

import CityData from 'components/city/CityData'
import CityMap from 'components/city/CityMap'
import CityGlobe from 'components/city/CityGlobe'

import useQueryShow from 'hooks/useQueryShow'
import useQueryOverlay from 'hooks/useQueryOverlay'

import PageNavigation from 'common/PageNavigation'

const CITY = gql`
  query selectedCity($countryId: ID, $cityId: ID) {
    countries {
      id
      name
      iso3Code
      iso2Code
      outline: geoJson
    }

    country(id: $countryId) {
      id
      name

      outline: geoJson

      cities {
        id
        name

        outline: geoJson
      }

      city(id: $cityId) {
        id
        name

        outline: geoJson
      }
    }
  }
`

const CityPage = () => {
  const { countryId, cityId } = useParams()

  const show = useQueryShow()
  const overlay = useQueryOverlay()

  const { loading, error, data } = useQuery(CITY, {
    variables: { countryId, cityId },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( </p>

  const countries = data.countries
  const cities = data.country.cities

  const country = data.country
  const city = country.city

  let display = <CityData city={city} />

  if (show === 'MAP') {
    display = (
      <CityMap
        countries={countries}
        selectedCountry={country}
        selectedCity={city}
        cities={cities}
      />
    )
  } else if (show === 'GLOBE') {
    display = (
      <CityGlobe
        countries={countries}
        selectedCountry={country}
        selectedCity={city}
        cities={cities}
      />
    )
  }

  return (
    <Box className="CityPage full-page">
      <PageNavigation show={show} overlay={overlay} country={country} city={city} />
      <Container maxWidth={false} disableGutters>
        {display}
      </Container>
    </Box>
  )
}

export default CityPage
