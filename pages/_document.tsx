// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
                <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>

                <title>Faucets</title>
                <meta name="title" content="Faucets" />
                <meta
                    name="description"
                    content="Faucets are vesting NFTs that allow funds to be remitted on a fixed schedule. Faucets can be used for streaming payments, equity vesting, call options, and more. Since they are represented as NFTs, they can also be bought, sold, and traded on open markets."
                />
                <meta name="og:title" content="Facuets" />
                <meta name="og:url" content="https://faucets.sh" />
                <meta
                    name="og:description"
                    content="Faucets are vesting NFTs that allow funds to be remitted on a fixed schedule. Faucets can be used for streaming payments, equity vesting, call options, and more. Since they are represented as NFTs, they can also be bought, sold, and traded on open markets."
                />
                <meta
                    name="og:image"
                    content="https://faucets.sh/images/ogImage.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Faucets" />
                <meta name="twitter:url" content="https://faucets.sh" />
                <meta
                    name="twitter:image"
                    content="https://faucets.sh/images/ogImage.png"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}