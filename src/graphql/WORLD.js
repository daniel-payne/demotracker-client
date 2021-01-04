import { gql } from 'apollo-boost'

const WORLD = gql`
  query WORLD {
    information {
      countries {
        id
        name
        iso3Code
        iso2Code
        outline
      }
    }
  }
`

export default WORLD
