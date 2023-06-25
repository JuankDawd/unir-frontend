import { subDays, subHours } from 'date-fns';

const now = new Date();

class ProductControllerApi {
	path = '/';

	getCustomersActually() {
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

	getProducts() {
		const products = [
			{
				id: '5ece2c077e39da27658aa8a9',
				attributes: ['Cuidado de la salud'],
				category: 'cuidado-salud',
				createdAt: subDays(now, 1).getTime(),
				currency: '$',
				image: '/mock-images/products/product_1.png',
				inStock: true,
				isAvailable: true,
				isShippable: false,
				name: 'Cuidado de la salud Erbology',
				price: 23.99,
				quantity: 85,
				sku: '401_1BBXBK',
				status: 'publicado',
				updatedAt: subHours(now, 6).getTime(),
				variants: 2,
			},
			{
				id: '5ece2c0d16f70bff2cf86cd8',
				attributes: ['Maquillaje'],
				category: 'maquillaje',
				createdAt: subDays(now, 3).getTime(),
				currency: '$',
				image: '/mock-images/products/product_2.png',
				inStock: false,
				isAvailable: false,
				isShippable: true,
				name: 'Maquillaje Lancome Rouge',
				price: 95.0,
				quantity: 0,
				sku: '978_UBFGJC',
				status: 'publicado',
				updatedAt: subDays(subHours(now, 8), 2).getTime(),
				variants: 1,
			},
			{
				id: '5ece2c123fad30cbbff8d060',
				attributes: ['Variedad de estilos'],
				category: 'joyeria',
				createdAt: subDays(now, 6).getTime(),
				currency: '$',
				image: null,
				inStock: true,
				isAvailable: true,
				isShippable: false,
				name: 'Colección de pulseras superpuestas',
				price: 155.0,
				quantity: 48,
				sku: '211_QFEXJO',
				status: 'borrador',
				updatedAt: subDays(subHours(now, 2), 1).getTime(),
				variants: 5,
			},
			{
				id: '5ece2c1be7996d1549d94e34',
				attributes: ['Cuidado de la piel'],
				category: 'cuidado-piel',
				createdAt: subDays(now, 12).getTime(),
				currency: '$',
				image: '/mock-images/products/product_4.png',
				inStock: true,
				isAvailable: false,
				isShippable: true,
				name: 'Cuidado de la piel Necessaire',
				price: 17.99,
				quantity: 5,
				sku: '321_UWEAJT',
				status: 'publicado',
				updatedAt: subDays(subHours(now, 7), 1).getTime(),
				variants: 1,
			},
			{
				id: 'b393ce1b09c1254c3a92c827',
				attributes: ['Cuidado de la piel'],
				category: 'cuidado-piel',
				createdAt: subDays(now, 4).getTime(),
				currency: '$',
				image: '/mock-images/products/product_5.png',
				inStock: true,
				isAvailable: false,
				isShippable: true,
				name: 'Cuidado de la piel Soja CO',
				price: 65.99,
				quantity: 10,
				sku: '592_LDKDI',
				status: 'borrador',
				updatedAt: subDays(subHours(now, 1), 1).getTime(),
				variants: 1,
			},
			{
				id: 'a6ede15670da63f49f752c89',
				attributes: ['Maquillaje'],
				category: 'maquillaje',
				createdAt: subDays(now, 6).getTime(),
				currency: '$',
				image: '/mock-images/products/product_6.png',
				inStock: true,
				isAvailable: false,
				isShippable: true,
				name: 'Maquillaje Barra de labios',
				price: 76.99,
				quantity: 22,
				sku: '324_DKSEKD',
				status: 'borrador',
				updatedAt: subDays(subHours(now, 3), 3).getTime(),
				variants: 1,
			},
			{
				id: 'bcad5524fe3a2f8f8620ceda',
				attributes: ['Cuidado de la salud'],
				category: 'cuidado-salud',
				createdAt: subDays(now, 7).getTime(),
				currency: '$',
				image: '/mock-images/products/product_7.png',
				inStock: true,
				isAvailable: false,
				isShippable: true,
				name: 'Cuidado de la salud Ritual',
				price: 115.2,
				quantity: 15,
				sku: '598_DOKEII',
				status: 'publicado',
				updatedAt: subDays(subHours(now, 5), 6).getTime(),
				variants: 1,
			},
		];

		return Promise.resolve(products);
	}
}

const ProductController = new ProductControllerApi();

export { ProductController };
