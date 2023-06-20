import './Component.scss';

import { Fragment } from 'react';
import PropTypes from 'prop-types';

export function Card({ children }) {
	return (
		<Fragment>
			<div className="card">{children}</div>
		</Fragment>
	);
}

Card.propTypes = {
	children: PropTypes.any,
};
