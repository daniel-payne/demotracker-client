import { gql } from 'apollo-boost'

const WORLD = gql`
  query WORLD {
    reference{
      countries {
        id
        name
        iso3Code
        iso2Code
        outline: geoJson
      }
    }
  }
`

export default WORLD
