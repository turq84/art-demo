import type { Metadata } from 'next';

import StyledComponentsRegistry from '../lib/registry';
import { ContextProvider } from '../context/Context';
import '../constants/style.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <ContextProvider>{children}</ContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
