import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex-Frontend Developer",
  description: "Frontend Developer building clean, scalable interfaces with Next.js and React",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-white text-gray-900 antialiased"
      >
        {children}
      </body>
    </html>
  );
}
