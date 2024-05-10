import axios from 'axios'
import  { useState } from 'react'

const useFetch = () => {
  
    const [apiData, setapiData] = useState()

    const getApi= url =>{
        axios.get(url)
        .then(res=>setapiData(res.data))
        .catch(error=>console.log(error))
    }

    return[apiData,getApi];
}

export default useFetch
