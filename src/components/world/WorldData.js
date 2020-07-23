import React from 'react'

import CountryOverview from 'components/country/CountryOverview'

import extractMinMax from 'calculate/extractMinMax'
import buildColorScale from 'calculate/buildColorScale'

const WorldData = (props) => {
  const { countries } = props

  const [min, max] = extractMinMax(countries, 'eventCount')

  const colorScale = buildColorScale(min, max)

  return (
    <div className="WorldData">
      {countries.map((country) => (
        <CountryOverview key={country.id} country={country} colorScale={colorScale} />
      ))}
    </div>
  )
}

export default WorldData
