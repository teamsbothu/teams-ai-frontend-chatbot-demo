export const metadata = {
  title: 'Teams AI Chatbot',
  description: 'A frontend-only chatbot styled like Microsoft Teams',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'black', color: 'white' }}>
        {children}
      </body>
    </html>
  );
}
