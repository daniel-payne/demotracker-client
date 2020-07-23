import React from 'react'

import useLocation from 'hooks/useLocation'

import ProjectionFlat from 'components/projections/ProjectionFlat'

const StateMap = (props) => {
  const { selectedCountry } = props

  const setLocation = useLocation()[1]

  const handleSelection = (target) => {
    let nextPath

    if (target.type === 'COUNTRY') {
      nextPath = `/country/${target.id}`
    } else if (target.type === 'STATE') {
      nextPath = `/country/${selectedCountry.id}/state/${target.id}`
    } else if (target.type === 'CITY') {
      nextPath = `/country/${selectedCountry.id}/city/${target.id}`
    }

    setLocation({ nextPath })
  }

  return (
    <React.Fragment>
      <ProjectionFlat {...props} onSelection={handleSelection} smallMarkers={true} />
    </React.Fragment>
  )
}

export default StateMap
