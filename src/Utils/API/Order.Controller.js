import { api } from '@utils/API';

class OrderControllerApi {
	path = '/order';
	microservice = '/ms-inventory-orders';

	getOrdersActually() {
		try {
			const resp = 0;

			if (resp === undefined) {
				return 'Username created successfully', resp; // , 'Success'
			} else {
				return 'There is no Users registered', []; // , 'Fail'
			}
		} catch (err) {
			return 'Fatal Warning', []; // , 'Fail'
		}
	}

	async getOrders() {
		try {
			const response = await api.get(`${this.microservice}${this.path}`);

			if (response !== undefined) {
				const orders = response.data;
				return response.status, orders;
			} else {
				return 400, [];
			}
		} catch (err) {
			return 500, [];
		}
	}

	async getOrder(id) {
		try {
			const response = await api.get(`${this.microservice}${this.path}/${id}`);

			if (response !== undefined) {
				const order = response.data;
				return response.status, order;
			} else {
				return 400, {};
			}
		} catch (err) {
			return 500, {};
		}
	}

	async getLogisticInformation() {
		try {
			const response = await api.get(`${this.microservice}${this.path}`);

			if (response !== undefined) {
				const orders = response.data;
				return response.status, orders;
			} else {
				return 400, [];
			}
		} catch (err) {
			return 500, [];
		}
	}
}

const OrderController = new OrderControllerApi();

export { OrderController };
