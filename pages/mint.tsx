import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object as yupObj, string, number, date, InferType } from 'yup';
import { useProvider, useAccount, useSigner } from 'wagmi';
import { useRouter } from 'next/router'

import { IFaucet__factory, ERC20__factory } from '../typechain';
import { Page } from '../components/Page'
import { Label } from '../components/Label'
import { Error } from '../components/Error'
import { Input } from '../components/Input'
import { Select } from '../components/Select';
import { Text } from '../components/Text';
import { CLIFF_STRATEGY_ADDRESS, DAILY_STEP_STRATEGY_ADDRESS, FAUCET_FACTORY_ADDRESS, LINEAR_STRATEGY_ADDRESS } from '../constants/addresses';
import { parseUnits } from 'ethers/lib/utils';
import { ContractTransaction } from 'ethers';
import { SubdomainCurrencySwitchContext } from '../providers/SubdomainCurrencySwitchProvider';

enum VestingStrategy {
    LINEAR = "LINEAR",
    CLIFF = "CLIFF",
    DAILY = "DAILY"
}

// TODO: Handle ERC20 Faucets
function MintPage() {
    const provider = useProvider();
    const { data: signer } = useSigner();
    const { address, isConnected } = useAccount();
    const router = useRouter()
    const [mintTx, setMintTx] = useState<ContractTransaction>()
    const currency = useContext(SubdomainCurrencySwitchContext);


    useEffect(() => {
        if (!isConnected) {
            router.push('/')
        }
    }, [isConnected])

    const addressTransform = useCallback(async (val: string) => {
        const ensRegex = /(.+(.eth){1}$){1}/
        if (ensRegex.test(val)) {
            try {
                const addr = await provider.resolveName(val)
                return addr
            } catch (e) {
                console.error(e)
                return val
            }
        }
        return val;
    }, [provider]);

    const yupEnsAddress = string().matches(/^(0x[a-fA-F0-9]{40}$)|(.+(.eth){1}$){1}/, 'must be a valid address or ENS name');

    const formValidationSchema = yupObj({
        // currency: yupEnsAddress.required(),
        expiry: date().required().min(new Date(), 'must be in the future'),
        strategy: string().oneOf([VestingStrategy.LINEAR, VestingStrategy.CLIFF, VestingStrategy.DAILY]).required(),
        recipient: yupEnsAddress.required(),
        amount: number().required().moreThan(0)
    });

    type FormSchema = InferType<typeof formValidationSchema>

    const handleSubmit = useCallback(async (form: FormSchema) => {
        const faucetAddress = currency.faucetAddress
        const Faucet = IFaucet__factory.connect(faucetAddress, signer)

        let recipient = await addressTransform(form.recipient);
        let expiry = parseInt(((new Date(form.expiry).valueOf() - Date.now().valueOf()) / 1000).toString());
        let strategy;
        switch (form.strategy) {
            case VestingStrategy.LINEAR:
                strategy = LINEAR_STRATEGY_ADDRESS;
                break;
            case VestingStrategy.CLIFF:
                strategy = CLIFF_STRATEGY_ADDRESS;
                break;
            case VestingStrategy.DAILY:
                strategy = DAILY_STEP_STRATEGY_ADDRESS;
                break;
        }
        let amount = parseUnits(form.amount.toString(), currency.decimals)

        // If this isn't ETH we first need to check the approvals
        if (currency.symbol !== 'ETH') {
            const Token = ERC20__factory.connect(currency.address, signer)
            const allowance = await Token.allowance(await signer.getAddress(), faucetAddress)
            if (allowance.lt(amount)) {
                await Token.approve(faucetAddress, amount)
            }
        }

        setMintTx(await Faucet.mint(recipient, amount, expiry, strategy, true, { value: currency.symbol === 'ETH' ? amount : 0 }));

    }, [signer])

    if (!!mintTx) {
        return (
            <Page buttons={[{ label: 'Home', href: '/' }, { label: 'View', href: `https://${process.env.NEXT_PUBLIC_CHAIN_ID === '1' ? '' : 'goerli.'}etherscan.io/tx/${mintTx.hash}` }]}>
                <Text>Your Faucet has been minted.</Text>
                <Text>Have a nice day.</Text>
            </Page>
        )
    }

    return (
        <Formik
            initialValues={{
                // currency: "0x0000000000000000000000000000000000000000",
                expiry: (new Date()),
                strategy: VestingStrategy.LINEAR,
                recipient: address,
                amount: 0
            }}
            validationSchema={formValidationSchema}
            onSubmit={handleSubmit}
        >
            {formikProps => (
                <Page buttons={[{
                    label: 'Back', href: '/'
                }, {
                    label: 'Mint', href: '', onClick: formikProps.handleSubmit
                }]}>
                    {formikProps.isSubmitting ? (
                        <Text>Please check your wallet...</Text>
                    ) : (
                        <Form>
                            {/* <Label>Faucet Currency (blank for ETH)</Label>
                            <Field type="text" name="currency" component={Input} />
                            <ErrorMessage name="currency" component={Error} /> */}
                            <Label>Faucet Recipient</Label>
                            <Field type="text" name="recipient" component={Input} />
                            <ErrorMessage name="recipient" component={Error} />
                            <Label>Vesting Completion Date</Label>
                            <Field type="datetime-local" name="expiry" component={Input} />
                            <ErrorMessage name="expiry" component={Error} />
                            <Label>Vesting Strategy</Label>
                            <Field as="select" name="strategy" component={Select}>
                                <option value={VestingStrategy.LINEAR}>Linear Strategy</option>
                                <option value={VestingStrategy.CLIFF}>Cliff Strategy</option>
                                <option value={VestingStrategy.DAILY}>Daily Step Strategy</option>
                            </Field>
                            <ErrorMessage name="strategy" component={Error} />
                            <Label>{currency.symbol} Amount</Label>
                            <Field type="text" name="amount" component={Input} />
                            <ErrorMessage name="amount" component={Error} />
                        </Form>
                    )}
                </Page>
            )}
        </Formik>
    )
}

export default MintPage