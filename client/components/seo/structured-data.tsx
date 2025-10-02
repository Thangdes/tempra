import { FC } from 'react';

interface StructuredDataProps {
  data: object;
}

export const StructuredData: FC<StructuredDataProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const OrganizationSchema: FC = () => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tempra',
    description: 'AI Calendar Assistant - Get your time back with AI',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    foundingDate: '2024',
    sameAs: [
      'https://twitter.com/tempra',
      'https://linkedin.com/company/tempra',
      'https://github.com/tempra',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'support@tempra.com',
      availableLanguage: ['English', 'Vietnamese'],
    },
  };

  return <StructuredData data={organizationData} />;
};

export const WebSiteSchema: FC = () => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tempra',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return <StructuredData data={websiteData} />;
};

export const SoftwareApplicationSchema: FC = () => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  const softwareData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Tempra',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: 'Tempra Team',
    },
    description: 'AI-powered calendar assistant for scheduling and productivity',
    screenshot: `${baseUrl}/og-image.png`,
    softwareVersion: '1.0',
    url: baseUrl,
  };

  return <StructuredData data={softwareData} />;
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema: FC<BreadcrumbSchemaProps> = ({ items }) => {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <StructuredData data={breadcrumbData} />;
};

interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  url: string;
}

export const ArticleSchema: FC<ArticleSchemaProps> = ({
  title,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  url,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tempra',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return <StructuredData data={articleData} />;
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export const FAQSchema: FC<FAQSchemaProps> = ({ faqs }) => {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <StructuredData data={faqData} />;
};
