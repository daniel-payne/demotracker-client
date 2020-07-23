import React from 'react'

import useLocation from 'hooks/useLocation'

import Projection3D from 'components/projections/Projection3D'

const CityGlobe = (props) => {
  const { selectedCountry } = props

  const setLocation = useLocation()[1]

  const handleSelection = (target) => {
    let nextPath

    if (target.type === 'COUNTRY') {
      nextPath = `/country/${target.id}?show=globe`
    } else if (target.type === 'STATE') {
      nextPath = `/country/${selectedCountry.id}/state/${target.id}?show=globe`
    } else if (target.type === 'CITY') {
      nextPath = `/country/${selectedCountry.id}/city/${target.id}?show=globe`
    }

    setLocation({ nextPath })
  }

  return (
    <React.Fragment>
      <Projection3D {...props} onSelection={handleSelection} />
    </React.Fragment>
  )
}

export default CityGlobe
