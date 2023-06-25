import './Component.scss';

import { IonButton, IonIcon } from '@ionic/react';

import PropTypes from 'prop-types';
import { trashBinOutline } from 'ionicons/icons';

export function CustomerTable({ items }) {
	const handleUserDelete = (id) => {
		alert(`We can't delete the customer with the ID: ${id} at the moment`);
	};
	return (
		<table className="table">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Correo Electronico</th>
					<th>Pedidos</th>
					<th>Valor</th>
					<th>Acciones</th>
				</tr>
			</thead>
			<tbody>
				{items.map((customer) => (
					<tr key={customer.id}>
						<td>{customer.name}</td>
						<td>{customer.email}</td>
						<td>{customer.totalOrders}</td>
						<td>{customer.totalAmountSpent}</td>
						<td>
							<IonButton className="edit-button" color="danger" onClick={() => handleUserDelete(customer.id)}>
								<IonIcon icon={trashBinOutline} />
							</IonButton>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

CustomerTable.propTypes = {
	items: PropTypes.any,
};
