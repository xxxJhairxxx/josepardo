/** @format */

import {
	createContext,
	FC,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from 'react';

import { GeneralData } from '../interfaces/general';

export interface ControllerState {
	general: GeneralData;
}

const useGeneralsController = ({
	general,
}: ControllerState): ControllerState => {
	const [generals, setGenerals] = useState({
		general,
	});

	useEffect(() => {
		setGenerals({
			general,
		});
	}, []);

	return {
		general: generals.general,
	};
};

const initialState: ControllerState = {
	general: {
		id: 1,
		createdAt: '',
		updatedAt: '',
		publishedAt: '',
		label_buttons: { id: 1, lbl_enviar: '', lbl_leer_mas: '' },
		informacion: {
			telefono: '',
			direccion: '',
			correo: '',
			horario: '',
			redes_sociales: [],
			logo: [],
		},
		Footer:{
			text:'',
			copyright:'',
			lbl_siguenos:''
		}
	},
};

const GeneralsContext =
	createContext<ReturnType<typeof useGeneralsController>>(initialState);

interface GeneralsProviderProps extends PropsWithChildren {
	generals: ControllerState;
}

export const GeneralsProvider: FC<GeneralsProviderProps> = ({
	children,
	generals,
}) => {
	return (
		<GeneralsContext.Provider value={useGeneralsController(generals)}>
			{children}
		</GeneralsContext.Provider>
	);
};

export const useGenerals = () => useContext(GeneralsContext);
