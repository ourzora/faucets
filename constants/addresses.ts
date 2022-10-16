export const FAUCET_FACTORY_ADDRESS = process.env.NEXT_PUBLIC_CHAIN_ID === '1' ? '0xd6239b155eb29a34b7e277d89f2801c614f41021' : '0x292d954447b6cd90c65a2f81fa701187979152ea'
export const LINEAR_STRATEGY_ADDRESS = process.env.NEXT_PUBLIC_CHAIN_ID === '1' ? '0xca734042f60dcb45363622571eae8a08e09c4d0e' : '0xfd36c0b2f508e6afb4c1c66e16b45e2a61a73136'
export const CLIFF_STRATEGY_ADDRESS = process.env.NEXT_PUBLIC_CHAIN_ID === '1' ? '0x8ea04aa8aa5174fe641fde342e740ea167d25fed' : '0xd7cbd3911074d361ab5cd01fbcf80063d31e6ff3'
export const DAILY_STEP_STRATEGY_ADDRESS = process.env.NEXT_PUBLIC_CHAIN_ID === '1' ? '0x53d83fdd793db21161c4bd663cb7382dafc90626' : '0x8e614c783dcfef3df69154cca157eaf51fc32012'

// TODO: this can be removed when multiple ERC-20s are supported and we're dynamically fetching faucet addrs
export const ETH_FAUCET_ADDRESS = process.env.NEXT_PUBLIC_CHAIN_ID === '1' ? '0x8B686B494A5ad3eA523892C6D4f0F4634CA9FdeE' : '0xbB57CfdB2F4Be1Db46F2e74a9e9772aBcd593E2F'