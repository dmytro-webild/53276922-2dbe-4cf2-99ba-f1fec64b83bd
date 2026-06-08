"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

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

  <div id="project-showcase" data-section="project-showcase">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      carouselMode="buttons"
      products={[
        {
          id: "port-1",
          name: "Threat Intel Platform",
          price: "Cybersecurity",
          imageSrc: "http://img.b2bpic.net/free-photo/isolated-copy-space-running-laptop-high-tech-agency-office_482257-121529.jpg",
          imageAlt: "Cybersecurity dashboard",
        },
        {
          id: "port-2",
          name: "E-commerce Website",
          price: "Web Development",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-it-professional-using-tablet-building-ai-algorithms_482257-100475.jpg",
          imageAlt: "Responsive e-commerce site",
        },
        {
          id: "port-3",
          name: "Aerospace Analytics",
          price: "Aviation",
          imageSrc: "http://img.b2bpic.net/free-photo/control-table-spacecraft-from-inside_23-2151828172.jpg",
          imageAlt: "Aircraft cockpit analytics",
        },
        {
          id: "port-4",
          name: "Penetration Testing Tools",
          price: "Cybersecurity",
          imageSrc: "http://img.b2bpic.net/free-photo/connecting-dots-background-network-communication-design_53876-160215.jpg",
          imageAlt: "Secure network tools",
        },
        {
          id: "port-5",
          name: "Custom CRM Solution",
          price: "Web Development",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-african-american-entrepreneur-analyzing-company-profit_482257-20207.jpg",
          imageAlt: "SaaS CRM interface",
        },
        {
          id: "port-6",
          name: "Air Traffic Control Sim",
          price: "Aviation",
          imageSrc: "http://img.b2bpic.net/free-photo/adult-person-interacting-with-futuristic-delivery-robot_23-2151210969.jpg",
          imageAlt: "Air traffic control simulation",
        },
      ]}
      title="My Portfolio"
      description="A curated selection of projects demonstrating technical skill and innovation across my diverse fields of expertise."
      tag="Projects"
    />
  </div>

  <div id="project-categories" data-section="project-categories">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Cybersecurity",
          "Web Development",
        ],
      }}
      positiveCard={{
        items: [
          "Aviation",
          "Personal Projects",
        ],
      }}
      title="Explore Project Categories"
      description="Filter projects by Cybersecurity, Web Development, Aviation, or Personal endeavors to find what interests you most."
      tag="Categories"
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
