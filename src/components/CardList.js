import React from 'react';
import Card from './Card';


const CardList = ({users}) => {

    const cardComponent = users.map((user,i)=>{
            return (
            <Card 
               key={i}
              
              name={user.name}
              email={user.email}
              city={user.region}
              age={user.age}
              photo = {user.photo}  
              phone = {user.phone}  
            />
            )
        })
    return ( 
        <div style={{display:'flex',flexWrap:'wrap',justifyContent: 'center',alignContent: 'center'}}>
           
            {cardComponent}
        </div>
     );
}
 
export default CardList;