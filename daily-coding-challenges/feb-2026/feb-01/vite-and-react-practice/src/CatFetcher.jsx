import axios from 'axios'
import { useEffect } from 'react'

function CatFetcher() {
  const catApiKey = `live_HYVSzYzBiw4S0N8SR16GMirqG9tzlaH1bIXlvzWGNBy2ekLcgMnYtbmwE1lA1UOn`
  const randomImageUrl = `https://cdn2.thecatapi.com/images/MTg3NzAxMA.jpg`

  useEffect(() => {
    const getRandomCatImage = async () => {
      try {
        const res = await axios.get(randomImageUrl)
        console.log(res.data.results)
      } catch(error) {
        console.log()
      }
    }
  }, [])

  return (
    <>
      <img src={randomImageUrl}/>
    </>
  )
}

export default CatFetcher