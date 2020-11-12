import { gql } from 'apollo-boost'

const COUNTRY_WITH_MARKERS = gql`
  query COUNTRY_WITH_MARKERS($countryId: ID) {
    reference {
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

        states {
          id
          name
          hascCode

          outline: geoJson
        }

        cities {
          id
          name

          outline: geoJson
        }
      }
    }
  }
`

export default COUNTRY_WITH_MARKERS
