import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "Aura | Boutique Digital Studio",
  description: "Bespoke digital experiences for visionary brands.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  document.documentElement.setAttribute('data-theme', 'dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased lg:cursor-none">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          forcedTheme={undefined}
          enableSystem={false}
        >
          <Preloader />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
