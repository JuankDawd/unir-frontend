/* eslint-disable react/prop-types */
import './Component.scss';

import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

export function InputField({ label = '', placeholder = '', ...props }) {
	const { field, fieldState } = useController(props);
	const className = fieldState.error?.message ? '-error' : '';
	return (
		<Fragment>
			<label htmlFor={props.name} className="label-title">
				{label}
			</label>
			<input {...field} placeholder={placeholder} id={props.name} className={'input' + className} />
			<span className="error-msg">{fieldState.error?.message ?? ' '}</span>
		</Fragment>
	);
}
// Fix Here+
InputField.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	props: PropTypes.any,
};
