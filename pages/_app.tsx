import type { AppProps } from "next/app";
import Layout from "@components/Layout";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  );
}
