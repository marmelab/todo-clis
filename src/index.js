import React from 'react';
import { render, Box, Color } from 'ink';

export const Root = () => (
    <Box marginTop={1}>
        <Color cyan>Welcome to your todo list CLI!</Color>
    </Box>
);

render(<Root />);
