import React, { useState, useEffect } from 'react';
import { 
  BrainCircuit, 
  Search, 
  Loader2, 
  RefreshCw, 
  LayoutDashboard, 
  Wallet, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownRight, 
  ExternalLink,
  Smartphone,
  Layers,
  GraduationCap
} from 'lucide-react';
import { getTopCoins } from './services/cryptoApi';
import AccountCard from './components/AccountCard';
import AdvisorModal from './components/AdvisorModal'; // Injected AI advisory panel overlay

// EXTENSIBLE WALLET ACADEMY DATA LAYER (JSON Schema Architecture)
const walletRegistry = [
  {
    id: "metamask",
    name: "MetaMask",
    type: "Non-Custodial / Web3 Extension & Mobile",
    networks: ["Ethereum", "Arbitrum", "Optimism", "Polygon", "BNB Chain", "Avalanche"],
    difficulty: "Intermediate",
    platform: "Browser Extension / iOS / Android",
    steps: [
      { title: "Download Securely", text: "Install the official MetaMask extension via Chrome Web Store or download the app on iOS/Android." },
      { title: "Generate Seed Phrase", text: "Write down your unique 12-word recovery phrase on physical paper. Never save it as a screenshot or photo." },
      { title: "Network Integration", text: "The wallet defaults to Ethereum. Use the top network toggle to easily add alternative EVM layers." }
    ]
  },
  {
    id: "minipay",
    name: "MiniPay",
    type: "Stablecoin Optimized / Built-in Mobile",
    networks: ["Celo"],
    difficulty: "Beginner",
    platform: "Opera Mini Browser Integration",
    steps: [
      { title: "Instant Activation", text: "Onboard instantly using just your phone number inside the Opera Mini app browser ecosystem." },
      { title: "Stablecoin Operations", text: "Perfect for handling lightning-fast cUSD, cEUR, and cKES sub-cent payments with near-zero gas friction." }
    ]
  },
  {
    id: "binance-wallet",
    name: "Binance Web3 Wallet",
    type: "Exchange-Linked / MPC Custody",
    networks: ["Multi-Chain Support (30+ Networks)"],
    difficulty: "Beginner",
    platform: "Binance Mobile App Feature",
    steps: [
      { title: "Access App Portal", text: "Open your verified Binance application, switch to the 'Web3' tab at the top of your layout interface." },
      { title: "MPC Secure Setup", text: "Utilizes Multi-Party Computation (MPC). No single seed phrase; your security keys are split and securely backed up to cloud accounts." }
    ]
  },
  {
    id: "telegram-wallet",
    name: "Telegram Wallet (@wallet)",
    type: "Custodial / Native Mini-App",
    networks: ["The Open Network (TON)", "Bitcoin", "Ethereum"],
    difficulty: "Beginner",
    platform: "Telegram Messenger Interface",
    steps: [
      { title: "Launch Bot Context", text: "Search for official verified '@wallet' inside Telegram and initialize the chat module." },
      { title: "Peer-to-Peer Sending", text: "Allows instant crypto transfers directly inside message windows as easily as sending a standard photo." }
    ]
  },
  {
    id: "trust-wallet",
    name: "Trust Wallet",
    type: "Multi-Chain Non-Custodial Mobile",
    networks: ["Supports 100+ Blockchains Simultaneously"],
    difficulty: "Beginner to Advanced",
    platform: "Standalone iOS / Android App",
    steps: [
      { title: "Initialize Vault", text: "Download the platform and create a standard multi-coin wallet layout." },
      { title: "dApp Browsing", text: "Utilize the built-in decentralized application browser window to navigate directly to DeFi platforms safely." }
    ]
  },
  {
    id: "bybit-okx",
    name: "OKX & Bybit Web3 Gateways",
    type: "Hybrid Institutional Wallets",
    networks: ["EVM, Solana, Bitcoin Ordinals, Sui"],
    difficulty: "Intermediate",
    platform: "Exchange Apps & Standalone Extensions",
    steps: [
      { title: "Initialize Web3 Modes", text: "Toggle from the regular exchange trading terminal to the native Web3 ecosystem pane." },
      { title: "Airdrop & DeFi Hubs", text: "Both systems offer massive native dashboards to track yield farming options directly from their interface." }
    ]
  },
  {
    id: "coinbase-uphold-brave",
    name: "Coinbase Wallet, Brave & Uphold",
    type: "Browser-Integrated & Ecosystem Native",
    networks: ["Base, Ethereum, Solana, XRPL"],
    difficulty: "Beginner to Intermediate",
    platform: "Built-in Browser / Dedicated Application",
    steps: [
      { title: "Ecosystem Synergies", text: "Brave Wallet is built right into the browser core (no extensions), avoiding phishing vectors entirely." },
      { title: "Fiat Off-ramping", text: "Coinbase and Uphold wallets make linking traditional bank accounts for cashing out straight-forward." }
    ]
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('dashboard'); 
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedCoin, setSelectedCoin] = useState(null); // Local reactive pointer tracking selected asset modal

  // LIVE CRYPTO PRODUCTION DATA FETCHING
  const loadMarketData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTopCoins(1, 100);
      setCoins(data);
    } catch (err) {
      setError('Market connection rate limits hit. Please refresh to try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'dashboard') {
      loadMarketData();
    }
  }, [activeTab]);

  // REACT STATE LOGICAL FILTER FOR SEARCHBAR
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans selection:bg-emerald-500/30">
      
      {/* PERSISTENT NAVIGATION SIDEBAR PANEL */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-4 sticky top-0 h-screen hidden md:flex">
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2 py-3">
            <BrainCircuit className="h-8 w-8 text-emerald-400" />
            <div>
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent block">
                crypto-advisor
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest block">AI-Powered Hub</span>
            </div>
          </div>
          
          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'dashboard' 
                  ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400' 
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-100'
              }`}
            >
              <LayoutDashboard size={18} /> Market Matrix
            </button>
            
            <button 
              onClick={() => setActiveTab('wallets')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'wallets' 
                  ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400' 
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-100'
              }`}
            >
              <Wallet size={18} /> Wallet Academy
            </button>
            
            <button 
              onClick={() => setActiveTab('scheduler')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'scheduler' 
                  ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400' 
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-100'
              }`}
            >
              <Calendar size={18} /> Book Advisor
            </button>
          </nav>
        </div>

        {/* ACCOUNT ABSTRACTION EMBEDDED WIDGET INJECTION SLOT */}
        <div className="border-t border-slate-800 pt-4 mt-auto">
          <AccountCard />
        </div>
      </aside>

      {/* CORE FRAMEWORK WORKSPACE CONTAINER */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* APP BAR HEADER NAVIGATION */}
        <nav className="border-b border-slate-800 bg-slate-900/40 backdrop-blur px-6 py-4 flex items-center justify-between sticky top-0 z-40">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {activeTab === 'dashboard' && "Global Market Indices"}
            {activeTab === 'wallets' && "Self-Custody Terminal Academy"}
            {activeTab === 'scheduler' && "Strategic Portfolio Consultation Router"}
          </h2>
          
          {activeTab === 'dashboard' && (
            <div className="relative w-72">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Filter 500+ cryptocurrencies..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-900 text-xs pl-9 pr-4 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-emerald-500 text-slate-100 placeholder:text-slate-500 transition-all"
              />
            </div>
          )}
        </nav>

        {/* DYNAMIC VIEW ROUTER */}
        <main className="p-6 md:p-8 max-w-7xl w-full mx-auto flex-1 overflow-y-auto">
          
          {/* VIEW 1: CRYPTO MARKET MONITOR */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-black tracking-tight text-white">Live Cryptographic Assets</h1>
                  <p className="text-slate-400 text-xs">Real-time valuation algorithms streaming data channels directly from production nodes.</p>
                </div>
                <button 
                  onClick={loadMarketData} 
                  className="p-2 bg-slate-900 rounded-lg border border-slate-800 hover:bg-slate-800 cursor-pointer text-slate-300 transition-colors"
                  title="Force Feed Refresh"
                >
                  <RefreshCw size={16} className={loading ? 'animate-spin text-emerald-400' : ''} />
                </button>
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-32 gap-3">
                  <Loader2 className="animate-spin text-emerald-400 h-8 w-8" />
                  <p className="text-xs font-mono text-slate-500">Synchronizing feeds...</p>
                </div>
              ) : error ? (
                <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl text-xs font-medium text-center">
                  {error}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredCoins.map(coin => (
                    <div 
                      key={coin.id} 
                      onClick={() => setSelectedCoin(coin)} // Open AI Modal upon card click
                      className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-slate-700 hover:scale-[1.01] flex justify-between items-center transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full bg-slate-800" />
                        <div className="min-w-0">
                          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider font-mono">{coin.symbol}</p>
                          <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                            {coin.name}
                          </h4>
                          <p className="text-base font-mono font-semibold mt-0.5 text-slate-200">
                            ${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                          </p>
                        </div>
                      </div>
                      <div className={`text-xs font-bold px-2 py-1 rounded flex items-center gap-0.5 font-mono ${
                        coin.price_change_percentage_24h >= 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                      }`}>
                        {coin.price_change_percentage_24h >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                        {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* VIEW 2: MODULAR DECENTRALIZED WALLET ACADEMY */}
          {activeTab === 'wallets' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-br from-slate-900 to-slate-850 p-6 rounded-2xl border border-slate-800">
                <div className="space-y-1">
                  <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                    <GraduationCap className="text-emerald-400" /> Web3 Infrastructure Academy
                  </h1>
                  <p className="text-slate-400 text-xs">Architectural onboarding guides covering core centralized gateways and self-custody apps.</p>
                </div>
                <div className="text-xs font-semibold px-3 py-1 bg-slate-800 border border-slate-700 text-slate-400 rounded-lg flex items-center gap-2">
                  <Layers size={14} className="text-cyan-400" /> Fully Extensible Schema
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {walletRegistry.map((wallet) => (
                  <div key={wallet.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4 flex flex-col justify-between hover:border-slate-700 transition-colors">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <span className="text-[10px] bg-slate-800 text-slate-400 font-mono font-bold px-2 py-0.5 rounded border border-slate-700 uppercase tracking-wider block w-fit">
                            {wallet.type}
                          </span>
                          <h3 className="text-lg font-bold text-white mt-2">{wallet.name}</h3>
                        </div>
                        <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full font-bold border border-emerald-500/10 shrink-0">
                          {wallet.difficulty}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <Smartphone size={13} className="text-cyan-400" /> {wallet.platform}
                      </div>

                      <div className="space-y-3 border-t border-slate-800/80 pt-4 mt-2">
                        {wallet.steps.map((step, idx) => (
                          <div key={idx} className="flex gap-3 text-xs leading-relaxed">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-800 text-slate-300 font-bold flex items-center justify-center font-mono border border-slate-700">
                              {idx + 1}
                            </span>
                            <p className="text-slate-300">
                              <strong className="text-white font-semibold block mb-0.5">{step.title}</strong>
                              {step.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-800/40 mt-4">
                      <button className="w-full flex items-center justify-center gap-1.5 py-2 bg-slate-950 hover:bg-slate-800 text-xs font-semibold text-slate-300 rounded-lg border border-slate-800 transition-all cursor-pointer">
                        Launch Official Guide <ExternalLink size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 3: APPOINTMENT CONSULTING SCHEDULER HUB */}
          {activeTab === 'scheduler' && (
            <div className="space-y-6 max-w-2xl mx-auto text-center py-12">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/5">
                <Calendar size={28} />
              </div>
              
              <div className="space-y-2">
                <h1 className="text-3xl font-black tracking-tight text-white">Human Capital Advisory Sync</h1>
                <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
                  Bridge localized market anomalies with verified macroeconomic analysts. Secure dedicated calendar allocations for cross-chain strategy formulation.
                </p>
              </div>

              {/* CALENDLY / CAL.COM PRODUCTION WRAPPER INTERACTIVE SLOT */}
              <div className="bg-slate-900 border-2 border-dashed border-slate-800 rounded-2xl h-96 flex flex-col items-center justify-center p-6 mt-8">
                <p className="text-xs font-mono text-slate-500 max-w-xs leading-relaxed">
                  [ Developer Sandbox Area: Replace this structural node with your Cal.com / Calendly production responsive inline iframe component ]
                </p>
                <button className="mt-5 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 font-bold text-slate-950 rounded-xl text-xs tracking-wide uppercase transition-all shadow-lg shadow-emerald-500/10 cursor-pointer">
                  Mount Native Scheduler Module
                </button>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* RENDER LAZY ADVISOR TERMINAL OVERLAY DYNAMICALLY */}
      {selectedCoin && (
        <AdvisorModal 
          coin={selectedCoin} 
          onClose={() => setSelectedCoin(null)} 
        />
      )}
    </div>
  );
}

export default App;