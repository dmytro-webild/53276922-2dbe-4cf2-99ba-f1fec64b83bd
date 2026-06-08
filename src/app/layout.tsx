import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'm_m0rgan - Cybersecurity | Web Dev | Aviation',
  description: 'Personal portfolio of m_m0rgan, a Cybersecurity Blue Team Specialist, Web Developer, and Aviation Enthusiast. Showcasing expertise, projects, and insights.',
  keywords: ["cybersecurity, blue team, web development, aviation, pilot, portfolio, m_m0rgan, technology, programming, incident response, threat detection, UI/UX, flight training"],
  openGraph: {
    "title": "m_m0rgan - Professional Portfolio",
    "description": "Personal portfolio of m_m0rgan, a Cybersecurity Blue Team Specialist, Web Developer, and Aviation Enthusiast.",
    "url": "https://m-m0rgan.com",
    "siteName": "m_m0rgan Portfolio",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/global-network-illustration_53876-16141.jpg",
        "alt": "Cybersecurity dashboard"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "m_m0rgan - Professional Portfolio",
    "description": "Personal portfolio of m_m0rgan, a Cybersecurity Blue Team Specialist, Web Developer, and Aviation Enthusiast.",
    "images": [
      "http://img.b2bpic.net/free-photo/global-network-illustration_53876-16141.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunitoSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
