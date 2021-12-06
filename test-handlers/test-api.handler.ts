import { ApiHandler } from '../lib/api-handler';
import { SuccessResponse } from '../lib/responses/success-response';

interface User {
	userId: string;
	email: string;
}

export default ApiHandler(
	{
		method: 'GET',
		route: '/users/{userId}',
		description: 'Test API handler',
		memorySize: 512,
		validators: {
			body: (requestBody): User => {
				return {
					email: requestBody?.email ?? '',
					userId: requestBody?.userId ?? '',
				};
			},
		},
	},
	async (event) => {
		console.log(event);

		return SuccessResponse({ success: 'true' });
	},
);
