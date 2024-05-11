import axios from 'axios'
import  { useState } from 'react'

const useFetch = () => {
  const [isloarding, setIsLoarding] = useState(true)
  const [asError, setasError] = useState(false)
    const [apiData, setapiData] = useState()

    const getApi= url =>{
        axios.get(url)
        .then(res=>{
            setapiData(res.data)
            setasError(false)
        })
        .catch(error=>{
            console.log(error)
            setasError(true)
        })
        .finally(setIsLoarding(false))
    }

    return[apiData,getApi,isloarding,asError];
}

export default useFetch
