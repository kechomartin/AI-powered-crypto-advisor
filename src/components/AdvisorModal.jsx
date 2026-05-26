import React, { useState, useEffect } from 'react';
import { X, BrainCircuit, Loader2, ShieldAlert } from 'lucide-react';
import { generateCryptoAdvice } from '../services/aiApi';

export default function AdvisorModal({ coin, onClose }) {
  const [report, setReport] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInsight() {
      if (!coin) return;
      setLoading(true);
      const advice = await generateCryptoAdvice(coin);
      setReport(advice);
      setLoading(false);
    }
    fetchInsight();
  }, [coin]);

  if (!coin) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
          <div className="flex items-center gap-3">
            <img src={coin.image} alt="" className="w-8 h-8 rounded-full" />
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                {coin.name} AI Terminal <BrainCircuit size={16} className="text-emerald-400" />
              </h3>
              <p className="text-xs text-slate-400 font-mono">Real-time parameters loaded successfully</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer">
            <X size={18} />
          </button>
        </div>

        {/* Modal Body / Report Presentation */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-sm leading-relaxed text-slate-300">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-center">
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">Live Price</p>
              <p className="text-sm font-semibold text-slate-200 mt-0.5">${coin.current_price.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">24h Swings</p>
              <p className={`text-sm font-semibold mt-0.5 ${coin.price_change_percentage_24h >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">Cap Rank</p>
              <p className="text-sm font-semibold text-cyan-400 mt-0.5">#{coin.market_cap_rank}</p>
            </div>
          </div>

          {/* AI Content Generation State */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <Loader2 className="animate-spin text-emerald-400 h-8 w-8" />
              <p className="text-xs font-mono text-slate-500 animate-pulse">Running on-chain prediction models...</p>
            </div>
          ) : (
            <div className="prose prose-invert max-w-none space-y-4 whitespace-pre-wrap selection:bg-emerald-500/20">
              {/* Splitting strings manually or letting standard rendering style the markdown structure output */}
              {report}
            </div>
          )}
        </div>

        {/* Footer Disclaimer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 text-center flex items-center justify-center gap-2 text-[11px] text-slate-500">
          <ShieldAlert size={12} className="text-amber-500 shrink-0" />
          <span>Algorithmic summaries are for educational utility and do not constitute financial advice.</span>
        </div>
      </div>
    </div>
  );
}