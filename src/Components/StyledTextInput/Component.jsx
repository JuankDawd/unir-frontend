import { IonInput } from '@ionic/react';
import PropTypes from 'prop-types';

export function StyledTextInput({ value, setValue, label, placeholder }) {
	return (
		<IonInput
			fill="outline"
			type="text"
			value={value}
			onIonChange={(e) => setValue(e.target.value)}
			label={label}
			labelPlacement="floating"
			placeholder={placeholder}
			required
		/>
	);
}

StyledTextInput.propTypes = {
	value: PropTypes.string,
	setValue: PropTypes.func,
	label: PropTypes.string,
	placeholder: PropTypes.string,
};
