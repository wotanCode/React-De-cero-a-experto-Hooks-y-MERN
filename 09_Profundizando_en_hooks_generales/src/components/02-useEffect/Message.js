import { useEffect } from "react"

export const Message = () => {

  useEffect(() => {

    console.log('useEffect incial')
    return () => {
      console.log('useEffect final')
    }
  }, [])

  return (
    <div>
      <h3>eres genial!</h3>
    </div>
  )
}
