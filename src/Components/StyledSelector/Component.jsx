import { IonSelect, IonSelectOption } from '@ionic/react';

import PropTypes from 'prop-types';

export function StyledSelector({ value, setValue, label, selectorOptions }) {
	return (
		<IonSelect
			fill="outline"
			label={label}
			labelPlacement="floating"
			interface="popover"
			value={value}
			onIonChange={(x) => setValue(x)}
		>
			{selectorOptions.map(({ title, value }, key) => {
				return (
					<IonSelectOption value={value} key={key}>
						{title}
					</IonSelectOption>
				);
			})}
		</IonSelect>
	);
}

StyledSelector.propTypes = {
	value: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	selectorOptions: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		}),
	).isRequired,
};
