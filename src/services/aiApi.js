import { GoogleGenAI } from '@google/genai';

// Initialize the Gemini client. It reads from your VITE_GEMINI_API_KEY environment variable.
const aiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey: aiKey });

/**
 * Generates an automated AI advisory report for a specific asset based on live metrics
 * @param {Object} coin - The full live coin object from CoinGecko
 * @returns {Promise<string>} Markdown formatted advisory report
 */
export const generateCryptoAdvice = async (coin) => {
  if (!aiKey) {
    return `### ⚠️ AI Gateway Offline\nTo activate live intelligence, please add your \`VITE_GEMINI_API_KEY\` to your root \`.env\` configuration file.`;
  }

  const basePrompt = `
    You are an elite institutional Web3 Quantitative Trading Advisor. 
    Analyze the following live market asset data and generate a concise, structured advisory report.

    Asset Data:
    - Name: ${coin.name} (${coin.symbol.toUpperCase()})
    - Current Valuation: $${coin.current_price.toLocaleString()}
    - Global Market Cap Rank: #${coin.market_cap_rank}
    - 24h Price Volatility: ${coin.price_change_percentage_24h?.toFixed(2)}%
    - 24h High: $${coin.high_24h?.toLocaleString() || 'N/A'}
    - 24h Low: $${coin.low_24h?.toLocaleString() || 'N/A'}

    Provide your technical analysis using exactly these Markdown headings:
    ### 📊 Market Sentiment Profile
    (Provide a brief macro summary of what this price activity signifies)

    ### 🛡️ Core Risk Assessment
    (List critical resistance/support factors or volatility warnings)

    ### 🎯 Strategic Position Recommendation
    (State whether the short-term outlook favors Accumulation, Holding, or De-risking, along with an advisory summary)
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: basePrompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "### ❌ Engine Failure\nFailed to compile predictive metrics. Please ensure your API credentials are valid.";
  }
};