git add app/layout.tsx
git commit -m "Add root layout for app directory"
git push origin main
// app/layout.tsx
import './globals.css'; // ha van ilyen css fájlod, különben töröld ezt a sort
import React from 'react';

export const metadata = {
  title: 'Teams AI Frontend Chatbot',
  description: 'Microsoft Teams-stílusú frontend chatbot',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body style={{ background: 'black', color: 'white', margin: 0, fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
