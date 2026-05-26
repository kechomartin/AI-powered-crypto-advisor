export const walletRegistry = [
  {
    id: "metamask",
    name: "MetaMask",
    type: "Non-Custodial / Web3 Extension",
    networks: ["Ethereum", "Arbitrum", "Optimism", "Polygon", "BNB Chain"],
    difficulty: "Intermediate",
    steps: [
      { title: "Download", text: "Install the official MetaMask extension via Chrome Web Store or mobile app store." },
      { title: "Secure Seed Phrase", text: "Write down your 12-word recovery phrase on paper. Never store it digitally." },
      { title: "Network Setup", text: "The wallet defaults to Ethereum. Use the top dropdown to toggle EVM Layer-2s." }
    ],
    developerTags: ["evm", "extension", "injection-ready"]
  },
  {
    id: "minipay",
    name: "Minipay",
    type: "Stablecoin Optimization / Mobile",
    networks: ["Celo"],
    difficulty: "Beginner",
    steps: [
      { title: "Phone Onboarding", text: "Sign up instantly using your phone number within partner applications like Opera Mini." },
      { title: "Sub-Cent Transactions", text: "Minipay handles instant stablecoin (cUSD, cEUR) cash-outs with minimal network fees." }
    ],
    developerTags: ["celo", "mobile", "stablecoin-rails"]
  }
];