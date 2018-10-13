import React from 'react';


const Card = ({ name, email, city, photo, age, phone }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${email}?size=100x100`} />
      <div>
        <h4 >Name: {name}</h4>
        <p> {email}</p>
        <p> Tel: {phone}</p>
        <p>Country: {city}</p>
        <p>Age: {age}</p>
        <img style={{width: '220px', height:'auto'}}alt='women' src={`${photo}`} />
      </div>
    </div>
  );
}

export default Card;