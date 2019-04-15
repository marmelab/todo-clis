import React from 'react';
import { render, Box, Color } from 'ink';
import meow from 'meow';

import AddTodo from './add-todo';

const cli = meow();
const command = cli.input.length > 0 ? cli.input[0] : undefined;

export const Root = () => (
    <Box marginTop={1} flexDirection="column">
        <Color cyan>Welcome to your todo list CLI!</Color>
        {command === 'add' ? <AddTodo args={cli.input.slice(2)} /> : null}
    </Box>
);

render(<Root />);
