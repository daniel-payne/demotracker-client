import useQuery from 'hooks/useQuery'

const useQueryShow = () => {
  const query = useQuery()

  const show = query.get('show') || ''

  return show.toUpperCase()
}

export default useQueryShow
