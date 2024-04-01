import {useState, useEffect} from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTrash, faPenToSquare, faStar} from '@fortawesome/free-solid-svg-icons'


const CardList = ({setSelectedCard}) => { 
    const [data, setData] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/menu')
      .then(response => response.json())
      .then(data => setData(data))
    }, []) 
   
    
    const handleDelete = (id) => {
      fetch(`http://localhost:3000/menu/${id}`, {
        method: "DELETE"
      })
    }

 
   return ( 
    <>   
   {
      data.map(item => {
        return  <div className='card--wrapper' key={item.id}> 
        <img src={item.url} alt='bowl'/>
        <div className='content'>
        <div>
         <FontAwesomeIcon icon={faStar} />
         <span className='score'>{item.score}</span>
         </div>
         <span className='title'>{item.dish_name}</span>
         <p>{item.description}</p> 
      <div className='price--icon__wrapper'> 
         <span className='price'>${item.price}</span>
         <div className='icons'>
         <FontAwesomeIcon icon={faPenToSquare} onClick={() => setSelectedCard(item)}/>
         <div className='trash'>
         <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(item.id)} />
         </div>
         </div>
         </div>
         </div>
         </div>
      })
    }
    </>
  )
}

export default CardList



