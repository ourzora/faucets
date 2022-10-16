import React from 'react';
import { Page } from '../components/Page'
import { Text } from '../components/Text'

function ConnectPage() {
    const buttons = [{
        label: 'Back', href: '/'
    }]
    return (
        <Page buttons={buttons}>
            <Text>Please check your wallet...</Text>
        </Page>
    )
}

export default ConnectPage