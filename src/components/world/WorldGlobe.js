import React from 'react'

import useLocation from 'hooks/useLocation'

import Projection3D from 'components/projections/Projection3D'

import 'css/WorldGlobe.css'

const WorldGlobe = (props) => {
  const setLocation = useLocation()[1]

  const handleSelection = (country) => {
    setLocation({ nextPath: `/country/${country.id}` })
  }

  return (
    <div className="worldGlobe">
      <Projection3D {...props} onSelection={handleSelection} />
    </div>
  )
}

export default WorldGlobe
