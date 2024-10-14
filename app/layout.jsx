import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "/components/Header";
import StairTransition from "/components/StairTransition";
import Transition from "@/components/Transition";


const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetBrainsMono'
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>

        <Header />
        <StairTransition />
        <Transition> {children} </Transition>



      </body>
    </html>
  );
}
