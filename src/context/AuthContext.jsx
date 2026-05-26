import React from 'react';
import { PrivyProvider } from '@privy-io/react-auth';

export function AuthContextProvider({ children }) {
  // Swapping the old placeholder for a structurally valid development mock ID
  const PRIVY_APP_ID = import.meta.env.VITE_PRIVY_APP_ID || "clv1234560000000000000000";

  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        loginMethods: ['google', 'email', 'apple', 'twitter'],
        embeddedWallets: {
          createOnLogin: 'all-users',
          requireUserPasswordOnCreate: false,
        },
        appearance: {
          theme: 'dark',
          accentColor: '#10b981',
          showWalletLoginFirst: false,
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}