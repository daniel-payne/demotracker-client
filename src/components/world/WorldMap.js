import React from 'react'

import useLocation from 'hooks/useLocation'

import ProjectionFlat from 'components/projections/ProjectionFlat'

const WorldMap = (props) => {
  const setLocation = useLocation()[1]

  const handleSelection = (country) => {
    setLocation({ nextPath: `/country/${country.id}` })
  }

  return (
    <div className="WorldMap">
      <ProjectionFlat {...props} onSelection={handleSelection} />
    </div>
  )
}

export default WorldMap
