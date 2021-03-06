import '../src/styles/index.css';

import React from 'react';
import App from 'next/app';
import Head from 'next/head';

class MyApp extends App {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.

    // static async getInitialProps({ Component, ctx }) {
    //     let pageProps = {};

    //     if (Component.getInitialProps) {
    //         pageProps = await Component.getInitialProps(ctx);
    //     }

    //     return { pageProps };
    // }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>Next template</title>
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}

export default MyApp;
