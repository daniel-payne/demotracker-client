import { gql } from 'apollo-boost'

const STATE_WITH_EVENTS = gql`
  query STATE_WITH_EVENTS($countryId: ID, $stateId: ID) {
    viewer {
      id
      role

      events: stateEvents(id: $stateId) {
        id
        date
        latitude
        longitude
        countryName
        stateName
        cityName
        countryId
        stateId
        cityId
        centerJson
        isSuccess
        numberKilled
        numberWounded
        attackType
        attackDetails
        targetType
        targetDetails
        targetNationality
        perpetratorName
        perpetratorMotive
        weaponType
        weaponDetails
        additionalNotes
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

export default STATE_WITH_EVENTS
