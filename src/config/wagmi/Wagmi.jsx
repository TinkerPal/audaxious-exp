import { createConfig, http } from "wagmi";

import {
  mainnet,
  sepolia,
  bsc,
  base,
  avalanche,
  arbitrum,
  polygon,
  fantom,
  kava,
} from "wagmi/chains";

import { injected, safe, walletConnect } from "wagmi/connectors";

const addedChains = [
  mainnet,
  sepolia,
  bsc,
  base,
  avalanche,
  arbitrum,
  polygon,
  fantom,
  kava,
];

export const config = createConfig({
  chains: [sepolia],
  connectors: [
    walletConnect({ projectId: "35c6df36716ecbd04dcc4cedba364876" }),
    injected(),
    safe(),
  ],
  transports: {
    [sepolia.id]: http(),
  },
});
