import '../src/index.css'

export const metadata = {
  title: 'SOLATECH Energy Solutions | The Future Starts with Solar',
  description:
    'SOLATECH Energy Solutions provides rooftop solar panel installation, cleaning, inspection, and repair for homes and small businesses in Nueva Ecija, Philippines.',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: '#0B2545',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
