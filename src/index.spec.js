import React from 'react';
import { render } from 'ink-testing-library';
import chalk from 'chalk';

import { Root } from './index';

describe('<Root>', () => {
    test('', () => {
        const { lastFrame } = render(<Root />);
        expect(lastFrame()).toEqual(`
${chalk.cyan('Welcome to your todo list CLI!')}`);
    });
});
