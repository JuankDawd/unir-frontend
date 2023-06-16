import './Component.scss';

// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react';

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
