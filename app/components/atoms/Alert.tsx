/** @format */

import React from 'react';

interface props {
	catchError: boolean;
	message: string;
}

const Alert = ({ catchError = false, message }: props) => {
	return (
		<div className={`alert_confirm ${catchError ? 'alert_transiton' : ''}`}>
			{message}
		</div>
	);
};

export default Alert;
