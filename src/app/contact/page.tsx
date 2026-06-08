"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';

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
          name: "Home",          id: "/"},
        {
          name: "About",          id: "/about"},
        {
          name: "Services",          id: "/services"},
        {
          name: "Portfolio",          id: "/portfolio"},
        {
          name: "Blog",          id: "/blog"},
        {
          name: "Contact",          id: "/contact"},
      ]}
      brandName="m_m0rgan"
      button={{
        text: "Contact Me",        href: "/contact"}}
    />
  </div>

  <div id="contact-form" data-section="contact-form">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient"
      }}
      tag="Contact Form"
      title="Get in Touch"
      description="I'm always open to new opportunities, collaborations, and discussions. Fill out the form below, and I'll get back to you as soon as possible."
      buttons={[
        {
          text: "Send Message"},
      ]}
    />
  </div>

  <div id="social-links" data-section="social-links">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Instagram",        "Discord",        "Telegram",        "LinkedIn",        "GitHub",        "X (Twitter)",        "Stack Overflow"]}
      title="Connect with Me"
      description="Find me on various platforms and join my community to stay updated on my latest work and insights."
      tag="Social"
      speed={30}
      showCard={true}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Quick Links",          items: [
            {
              label: "Home",              href: "/"},
            {
              label: "About",              href: "/about"},
            {
              label: "Services",              href: "/services"},
            {
              label: "Portfolio",              href: "/portfolio"},
            {
              label: "Blog",              href: "/blog"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Email",              href: "mailto:omarsw@proton.me"},
            {
              label: "Instagram",              href: "https://instagram.com/m___m0rgan"},
            {
              label: "Discord",              href: "https://discord.com/users/m_m0rgan"},
            {
              label: "Telegram",              href: "https://t.me/m_m0rgan"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
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