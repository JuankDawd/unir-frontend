import { api } from '@utils/API';

class CustomerControllerApi {
	path = '/customer';
	microservice = '/ms-inventory-orders';

	async getCustomers() {
		try {
			const response = await api.get(`${this.microservice}${this.path}`);

			if (response !== undefined) {
				// eslint-disable-next-line no-console
				const customers = response.data;
				return response.status, customers;
			} else {
				return 400, [];
			}
		} catch (err) {
			return 500, [];
		}
	}

	async getCustomer(id) {
		try {
			const response = await api.get(`${this.microservice}${this.path}/${id}`);

			if (response !== undefined) {
				// eslint-disable-next-line no-console
				const customer = response.data;
				return response.status, customer;
			} else {
				return 400, {};
			}
		} catch (err) {
			return 500, {};
		}
	}

	async deleteCustomer(id) {
		try {
			const response = await api.delete(`${this.microservice}${this.path}/${id}`);

			if (response !== undefined) {
				// eslint-disable-next-line no-console
				const customer = response.data;
				return response.status, customer;
			} else {
				return 400, {};
			}
		} catch (err) {
			return 500, {};
		}
	}
}

const CustomerController = new CustomerControllerApi();

export { CustomerController };
