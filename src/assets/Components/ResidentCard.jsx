import { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'


const ResidentCard = ({url}) => {
    
   const [resident,getResident]=useFetch()

    useEffect(() => {
        getResident(url)
    }, [])
    console.log(resident)
  return (
      <figure className='card'>
          <img src={resident?.image} alt="Resident image" />
          <figcaption>
              <h3>{resident?.name} </h3>
              <ul>
                <li><span className='resident-info'>Species :</span> <span className='resident-info-value'>{resident?.species}</span> </li>
                <li><span className='resident-info'>Gender :</span> <span className='resident-info-value'>{resident?.gender}</span> </li>
                <li><span className='resident-info'>Type :</span> <span className='resident-info-value'>{resident?.type}</span> </li>
                <li><span className='resident-info'>Status :</span> <span className={`resident-info-value ${resident?.status}`} >{resident?.status}</span> </li>
              </ul>
          </figcaption>
      </figure>
  )
}

export default ResidentCard
