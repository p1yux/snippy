import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "sonner";
import NavBar from "@/components/custom/navigation/NavBar";

export const metadata: Metadata = {
  title: "Snippy",
  description: "A simple notes snippet manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <div className="flex flex-col min-h-screen w-full bg-gray-100 dark:bg-gray-900">
            <NavBar />
            <main className="flex-grow p-4">
              {children}
            </main>
          </div>
          
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
