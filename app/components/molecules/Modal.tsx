
import React, {  PropsWithChildren, } from 'react'

interface props extends PropsWithChildren {
    closeModal: () => void;
}
const Modal = ({closeModal,children}:props) => {
    return (
        <>
            <div className='fixed top-0 right-0 w-full h-[100vh] z-[9998] bg-black/50' onClick={closeModal}/>

            <div className='containModalWpp z-[9999] fixed w-[95%] tablet:w-[40rem] bottom-[1rem] right-[1rem] h-[40rem] bg-white rounded-3xl overflow-hidden flex flex-col'>
                {children}
            </div>
        </>
    )
}

export default Modal
