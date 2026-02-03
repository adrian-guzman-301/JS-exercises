import axios from 'axios'

function GetCatData() {
  const catApiKey = `live_HYVSzYzBiw4S0N8SR16GMirqG9tzlaH1bIXlvzWGNBy2ekLcgMnYtbmwE1lA1UOn`
  const randomImageUrl = `https://hatrabbits.com/en/random-image/`

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

export default GetCatData