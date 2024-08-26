import React from 'react';
import Head from 'next/head';
import delve from 'dlv';

const seo = ({ seo }) => {
  const metaTitle = delve(seo, 'metaTitle');
  const metaImage = delve(seo, 'metaImage');
  const metaSocial = delve(seo, 'metaSocial');
  const structuredData = delve(seo, 'structuredData');
  const metaDescription = delve(seo, 'metaDescription');
  const canonicalURL = delve(seo, 'canonicalURL');

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} key="meta-description" />
      {metaSocial &&
        metaSocial.map((item, index) => {
          if (item.socialNetwork === 'Twitter') {
            return (
              <React.Fragment key={`twitter-${index}`}>
                <meta
                  name="twitter:card"
                  property="twitter:card"
                  content={item.card}
                />
                <meta
                  name="twitter:title"
                  property="twitter:title"
                  content={item.title}
                />
                <meta
                  name="twitter:description"
                  property="twitter:description"
                  content={item.description}
                />
                <meta
                  name="twitter:image"
                  property="twitter:image"
                  content={item?.image?.url}
                />
              </React.Fragment>
            );
          } else if (item.socialNetwork === 'Facebook') {
            return (
              <React.Fragment key={`facebook-${index}`}>
                <meta
                  name="og:type"
                  property="og:type"
                  content="website"
                />
                <meta
                  name="og:url"
                  property="og:url"
                  content={item.url} // Ensure this is correct, it looks like "website" might be incorrect
                />
                <meta
                  name="og:title"
                  property="og:title"
                  content={item.title}
                />
                <meta
                  name="og:description"
                  property="og:description"
                  content={item.description}
                />
                <meta
                  name="og:image"
                  property="og:image"
                  content={item?.image?.url}
                />
              </React.Fragment>
            );
          }
          return null; // Ensure to return null for items that do not match conditions
        })
      }
      <link rel="icon" href="/favicon.gif" />
      <link rel="icon" href="/favicon.ico" />
      {structuredData && <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        key="str-jsonld"
      />}
      {canonicalURL && <link rel="canonical" href={canonicalURL} key="canonical-URL" />}
    </Head>
  );
};

export default seo;
