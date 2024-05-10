import React from 'react'

const LocationCard = ({location}) => {
  return (
    <div className='location'>
      <h2>{location?.name}</h2>
      <ul>
      <li><span>Type</span> <span>{location?.type}</span></li>
      <li><span>Residents</span> <span>{location?.residents.length}</span></li>
      <li><span>Dimention</span> <span>{location?.name}</span></li>
      </ul>
    </div>
  )
}

export default LocationCard
