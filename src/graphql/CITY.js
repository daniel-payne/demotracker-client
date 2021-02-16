import { gql } from 'apollo-boost'

const CITY = gql`
  query CITY($countryId: ID, $cityId: ID) {
    viewer {
      id
      role
    }
    information {
      countries {
        id
        name

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

        city(id: $cityId) {
          id
          name

          outline
        }
      }
    }
  }
`

export default CITY
