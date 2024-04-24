import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import {
  bsc,
  base,
  avalanche,
  arbitrum,
  polygon,
  fantom,
  kava,
} from "wagmi/chains";

import { publicProvider } from "wagmi/providers/public";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

//Configure chains

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, bsc, base, avalanche, arbitrum, polygon, fantom, kava],
  [
    alchemyProvider({ apiKey: "Pa_6cPHfAq-ZVUwYsxX1W938lX9GgEVZ" }),
    publicProvider(),
  ]
);

//Setup wagmi config

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({ chains, options: { appName: "AudaXious" } }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: "35c6df36716ecbd04dcc4cedba364876",
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

export default function Wagmi({ children }) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}
