import "./globals.css";
import Navbar from "../app/Navbar/page";
import Myfooter from "./footer/page";

export const metadata = {
  title: "hello",
  icon: "/cart.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body>
        <Navbar />
        <main>{children}</main>
        <Myfooter />
      </body>
    </html>
  );
}
