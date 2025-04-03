import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Js Films",
  description: "Criado por Altieris",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Typewalk+1915+Semi+Bold&display=swap"
          rel="stylesheet"
        /> */}
        <link rel="icon" href="/images/logo-js-films.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
