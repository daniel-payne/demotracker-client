import { gql } from 'apollo-boost'

const STATE = gql`
  query STATE($countryId: ID, $stateId: ID) {
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

        state(id: $stateId) {
          id
          name
          hascCode

          outline
        }
      }
    }
  }
`

export default STATE
