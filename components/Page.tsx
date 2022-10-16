import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Root } from './Root'
import { Container } from './Container'
import { ButtonContainer } from './ButtonContainer'
import { Button } from './Button'

export const Page = ({ children, buttons }) => {
    const Buttons = [{
        label: 'Learn', href: 'https://github.com/ourzora/faucets'
    }, {
        label: 'Connect', href: '/mint'
    }]
    return (
        <div>
            <Global styles={css`body {margin: 0; font-family: 'Press Start 2P'; font-size: 12px;}`} />
            <Root>
                <Container>
                    <Content>
                        <div>
                            {children}
                        </div>
                        <ButtonContainer>
                            {buttons?.length ? buttons.map(button => (
                                button.onClick ? (
                                    <Button onClick={button.onClick} key={button.label}>{button.label}</Button>
                                ) : (
                                    <Link href={button.href} key={button.label}>
                                        <Button>{button.label}</Button>
                                    </Link>
                                )
                            )) : null}
                        </ButtonContainer>
                    </Content>
                </Container>
            </Root>
        </div>
    )
}

const Content = styled.div`
    margin: 50px;
    display: grid;
    grid-template-rows: 1fr auto;
`