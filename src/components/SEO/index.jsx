/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';

export default function SEO({
  children, title, siteName, pageURL, shortDescription, description, ogImg,
}) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{`${siteName} | ${title}`}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={shortDescription} />
      <meta property="og:image" content={ogImg} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageURL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={shortDescription} />
      <meta property="twitter:image" content={ogImg} />

      {children}
    </Head>
  );
}
