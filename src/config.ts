import { Bech32Address } from '@keplr-wallet/cosmos';
import { ChainInfoWithExplorer } from './stores/chain';
import { DenomHelper } from '@keplr-wallet/common';
import { Int } from '@keplr-wallet/unit';

export const HideCreateNewPool: boolean = false;
export const HideLBPPoolFromPage: boolean = false;
export const HidePoolFromPage: {
	[poolId: string]: boolean | undefined;
} = {
	/*
	'16': window.location.hostname.startsWith('app.'),
	 */
};

export const LockupAbledPoolIds: {
	[poolId: string]: boolean | undefined;
} = {
	// '1': true,
	// '2': true,
	// '3': true,
	// '4': true,
	// '5': true,
	// '6': true,
	// '7': true,
	// '8': true,
	// '9': true,
	// '10': true,
	// '13': true,
	// '15': true,
};

export const PromotedLBPPoolIds: {
	poolId: string;
	name: string;
	baseDenom: string;
	destDenom: string;
}[] = [
	{
		poolId: '6',
		name: 'Stargaze',
		baseDenom: DenomHelper.ibcDenom([{ portId: 'transfer', channelId: 'channel-1' }], 'ustarx'),
		destDenom: 'uosmox',
	},
];
export const HideAddLiquidityPoolIds: {
	[poolId: string]: boolean;
} = {
	/*
	'21': window.location.hostname.startsWith('app.'),
	 */
};
export const PreferHeaderShowTokenPricePoolIds: {
	[poolId: string]:
		| {
				baseDenom: string;
		  }
		| undefined;
} = {
	/*
	'21': {
		baseDenom: DenomHelper.ibcDenom([{ portId: 'transfer', channelId: 'channel-8' }], 'uregen'),
	},
	 */
};
export const ExtraGaugeInPool: {
	[poolId: string]: {
		gaugeId: string;
		denom: string;
		extraRewardAmount?: Int;
	};
} = {};

export const PoolsPerPage = 10;
export const RewardEpochIdentifier = '15min';

/**
 * Determine the channel info per the chain.
 * Guide users to use the same channel for convenience.
 */
export const IBCAssetInfos: {
	counterpartyChainId: string;
	// Souce channel id based on the Osmosis chain
	sourceChannelId: string;
	// Destination channel id from Osmosis chain
	destChannelId: string;
	coinMinimalDenom: string;
}[] = [
	{
		counterpartyChainId: 'cygnusx-1',
		sourceChannelId: 'channel-1',
		destChannelId: 'channel-1',
		coinMinimalDenom: 'ustarx',
	},
];

export const EmbedChainInfos: ChainInfoWithExplorer[] = [
	{
		rpc: 'https://osmosis-rpc.cygnusx-1.publicawesome.dev',
		rest: 'https://osmosis-rest.cygnusx-1.publicawesome.dev',
		chainId: 'cygnusx-osmo-1',
		chainName: 'Stargze Osmosis Testnet',
		stakeCurrency: {
			coinDenom: 'OSMOX',
			coinMinimalDenom: 'uosmox',
			coinDecimals: 6,
			coinGeckoId: 'osmosis',
			coinImageUrl: window.location.origin + '/public/assets/tokens/osmosis.svg',
		},
		bip44: {
			coinType: 118,
		},
		bech32Config: Bech32Address.defaultBech32Config('osmo'),
		currencies: [
			{
				coinDenom: 'OSMOX',
				coinMinimalDenom: 'uosmox',
				coinDecimals: 6,
				coinGeckoId: 'osmosis',
				coinImageUrl: window.location.origin + '/public/assets/tokens/osmosis.svg',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'OSMOX',
				coinMinimalDenom: 'uosmox',
				coinDecimals: 6,
				coinGeckoId: 'osmosis',
				coinImageUrl: window.location.origin + '/public/assets/tokens/osmosis.svg',
			},
		],
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://osmosis-explorer.cygnusx-1.publicawesome.dev/transactions/{txHash}',
	},
	{
		rpc: 'https://rpc.cygnusx-1.publicawesome.dev',
		rest: 'https://rest.cygnusx-1.publicawesome.dev',
		chainId: 'cygnusx-1',
		chainName: 'Stargaze Cygnusx-1 Testnet',
		stakeCurrency: {
			coinDenom: 'STARX',
			coinMinimalDenom: 'ustarx',
			coinDecimals: 6,
			coinGeckoId: 'stars',
			coinImageUrl: window.location.origin + '/public/assets/tokens/cosmos.svg',
		},
		bip44: {
			coinType: 118,
		},
		bech32Config: Bech32Address.defaultBech32Config('stars'),
		currencies: [
			{
				coinDenom: 'STARX',
				coinMinimalDenom: 'ustarx',
				coinDecimals: 6,
				coinGeckoId: 'stars',
				coinImageUrl: window.location.origin + '/public/assets/tokens/cosmos.svg',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'STARX',
				coinMinimalDenom: 'ustarx',
				coinDecimals: 6,
				coinGeckoId: 'stars',
				coinImageUrl: window.location.origin + '/public/assets/tokens/cosmos.svg',
			},
		],
		coinType: 118,
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://explorer.cygnusx-1.publicawesome.dev/transactions/{txHash}',
	},
];
