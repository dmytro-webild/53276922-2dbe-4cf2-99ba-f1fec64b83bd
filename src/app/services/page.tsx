"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBase from '@/components/sections/footer/FooterBase';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import { Code, Lightbulb, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="subtle-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Services",
          id: "/services",
        },
        {
          name: "Portfolio",
          id: "/portfolio",
        },
        {
          name: "Blog",
          id: "/blog",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="m_m0rgan"
      button={{
        text: "Contact Me",
        href: "/contact",
      }}
    />
  </div>

  <div id="service-offerings" data-section="service-offerings">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      carouselMode="buttons"
      plans={[
        {
          id: "cyber-sec",
          badge: "Security",
          badgeIcon: Shield,
          price: "Custom",
          name: "Cybersecurity Consulting",
          buttons: [
            {
              text: "Inquire Now",
              href: "/contact",
            },
          ],
          features: [
            "Security Monitoring & Analysis",
            "Threat Intelligence & Hunting",
            "Vulnerability Assessment",
            "Incident Response Planning",
            "Blue Team Operations",
          ],
        },
        {
          id: "web-dev",
          badge: "Development",
          badgeIcon: Code,
          price: "Custom",
          name: "Web Development & Design",
          buttons: [
            {
              text: "Start Project",
              href: "/contact",
            },
          ],
          features: [
            "Portfolio & Business Websites",
            "Landing Page Optimization",
            "Responsive UI/UX Design",
            "Front-End Development",
            "Secure Application Design",
          ],
        },
        {
          id: "tech-consult",
          badge: "Strategy",
          badgeIcon: Lightbulb,
          price: "Custom",
          name: "Technical Consulting",
          buttons: [
            {
              text: "Get Guidance",
              href: "/contact",
            },
          ],
          features: [
            "Technology Guidance & Strategy",
            "Security Best Practices",
            "Website Performance Optimization",
            "Code Review & Audit",
          ],
        },
      ]}
      title="Professional Services"
      description="Offering specialized expertise across cybersecurity and web development to secure and build your digital presence."
      tag="Services"
    />
  </div>

  <div id="technology-guidance" data-section="technology-guidance">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      carouselMode="buttons"
      metrics={[
        {
          id: "guide-1",
          value: "App",
          title: "Security Design",
          items: [
            "Architecture Review",
            "Threat Modeling",
            "Secure Coding Standards",
          ],
        },
        {
          id: "guide-2",
          value: "Web",
          title: "Optimization",
          items: [
            "Performance Tuning",
            "SEO Best Practices",
            "Accessibility Compliance",
          ],
        },
        {
          id: "guide-3",
          value: "Dev",
          title: "Best Practices",
          items: [
            "Code Quality & Maintainability",
            "Version Control",
            "CI/CD Integration",
          ],
        },
      ]}
      title="Technology Guidance & Best Practices"
      description="Providing insightful advice on secure application design, web optimization, and adopting industry-leading development best practices."
      tag="Guidance"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "About",
              href: "/about",
            },
            {
              label: "Services",
              href: "/services",
            },
            {
              label: "Portfolio",
              href: "/portfolio",
            },
            {
              label: "Blog",
              href: "/blog",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Email",
              href: "mailto:omarsw@proton.me",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/m___m0rgan",
            },
            {
              label: "Discord",
              href: "https://discord.gg/trhxfVnyX4",
            },
            {
              label: "Telegram",
              href: "https://t.me/m_m0rgan",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="m_m0rgan"
      copyrightText="© 2024 m_m0rgan. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
