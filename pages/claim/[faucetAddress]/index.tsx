import React, { useCallback, useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object as yupObj, number, InferType } from 'yup';
import { useProvider, useAccount, useSigner } from 'wagmi';
import { useRouter } from 'next/router'

import { Page } from '../../../components/Page'
import { Label } from '../../../components/Label'
import { Error } from '../../../components/Error'
import { Input } from '../../../components/Input'

// TODO: Handle ERC20 Faucets
function MintPage() {
    const provider = useProvider();
    const { data: signer } = useSigner();
    const { isConnected } = useAccount();
    const router = useRouter()

    useEffect(() => {
        if (!provider) {
            router.push('/')
        }
    }, [isConnected])

    const formValidationSchema = yupObj({
        tokenId: number().required().min(0)
    });

    type FormSchema = InferType<typeof formValidationSchema>

    const handleSubmit = useCallback(async (form: FormSchema) => {
        router.push(`/claim/${router.query.faucetAddress}/${form.tokenId}`)
    }, [signer])

    return (
        <Formik
            initialValues={{
                tokenId: 0
            }}
            validationSchema={formValidationSchema}
            onSubmit={handleSubmit}
        >
            {formikProps => (
                <Page buttons={[{
                    label: 'Back', href: '/'
                }, {
                    label: 'Next', href: '', onClick: formikProps.handleSubmit
                }]}>
                    <Form>
                        <Label>Enter your faucet token ID</Label>
                        <Field type="text" name="tokenId" component={Input} />
                        <ErrorMessage name="tokenId" component={Error} />
                    </Form>

                </Page>
            )}
        </Formik>
    )
}

export default MintPage