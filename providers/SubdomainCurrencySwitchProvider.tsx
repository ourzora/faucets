import React, { useEffect, useMemo, useState } from "react";
import { ETH_ADDRESS, ETH_FAUCET_ADDRESS, USDC_ADDRESS, USDC_FAUCET_ADDRESS } from "../constants/addresses";

export interface ISubdomainCurrencySwitchContext {
    address: `0x${string}`;
    symbol: string;
    name: string;
    decimals: number;
    faucetAddress: `0x${string}`
}

enum SupportedCurrency {
    ETH = 'ETH',
    USDC = 'USDC'
}

const initialContext: ISubdomainCurrencySwitchContext = { address: ETH_ADDRESS, symbol: 'ETH', name: 'Ethereum', decimals: 18, faucetAddress: ETH_FAUCET_ADDRESS }

export const SubdomainCurrencySwitchContext = React.createContext<ISubdomainCurrencySwitchContext>(initialContext)

const SubdomainCurrencySwitchContextProvider = ({ children }) => {
    const [currencyKey, setCurrencyKey] = useState<SupportedCurrency>(SupportedCurrency.ETH)

    const currentCurrency: ISubdomainCurrencySwitchContext = useMemo(() => {
        switch (currencyKey) {
            case SupportedCurrency.USDC:
                return {
                    address: USDC_ADDRESS,
                    symbol: 'USDC',
                    name: 'USD Coin',
                    decimals: 6,
                    faucetAddress: USDC_FAUCET_ADDRESS
                }
            case SupportedCurrency.ETH:
            default:
                return {
                    ...initialContext
                }
        }
    }, [currencyKey])


    useEffect(() => {
        if (window) {
            const subdomain = /:\/\/([^\/]+)/.exec(window.location.href)[1].split('.')[0].toUpperCase();
            setCurrencyKey(subdomain as SupportedCurrency)
        }
    }, []);

    return (
        <SubdomainCurrencySwitchContext.Provider value={currentCurrency}>
            {children}
        </SubdomainCurrencySwitchContext.Provider>
    )
}

export default SubdomainCurrencySwitchContextProvider;