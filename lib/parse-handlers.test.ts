import * as path from 'path';
import { parseHandlers } from './parse-handlers';

describe('Parse Handlers', () => {
	test('Handlers are parsed', () => {
		const parsedHandlers = parseHandlers(
			path.join(__dirname, '../test-handlers/'),
		);

		Object.entries(parsedHandlers.api).forEach(([path, definition]) => {
			expect(path.endsWith('test-api.handler.ts')).toBeTruthy();
			expect(definition.memorySize).toBe(512);
		});
	});
});

export {};
