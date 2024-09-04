"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import store from "@/store";
import { Provider } from "react-redux";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <title>Hekto E-commerce</title>
        </head>
        <body>
          <Header />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
