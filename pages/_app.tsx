import {
    chain,
    configureChains,
    createClient,
    WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { getDefaultProvider } from 'ethers'
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import SubdomainCurrencySwitchProvider from '../providers/SubdomainCurrencySwitchProvider';

const { chains, provider } = configureChains(
    [chain.mainnet, chain.goerli],
    [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY }), publicProvider()],

);

const { connectors } = getDefaultWallets({
    appName: 'Faucets',
    chains
});

const client = createClient({
    autoConnect: true,
    connectors,
    provider,
})

function MyApp({ Component, pageProps }) {
    return (
        <WagmiConfig client={client}>
            <RainbowKitProvider chains={chains}>
                <SubdomainCurrencySwitchProvider>
                    <Component {...pageProps} />
                </SubdomainCurrencySwitchProvider>
            </RainbowKitProvider>
        </WagmiConfig>
    )
}

export default MyApp