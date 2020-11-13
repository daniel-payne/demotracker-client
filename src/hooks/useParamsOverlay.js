import useParams from 'hooks/useParams'

const useParamsOverlay = () => {
  const params = useParams()

  const overlay = params.get('overlay') || ''

  return overlay.toUpperCase()
}

export default useParamsOverlay
