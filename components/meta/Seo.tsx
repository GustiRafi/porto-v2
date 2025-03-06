import Script from 'next/script';

export default function SEO() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GustiRafi - Full Stack Web Developer',
    url: 'https://gusti.uno',
    author: {
      '@type': 'Person',
      name: 'GustiRafi',
      url: 'https://gusti.uno',
    },
    description: 'Full Stack Web Developer specializing in modern and responsive web applications.',
    sameAs: [
      'https://github.com/GustiRafi',
      'https://x.com/Gustirafi5',
      'https://www.linkedin.com/in/rafigusti/',
      'https://www.instagram.com/_gustirafi/',
      'https://www.facebook.com/gusti.rafi.71',
      'https://www.threads.net/@_gustirafi'
    ],
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
