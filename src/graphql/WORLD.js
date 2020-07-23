import { gql } from 'apollo-boost'

const WORLD = gql`
  query WORLD {
    countries {
      id
      name
      iso3Code
      iso2Code
      outline: geoJson
    }
  }
`

export default WORLD
