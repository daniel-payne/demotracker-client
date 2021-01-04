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

export default WORLD_WITH_DATA
