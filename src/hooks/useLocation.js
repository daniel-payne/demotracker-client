import { useHistory } from 'react-router-dom'

import useQueryShow from 'hooks/useQueryShow'
import useQueryOverlay from 'hooks/useQueryOverlay'

const useLocation = () => {
  const history = useHistory()

  const show = useQueryShow()
  const overlay = useQueryOverlay()

  const location = history.location.pathname + history.location.search

  const setLocation = ({ nextPath, nextShow, nextOverlay }) => {
    const newPath = nextPath || history.location.pathname

    const newShow = `show=${nextShow || show}`
    const newOverlay = `overlay=${nextOverlay || overlay}`

    let newQuery = ''

    if (newShow && newOverlay) {
      newQuery = `?${newShow}&${newOverlay}`
    } else if (newShow || newOverlay) {
      newQuery = `?${newShow}${newOverlay}`
    }

    newQuery = newQuery.toLowerCase()

    history.push(`${newPath}${newQuery}`)
  }

  return [location, setLocation]
}

export default useLocation
