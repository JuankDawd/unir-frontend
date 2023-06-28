import { api } from '@utils/API';

class LogisticControllerApi {
	path = '/logistic';
	microservice = '/ms-inventory-orders';

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

const LogisticController = new LogisticControllerApi();

export { LogisticController };
