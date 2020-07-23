import useQuery from 'hooks/useQuery'

const useQueryOverlay = () => {
  const query = useQuery()

  const overlay = query.get('overlay') || ''

  return overlay.toUpperCase()
}

export default useQueryOverlay
