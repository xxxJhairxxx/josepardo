/** @format */

import React from 'react';

interface props {
	catchError: boolean;
	message: string;
}

const Alert = ({ catchError = false, message }: props) => {
	return (
		<div className="contentAlert">

			<div className={`contentAlert__alert_error ${catchError ? 'alert_transiton' : ''}`}>
				{message}
			</div>
		</div>
	);
};

export default Alert;
