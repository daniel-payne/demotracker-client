import { gql } from 'apollo-boost'

const STATE_WITH_EVENTS = gql`
  query STATE_WITH_EVENTS($countryId: ID, $stateId: ID) {
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

        events {
          id
          date
          latitude
          longitude
          summary
          perpetrator
          numberKilled
          numberWounded
          attackType
          attackSubType
          targetType
          targetSubType
          primaryWeaponType
          primaryWeaponSubType
          secondaryWeaponType
          secondaryWeaponSubType
          tertiaryWeaponType
          tertiaryWeaponSubType
        }
      }
    }
  }
`

export default STATE_WITH_EVENTS
