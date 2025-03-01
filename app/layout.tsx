import "./globals.css";
import type { Metadata } from "next";
import { Dancing_Script, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/components/I18nProvider";
import ParallaxWrapper from "@/utils/ParallaxWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iglesia Nueva Creación",
  description:
    "Únete a nuestra comunidad cristiana y experimenta una adoración significativa a través de la música, la oración y la Palabra de Dios. Descubre nuestra misión de compartir el amor de Dios y hacer discípulos. Te esperamos en nuestros servicios semanales.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider>
          <ParallaxWrapper> {/* Aquí envolvemos la app en el cliente */}
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ParallaxWrapper>
        </I18nProvider>
      </body>
    </html>
  );
}
