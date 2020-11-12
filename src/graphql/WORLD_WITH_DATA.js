import { gql } from 'apollo-boost'

const WORLD_WITH_DATA = gql`
  query WORLD_WITH_DATA {
    viewer {
      id
      role

      globalMarkers {
        id
        latitude
        longitude
        eventCount
      }

      globalCounts {
        id
        eventCount
      }
    }

    reference {
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

export default WORLD_WITH_DATA
