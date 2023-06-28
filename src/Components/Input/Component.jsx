/* eslint-disable react/prop-types */

import './Component.scss';

import { Fragment } from 'react';
import { IonLabel } from '@ionic/react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

export function InputField({ label = '', placeholder = '', ...props }) {
	const { field, fieldState } = useController(props);
	const className = fieldState.error?.message ? '-error' : '';
	return (
		<Fragment>
			<IonLabel htmlFor={props.name} className="label-title">
				{label}
			</IonLabel>

			<input {...field} placeholder={placeholder} id={props.name} className={'input' + className} />
			<IonLabel className="error-msg">{fieldState.error?.message ?? ' '}</IonLabel>
		</Fragment>
	);
}
// Fix Here+
InputField.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	props: PropTypes.any,
};
