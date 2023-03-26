import { Alert, AlertIcon } from '@chakra-ui/react';
import React from 'react'

const ErrorModel = ({message}) => {
  return (
    <Alert
        status="error"
        position={'fixed'}
        bottom={'3rem'}
        left={'50%'}
        transform={'translateX(-50%)'}
        w={'container.lg'}
    >
        <AlertIcon />
        {message}
    </Alert>
  )
}

export default ErrorModel;