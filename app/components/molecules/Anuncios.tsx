import { useGenerals } from '@/context/generals.context'
import React, { useState } from 'react'
import Modal from './Modal';
import Image from 'next/image';
import Thumb from '../atoms/Thumb';


interface props{
    closeModal: ()=>void
}


const Anuncios = ({closeModal}:props) => {
    const {general:{Anuncios:{imagen}}}=useGenerals();


    

  return (
    <Modal closeModal={closeModal}>
            
            <div className='z-[9999] fixed left-0 right-0 top-[50%] mx-auto w-[30%] translate-y-[-50%] h-[80%] bg-white'> 
            <button onClick={closeModal} className='absolute top-[-4rem] right-0 text-white text-[3rem]'>x</button>
                <Thumb image={imagen[0] }></Thumb>
            </div>
    </Modal>
  )
}

export default Anuncios
