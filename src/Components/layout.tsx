import Head from 'next/head';
import Header from './header';
import React from "react";
import useAddresses from "../hooks/useAddresses";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>UrbanMapper</title>
            </Head>
            <Header />
            <main>
                <div className="container">{children}</div>
            </main>
            <style jsx global>{`
                Header {
                  //position: absolute;
                  height: 10vh;
                  width: 100%;
                  z-index: 99;
                }
      `     }</style>

        </>
    )
}
