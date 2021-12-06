import * as path from 'path';
import { parseHandlers } from './parse-handlers';

describe('Parse Handlers', () => {
	test('Handlers are parsed', () => {
		const parsedHandlers = parseHandlers(
			path.join(__dirname, '../test-handlers/'),
		);
	});
});

export {};
