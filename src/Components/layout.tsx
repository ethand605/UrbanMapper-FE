import Head from 'next/head';
import Header from './header';
import React from "react";

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
                //*,
                //*::before,
                //*::after {
                //  box-sizing: border-box;
                //}
                //
                //body {
                //  margin: 0;
                //  color: #333;
                //  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                //    'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
                //    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
                //}
                //
                //.container {
                //  max-width: 65rem;
                //  margin: 1.5rem auto;
                //  padding-left: 1rem;
                //  padding-right: 1rem;
                //}
                
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
