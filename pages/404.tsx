import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NotFound = (): JSX.Element => {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])

  return <div></div>
}

export default NotFound
