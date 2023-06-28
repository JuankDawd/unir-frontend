import { IonInput } from '@ionic/react';
import PropTypes from 'prop-types';

export function StyledNumberInput({ type, value, setValue, label, placeholder }) {
	return (
		<IonInput
			type="number"
			value={value}
			onIonChange={(e) => setValue(type === 'int' ? parseInt(e.target.value) : parseFloat(e.target.value))}
			label={label}
			labelPlacement="floating"
			placeholder={placeholder}
			required
		/>
	);
}

StyledNumberInput.propTypes = {
	type: PropTypes.string,
	value: PropTypes.number,
	setValue: PropTypes.func,
	label: PropTypes.string,
	placeholder: PropTypes.string,
};
