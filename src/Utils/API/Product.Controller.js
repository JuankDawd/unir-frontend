import { api } from '@utils/API';

class ProductControllerApi {
	microservice = '/ms-inventory-products';
	path = '/elastic/product';

	async getProducts() {
		try {
			const response = await api.get(`${this.microservice}${this.path}`);

			if (response !== undefined) {
				const products = response.data;
				return response.status, products;
			} else {
				return 400, [];
			}
		} catch (err) {
			return 500, [];
		}
	}

	async getOrderProducts(items) {
		try {
			const products = [];
			items.forEach(async ({ quantity, orderProductId }) => {
				const id = orderProductId.idProduct;
				const response = await api.get(`${this.microservice}${this.path}/${id}`);

				if (response !== undefined) {
					products.push({ product: response.data, amount: quantity });
				}
			});

			if (products.length > 0) {
				return 200, products;
			} else {
				return 400, [];
			}
		} catch (err) {
			return 500, [];
		}
	}

	async deleteProduct(id) {
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

const ProductController = new ProductControllerApi();

export { ProductController };
