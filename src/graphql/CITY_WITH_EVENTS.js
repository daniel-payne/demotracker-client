import { gql } from 'apollo-boost'

const CITY_WITH_EVENTS = gql`
  query CITY_WITH_EVENTS($countryId: ID, $cityId: ID) {
    viewer {
      id
      role

      events: cityEvents(id: $cityId) {
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

        outline
      }

      country(id: $countryId) {
        id
        name

        outline

        city(id: $cityId) {
          id
          name

          outline
        }
      }
    }
  }
`

export default CITY_WITH_EVENTS
