import { gql } from 'apollo-boost'

const CITY = gql`
  query CITY($countryId: ID, $cityId: ID) {
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
