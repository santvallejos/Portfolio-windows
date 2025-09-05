/**
 * SEO utility functions for the Windows 10 UI Clone Portfolio
 */

// Generate canonical URL
export function getCanonicalUrl(path = "") {
  const baseUrl = "https://santiagodev.netlify.app"
  return `${baseUrl}${path}`
}

// Generate structured data for the portfolio
export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Santiago Maximiliano Vallejos",
    url: "https://santiagodev.netlify.app/",
    sameAs: ["https://github.com/santvallejos", "https://www.linkedin.com/in/santiago-vallejos-97a933236/", "https://santiagodev.netlify.app/"],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "IVY Knowledge Service Pvt Ltd",
    },
    image: "https://santiagodev.netlify.app/images/profile.jpg",
    description: "Full Stack Developer specializing in React, Next.js, and Node.js",
    knowsAbout: ["JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL"],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Nacional del Nordeste",
      sameAs: "https://www.unne.edu.ar/",
    },
  }
}

// Generate Open Graph metadata
export function generateOpenGraphData({
  title = "Windows 10 UI Clone - Interactive Portfolio by Santiago Vallejos",
  description = "An interactive portfolio website designed as a Windows 10 desktop clone. Explore projects, skills, and professional information through a familiar Windows 10 interface.",
  url = "https://santiagodev.netlify.app/",
  image = "https://santiagodev.netlify.app/images/og-image.png",
}) {
  return {
    title,
    description,
    url,
    siteName: "Santiago Vallejos Portfolio",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: "Windows 10 UI Clone Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  }
}

// Generate Twitter Card metadata
export function generateTwitterCardData({
  title = "Windows 10 UI Clone - Interactive Portfolio by Santiago Vallejos",
  description = "An interactive portfolio website designed as a Windows 10 desktop clone. Explore projects, skills, and professional information through a familiar Windows 10 interface.",
  image = "https://santiagodev.netlify.app/images/og-image.png",
}) {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [image],
    creator: "@santvallejos",
  }
}
