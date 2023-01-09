import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useProvider, useAccount, useSigner } from 'wagmi';
import { useRouter } from 'next/router'

import { IFaucet__factory, FaucetFactory__factory, IERC20__factory } from '../../../typechain';
import { Page } from '../../../components/Page'
import { Text } from '../../../components/Text';
import { Stat } from '../../../components/Stat';
import { ContractTransaction, providers } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';
import { SubdomainCurrencySwitchContext } from '../../../providers/SubdomainCurrencySwitchProvider';
import { USDC_ADDRESS } from '../../../constants/addresses';

function ClaimPage({ claimable, totalAmount }) {
    const { data: signer } = useSigner();
    const { address, isConnected } = useAccount();
    const router = useRouter()
    const [isClaiming, setIsClaiming] = useState<boolean>(false)
    const [claimTx, setClaimTx] = useState<ContractTransaction>()
    const currency = useContext(SubdomainCurrencySwitchContext)

    useEffect(() => {
        if (!isConnected) {
            router.push('/')
        }
    }, [isConnected])

    const handleClaim = useCallback(async () => {
        const Faucet = IFaucet__factory.connect(router.query.faucetAddress as string, signer)
        setClaimTx(await Faucet.claim(address, router.query.tokenId as string));
    }, [signer])

    if (!!claimTx) {
        return (
            <Page buttons={[{ label: 'Home', href: '/' }, { label: 'View', href: `https://${process.env.NEXT_PUBLIC_CHAIN_ID === '1' ? '' : 'goerli.'}etherscan.io/tx/${claimTx.hash}` }]}>
                <Text>Your funds have been claimed.</Text>
                <Text>Have a nice day.</Text>
            </Page>
        )
    }

    return (
        <Page buttons={[{
            label: 'Back', href: `/claim/${router.query.faucetAddress}`
        }, {
            label: 'Claim', href: '', onClick: isClaiming ? null : handleClaim
        }]}>
            {isClaiming ? (
                <>
                    <Text>Claiming your funds...</Text>
                    <Text>Please check your wallet</Text>
                </>
            ) : (
                <>
                    <Text>You currently have</Text>
                    <Stat>{claimable} {currency.symbol}</Stat>
                    <Text>Claimable in this faucet</Text>
                    <Text>&nbsp;</Text>
                    <Text>There is still</Text>
                    <Stat>{totalAmount} {currency.symbol}</Stat>
                    <Text>Remaining to be vested</Text>
                </>
            )}
        </Page>
    )
}

export async function getServerSideProps({ req, res, query }) {
    // Fetch data from external API
    const provider = new providers.JsonRpcProvider(process.env.RPC_URL)
    const Faucet = IFaucet__factory.connect(query.faucetAddress as string, provider)

    // Cache for 1 minute
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )

    const claimable = await Faucet.claimableAmountForFaucet(query.tokenId, parseInt((Date.now().valueOf() / 1000).toString()))
    const faucetDetails = await Faucet.getFaucetDetailsForToken(query.tokenId)
    const totalAmount = faucetDetails.totalAmount.sub(faucetDetails.claimedAmount)
    const token = await Faucet.faucetTokenAddress()

    // TODO: we should fetch the number of decimals directly from the underlying token contract
    const decimals = token.toLowerCase() === USDC_ADDRESS.toLowerCase() ? 6 : 18;

    // Pass data to the page via props
    return { props: { claimable: formatUnits(claimable, decimals), totalAmount: formatUnits(totalAmount, decimals) } }
}


export default ClaimPage