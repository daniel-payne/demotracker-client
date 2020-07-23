import { gql } from 'apollo-boost'

const STATE = gql`
  query STATE($countryId: ID, $stateId: ID) {
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

      state(id: $stateId) {
        id
        name
        hascCode

        outline: geoJson
      }
    }
  }
`

export default STATE
