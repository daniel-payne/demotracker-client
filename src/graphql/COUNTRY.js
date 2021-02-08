import { gql } from 'apollo-boost'

const COUNTRY = gql`
  query COUNTRY($countryId: ID) {
    viewer {
      id
      role
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

export default COUNTRY
