import { gql } from 'apollo-boost'

const COUNTRY = gql`
  query COUNTRY($countryId: ID) {
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

export default COUNTRY
