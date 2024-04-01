import { useState } from 'react'

import Modal from '../modal/Modal'
import CardList from '../card-list/CardList'
import Bowl from '../../assets/mainbowl.png'
import Fries from '../../assets/fries.png'


const Content = () => { 
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null) 
  
   const openModal = () => {
    setIsModalOpen(true)
   }
  
   const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCard(null)
   }
   
  return (
    <> 
  <section className='container'> 
    <div className='article'>
    <div>
    <h2>Delicious Food Is Waiting For You </h2>
    <p>Our team of registered nurses and skilled healthcare professionals procide in-home nursing</p>
    </div>
     <div className='button--container'>
        <button id='brown'>Food Menu</button>
        <button id='grey'>Book a table</button>
    </div>
    </div>
    <img src={Bowl} alt='food bowl' />
    </section> 
     <section className='middle--section'>
        <h1 className='heading'>Top List</h1>
        <h3>our mainstay menu</h3>
        <button id='add' onClick={openModal}>Add item</button>
        {isModalOpen && <Modal data={selectedCard} closeModal={closeModal} />}
        <div className='card--list__container' >
         <CardList openModal={openModal} setSelectedCard={setSelectedCard}/>
        </div>
        </section>
    <section className='container'>
        <img src={Fries}/> 
        <div>
    <h2>Best Potatoes for french fries</h2>
    <p>Russet potatoes are ideal. Since they're dense, they don't contain as much water inside, whicih allows them to get extra crispy</p>
    </div>
        </section>
    </>
  )
}

export default Content


    