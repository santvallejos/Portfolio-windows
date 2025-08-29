export default function generateMetadata() {
  const title = "Windows 10 UI Clone - Interactive Portfolio by Santiago Vallejos"
  const description =
    "An interactive portfolio website designed as a Windows 10 desktop clone. Explore projects, skills, and professional information through a familiar Windows 10 interface."
  const url = "https://santiagodev.netlify.app/"
  const ogImage = "https://santiagodev.netlify.app/images/og-image.png"

  return {
    title,
    description,
    metadataBase: new URL(url),
    openGraph: {
      title,
      description,
      url,
      siteName: "Santiago Vallejos Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Windows 10 UI Clone Portfolio",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@santvallejos",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    authors: [{ name: "Santiago Vallejos", url: "https://github.com/santvallejos" }],
    creator: "Santiago Vallejos",
    publisher: "santvallejos",
    keywords: [
      "portfolio",
      "windows 10",
      "ui clone",
      "web developer",
      "react",
      "next.js",
      "interactive portfolio",
      "santiago vallejos",
      "santvallejos",
      "frontend developer",
      "full stack developer",
    ],
  }
}
