import React from "react";

import Head from "next/head";

const SEO = (props) => {
    let { siteTitle, title, description } = props
    return (
        <Head>
            <title>{`${title} | ${siteTitle}`}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#039be5" />
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>

            <meta name="msapplication-TileColor" content="#039be5" />
            <meta name="theme-color" content="#039be5" />
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteTitle} />

            {/*<meta property="twitter:card" content="summary" />*/}
            {/*<meta property="twitter:creator" content={config.social.twitter} />*/}
            {/*<meta property="twitter:title" content={title} />*/}
            {/*<meta property="twitter:description" content={description} />*/}
        </Head>
    );
}
export default SEO;