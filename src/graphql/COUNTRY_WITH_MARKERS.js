import { gql } from 'apollo-boost'

const COUNTRY_WITH_MARKERS = gql`
  query COUNTRY_WITH_MARKERS($countryId: ID) {
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

      markers(area: TEN_SQUARE_KILOMETERS) {
        id
        latitude
        longitude
        eventCount
      }

      states {
        id
        name
        hascCode
        eventCount

        outline: geoJson
      }

      cities {
        id
        name
        eventCount

        outline: geoJson
      }
    }
  }
`

export default COUNTRY_WITH_MARKERS
