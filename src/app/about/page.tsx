"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import FooterBase from '@/components/sections/footer/FooterBase';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Code, Globe, Shield } from "lucide-react";

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

  <div id="about-overview" data-section="about-overview">
      <AboutMetric
      useInvertedBackground={false}
      title="Professional Journey & Overview"
      metrics={[
        {
          icon: Shield,
          label: "Cybersecurity interests",          value: "High"
        },
        {
          icon: Code,
          label: "Web development background",          value: "Solid"
        },
        {
          icon: Globe,
          label: "Passion for aviation",          value: "Deep"
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="core-expertise" data-section="core-expertise">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      carouselMode="buttons"
      metrics={[
        {
          id: "exp-1",          value: "Security",          title: "Monitoring",          items: [
            "Threat Detection",            "Incident Response",            "Threat Hunting"],
        },
        {
          id: "exp-2",          value: "Web",          title: "Development",          items: [
            "Front-End",            "Secure Application Design",            "Technical Research"],
        },
        {
          id: "exp-3",          value: "Aviation",          title: "Knowledge",          items: [
            "Pilot Training",            "Flight Operations",            "Aerospace Technology"],
        },
      ]}
      title="My Core Expertise"
      description="Dedicated to mastering security, development, and aviation principles to deliver comprehensive and robust solutions."
      tag="Expertise"
    />
  </div>

  <div id="achievements-certs" data-section="achievements-certs">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      carouselMode="buttons"
      testimonials={[
        {
          id: "achieve-1",          name: "Certified Blue Team Analyst",          handle: "Cybersecurity",          testimonial: "Successfully completed advanced Blue Team training and certification, specializing in threat detection and incident response.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/standard-quality-control-concept-m_23-2150041839.jpg",          imageAlt: "Cybersecurity certificate"},
        {
          id: "achieve-2",          name: "Award-Winning Web Project",          handle: "Web Development",          testimonial: "Led the development of a highly acclaimed responsive portfolio website, recognized for its innovative design and user experience.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/professional-writes-ai-code-laptop_482257-91012.jpg",          imageAlt: "Web development project"},
        {
          id: "achieve-3",          name: "Private Pilot License",          handle: "Aviation",          testimonial: "Achieved Private Pilot License (PPL) after rigorous training, demonstrating proficiency in flight operations and airmanship.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-suit_1321-1166.jpg",          imageAlt: "Pilot in cockpit"},
        {
          id: "achieve-4",          name: "Advanced Threat Hunter",          handle: "Cybersecurity",          testimonial: "Developed and implemented advanced threat hunting playbooks, significantly reducing mean time to detect (MTTD) for critical incidents.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/software-developer-data-center-using-artificial-intelligence_482257-106967.jpg",          imageAlt: "Person at desk working on cybersecurity project"},
        {
          id: "achieve-5",          name: "Security Consulting Lead",          handle: "Cybersecurity",          testimonial: "Provided expert security consulting for multiple organizations, enhancing their overall security posture and compliance.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/army-officer-examining-real-time-satellite-data-big-screen-military-base_482257-89895.jpg",          imageAlt: "Network infrastructure"},
        {
          id: "achieve-6",          name: "Full-Stack Project Developer",          handle: "Web Development",          testimonial: "Successfully delivered several end-to-end web projects, encompassing both front-end and back-end development with a focus on security.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/mystery-box-with-gifts-concept_23-2150063178.jpg",          imageAlt: "Laptop displaying a responsive website"},
      ]}
      showRating={true}
      title="Achievements & Certifications"
      description="Documenting my journey of professional growth and validated skills across all my fields of expertise."
      tag="Milestones"
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
              label: "Discord",              href: "https://discord.gg/trhxfVnyX4"},
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
