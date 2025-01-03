
import React, {  PropsWithChildren, } from 'react'

interface props extends PropsWithChildren {
    closeModal: () => void;
}
const Modal = ({closeModal,children}:props) => {
    return (
        <>
            <div className='fixed top-0 right-0 w-full h-[100vh] z-[9998] bg-black/60' onClick={closeModal}/>

            {children}
        </>
    )
}

export default Modal
