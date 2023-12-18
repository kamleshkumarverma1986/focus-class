// carousel CSS
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"
// Our Custom CSS
import "../styles/globals.scss";
import { Inter } from 'next/font/google';
import { AppThemeProvider } from "@/providers/AppThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Focus Class',
  description: 'Best Coaching in Jabalpur',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppThemeProvider >
          <Header />
          <main style={{marginTop: "50px", marginBottom: "50px"}}>{children}</main>
          <Footer></Footer>
        </AppThemeProvider>
      </body>
    </html>
  )
}
