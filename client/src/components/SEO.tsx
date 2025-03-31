import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  type?: string;
}

const SEO = ({
  title = 'BlockForgeLab - Blockchain Development Company',
  description = 'BlockForgeLab is a premier blockchain development company dedicated to building innovative decentralized solutions for businesses across industries.',
  keywords = 'blockchain development, blockchain services, smart contracts, cryptocurrency, blockchain consulting, digital transformation, blockchain technology, decentralized applications, web3, BlockForgeLab',
  ogImage = 'https://blockforgelab.com/og-image.jpg',
  twitterImage = 'https://blockforgelab.com/twitter-image.jpg',
  canonicalUrl = 'https://blockforgelab.com/',
  type = 'website'
}: SEOProps) => {
  const siteUrl = 'https://blockforgelab.com';
  const fullCanonicalUrl = `${siteUrl}${canonicalUrl}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="BlockForgeLab" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={twitterImage} />

      {/* Canonical */}
      <link rel="canonical" href={fullCanonicalUrl} />
    </Helmet>
  );
};

export default SEO;