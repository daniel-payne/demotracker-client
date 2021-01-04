import { gql } from 'apollo-boost'

const COUNTRY_WITH_MARKERS = gql`
  query COUNTRY_WITH_MARKERS($countryId: ID) {
    viewer {
      id
      role

      countryCounts(id: $countryId) {
        id
        eventCount
      }

      countryMarkers(id: $countryId) {
        id
        latitude
        longitude
        eventCount
      }
    }

    information {
      countries {
        id
        name
        iso3Code
        iso2Code
        outline
      }

      country(id: $countryId) {
        id
        name

        outline

        states {
          id
          name
          hascCode

          outline
        }

        cities {
          id
          name

          outline
        }
      }
    }
  }
`

export default COUNTRY_WITH_MARKERS
