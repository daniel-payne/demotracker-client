import { gql } from 'apollo-boost'

const WORLD_WITH_MARKERS = gql`
  query WORLD_WITH_MARKERS {
    countries {
      id
      name
      iso3Code
      iso2Code
      outline: geoJson
      eventCount
    }

    markers(area: HUNDRED_SQUARE_KILOMETERS) {
      id
      latitude
      longitude
      eventCount
    }
  }
`

export default WORLD_WITH_MARKERS
