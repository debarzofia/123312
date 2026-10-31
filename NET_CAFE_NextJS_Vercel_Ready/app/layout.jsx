import "./globals.css";

export const metadata = {
  title: "NET CAFE | Fresh & Healthy Food",
  description: "NET CAFE — Fresh & Healthy Food. Browse our menu in Kurdish, Arabic and English.",
  icons: { icon: "/images/net-logo.jpg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className="nos" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Outfit:wght@400;500;600&family=Vazirmatn:wght@400;500;700&family=Noto+Kufi+Arabic:wght@600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
