import React from 'react';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { LogIn, LogOut, Wallet, ShieldCheck, Copy, Check } from 'lucide-react';

export default function AccountCard() {
  const { login, logout, authenticated, user } = usePrivy();
  const { wallets } = useWallets();
  const [copied, setCopied] = React.useState(false);

  // Find the smart contract embedded account created via social login
  const embeddedWallet = wallets.find((w) => w.walletClientType === 'privy');
  const address = embeddedWallet?.address;

  const copyAddress = () => {
    if (!address) return;
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!authenticated) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center space-y-4">
        <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto text-emerald-400">
          <Wallet size={24} />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">Instant Web3 Onboarding</h3>
          <p className="text-xs text-slate-400 mt-1">No extensions or phrases required. Create a secure, smart account using social sign-on.</p>
        </div>
        <button 
          onClick={login}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 font-medium text-slate-950 text-sm rounded-lg transition-all font-sans cursor-pointer"
        >
          <LogIn size={16} /> Connect Account
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-emerald-400" />
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Smart Account Active</span>
        </div>
        <button 
          onClick={logout}
          className="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-rose-400 rounded-lg transition-colors cursor-pointer"
          title="Disconnect"
        >
          <LogOut size={14} />
        </button>
      </div>

      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
        <div className="truncate pr-4">
          <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Contract Address</p>
          <p className="text-xs font-mono text-slate-300 truncate mt-0.5">
            {address ? address : "Generating smart account rails..."}
          </p>
        </div>
        {address && (
          <button 
            onClick={copyAddress}
            className="p-1.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded border border-slate-800 cursor-pointer"
          >
            {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
          </button>
        )}
      </div>

      <div className="flex justify-between items-center text-[11px] text-slate-400">
        <span>Logged in via: <strong className="text-slate-200 capitalize">{user?.loginMethod}</strong></span>
        <span className="text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">Gas-Sponsorship Ready</span>
      </div>
    </div>
  );
}