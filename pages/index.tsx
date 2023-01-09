import React, { useState, useEffect, useContext } from 'react';
import { Page } from '../components/Page'
import { Text } from '../components/Text'
import { useAccount } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { SubdomainCurrencySwitchContext } from '../providers/SubdomainCurrencySwitchProvider';


function HomePage() {
    const { isConnected } = useAccount();
    const { openConnectModal } = useConnectModal();
    const [buttons, setButtons] = useState<any>()
    const currencyContext = useContext(SubdomainCurrencySwitchContext)


    // Use an effect to avoid react hydration errors
    useEffect(() => {
        if (isConnected) {
            setButtons([{ label: 'Claim', href: `/claim/${currencyContext.faucetAddress}` }, { label: 'Mint', href: '/mint' }])
        } else {
            setButtons([{ label: 'Learn', href: 'https://github.com/ourzora/faucets' }, { label: 'Connect', href: '', onClick: openConnectModal }])
        }
    }, [isConnected])

    return (
        <Page buttons={buttons}>
            <Text>
                Faucets
            </Text>
            <Text>
                Faucets are vesting NFTs that allow funds to be remitted on a fixed schedule.
            </Text>
            <Text>
                Faucets can be used for streaming payments, equity vesting, call options, and more.
            </Text>
            <Text>
                Since they are represented as NFTs, they can also be bought, sold, and traded on open markets.
            </Text>
        </Page>
    )
}

export default HomePage