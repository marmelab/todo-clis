import React from 'react';
import { Box, Color } from 'ink';

const AddTodo = ({ args }) => {
    if (args.length > 0) {
        return <Box>Adding the todo {args[0]}</Box>;
    }

    return (
        <Box>
            Please enter your todo title:{' '}
            <Color grey>todos-cli add &quot;My title&quot;</Color>
        </Box>
    );
};

export default AddTodo;
