
import React from 'react'
import { Container } from '../globals'
import AdmisionForm from '../molecules/AdmisionForm'
import { AdmisionFormp } from '@/interfaces/admision'
import { EspecialidadesData } from '@/interfaces'

interface props {
    admisionForm: AdmisionFormp
    especialidades:EspecialidadesData[]
}

const AdmisionFormMobile = ({admisionForm,especialidades}:props) => {
  return (
    <Container className=' py-[5rem] tablet:w-[60%] laptop:hidden'>
        
			<AdmisionForm
				className={"text-white relative z-50"}
				admisionForm={admisionForm}
				especialidades={especialidades}
			/>
    </Container>
  )
}

export default AdmisionFormMobile
