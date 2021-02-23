import React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import StateOverview from 'components/state/StateOverview'
import CityOverview from 'components/city/CityOverview'

import extractMinMax from 'utils/extractMinMax'
import buildColorScale from 'utils/buildColorScale'

const CountryData = (props) => {
  const { country, states, cities } = props

  const [minStates, maxStates] = extractMinMax(states, 'eventCount')
  const [minCities, maxCities] = extractMinMax(cities, 'eventCount')

  const colorScaleStates = buildColorScale(minStates, maxStates)
  const colorScaleCities = buildColorScale(minCities, maxCities)

  return (
    <div className="CountryData">
      <Box pl={1} pt={3}>
        <Typography variant="h4" color="primary">
          States
        </Typography>
      </Box>
      {states.map((state) => (
        <StateOverview
          key={state.id}
          country={country}
          state={state}
          colorScale={colorScaleStates}
        />
      ))}
      <Box pl={1} pt={3}>
        <Typography variant="h4" color="primary">
          Cities
        </Typography>
      </Box>
      {cities.map((city) => (
        <CityOverview key={city.id} country={country} city={city} colorScale={colorScaleCities} />
      ))}
    </div>
  )
}

export default CountryData
