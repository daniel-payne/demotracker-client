import useParams from 'hooks/useParams'

const useParamsShow = () => {
  const params = useParams()

  const show = params.get('show') || ''

  return show.toUpperCase()
}

export default useParamsShow
