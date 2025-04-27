import { Helmet } from "react-helmet";


export default function DefaultHelmet({
  title = "Kinplus Technology | Best Tech Company in Ekiti - Software Development, IT Solutions, Tech Training",
  description = "Kinplus Technology is the leading tech company in Ekiti State, offering top-notch software development, tech training, IT consulting, and digital transformation services to empower your growth.",
  url = "https://www.kinplusgroup.com",
  image = "https://www.kinplusgroup.com/kinplus-opengraph-image.png",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content="Kinplus Technology, tech company in Ekiti, best tech companies Ekiti, software development Ekiti, IT consulting Ado Ekiti, digital transformation Nigeria, tech training, coding bootcamp, web development Ekiti, mobile app development Ekiti, Ekiti State tech company"
      />
      <meta
        name="author"
        content="Kinplus Technology"
      />

      {/* Canonical Link */}
      <link
        rel="canonical"
        href={url}
      />

      {/* Open Graph / Facebook */}
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:url"
        content={url}
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={image}
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:url"
        content={url}
      />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={image}
      />

      {/* Favicon */}
      <link
        rel="icon"
        href="/favicon.ico"
      />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://www.kinplusgroup.com/#organization",
          name: "Kinplus Technologies",
          url: "https://www.kinplusgroup.com",
          logo: "https://www.kinplusgroup.com/Kinplus-favicon.png",
          description:
            "Kinplus Technologies is the leading tech company in Ekiti State, specializing in software development, IT consulting, tech training, and digital innovation.",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+2347075199782",
            contactType: "customer service",
            email: "info@kinplusgroup.com",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "2nd Floor, Christore Building, Opposite Crunchies Restaurant",
            addressLocality: "Similoluwa",
            addressRegion: "Ado-Ekiti",
            postalCode: "360281",
            addressCountry: "Nigeria",
          },
          sameAs: [
            "https://www.facebook.com/kinplustechnologies",
            "https://www.twitter.com/KinplusTech",
            "https://www.linkedin.com/company/kinplustechnologies/",
            "https://www.instagram.com/kinplustechnologies/",
          ],
        })}
      </script>
    </Helmet>
  );
}
