import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useJsApiLoader} from "@react-google-maps/api";
import React from "react";
import {DirectionProvider} from "../hooks/useDirection";
import Layout from "../Components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["geometry", "drawing", "places"]
  });

  return !isLoaded ? (<div>Loading...</div>) : (
      (<DirectionProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DirectionProvider>))

}

export default MyApp;
