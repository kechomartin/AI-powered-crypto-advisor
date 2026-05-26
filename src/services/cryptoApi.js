import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

/**
 * Fetches top cryptocurrencies by market capitalization
 * @param {number} page - Current page for pagination
 * @param {number} perPage - Number of assets to return per request (Max: 250)
 * @returns {Promise<Array>} List of formatted coin market data
 */
export const getTopCoins = async (page = 1, perPage = 100) => {
  try {
    const response = await axios.get(`${BASE_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: perPage,
        page: page,
        sparkline: false,
        price_change_percentage: '24h',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching market data from CoinGecko:", error.message);
    throw error;
  }
};