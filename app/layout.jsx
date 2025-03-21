"use client";

import { ClerkProvider } from "@clerk/nextjs";
import "@/app/globals.css"; // Ensure correct path
import { AppContextProvider } from "@/contexts/AppContext";


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <AppContextProvider>
    <html lang="en">
    <body>{children}</body>
    </html>
    </AppContextProvider>
    </ClerkProvider>
  );
}
