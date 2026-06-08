"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import { Code, Shield } from "lucide-react";

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

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "downward-rays-animated-grid",
      }}
      title="m_m0rgan"
      description="Cybersecurity Blue Team Specialist | Web Developer | Aviation Enthusiast. Passionate about cybersecurity, web technologies, and aviation. Building secure digital experiences, developing modern web solutions, and continuously exploring the world of technology and flight."
      kpis={[
        {
          value: "10+",
          label: "Years in Tech",
        },
        {
          value: "50+",
          label: "Projects Completed",
        },
        {
          value: "Top 1%",
          label: "Certifications",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "View Portfolio",
          href: "/portfolio",
        },
        {
          text: "Explore Services",
          href: "/services",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/global-network-illustration_53876-16141.jpg"
      imageAlt="Cybersecurity dashboard displaying network security and data analysis"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/man-portrait-with-blue-lights-visual-effects_23-2149419462.jpg",
          alt: "Man portrait with blue lights visual effects",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-woman-with-clear-bubble_23-2151102635.jpg",
          alt: "Portrait of woman with clear bubble",
        },
        {
          src: "http://img.b2bpic.net/free-photo/bearded-young-man-is-posing-photographer-unusual-light-wearing-sunglasses_613910-13096.jpg",
          alt: "Bearded young man is posing for photographer under unusual light, wearing sunglasses.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiley-man-home-using-headphones_23-2148793511.jpg",
          alt: "Smiley man at home using headphones",
        },
        {
          src: "http://img.b2bpic.net/free-photo/3d-rendering-man-portrait_23-2150964588.jpg",
          alt: "3d rendering of man portrait",
        },
      ]}
      avatarText="Trusted by leading tech professionals"
      marqueeItems={[
        {
          type: "text",
          text: "Cybersecurity",
        },
        {
          type: "text-icon",
          text: "Web Dev",
          icon: Code,
        },
        {
          type: "text",
          text: "Aviation",
        },
        {
          type: "text-icon",
          text: "Threat Intel",
          icon: Shield,
        },
        {
          type: "text",
          text: "UI/UX Design",
        },
      ]}
      marqueeSpeed={30}
      showMarqueeCard={true}
    />
  </div>

  <div id="skills-preview" data-section="skills-preview">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      negativeCard={{
        items: [
          "Threat Detection",
          "Incident Response",
          "Security Monitoring",
          "Vulnerability Assessment",
        ],
      }}
      positiveCard={{
        items: [
          "UI/UX Design",
          "Front-End Development",
          "Secure Application Design",
          "Responsive Design",
        ],
      }}
      title="Core Expertise & Skills"
      description="Proficient in diverse technical domains, ensuring robust digital security and innovative web solutions."
      tag="Skills"
    />
  </div>

  <div id="featured-projects" data-section="featured-projects">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "prod-1",
          name: "Secure Cloud Network",
          price: "Cybersecurity",
          imageSrc: "http://img.b2bpic.net/free-photo/stakeholders-president-company-gather-via-video-link_482257-82326.jpg",
          imageAlt: "Cybersecurity project dashboard",
        },
        {
          id: "prod-2",
          name: "Modern Portfolio Site",
          price: "Web Development",
          imageSrc: "http://img.b2bpic.net/free-photo/extreme-close-up-shot-lines-code-displayed-computer-monitors_482257-94050.jpg",
          imageAlt: "Responsive web design",
        },
        {
          id: "prod-3",
          name: "Flight Simulator UI",
          price: "Aviation",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-window-inside-airplane-time-flight_181624-4235.jpg",
          imageAlt: "Aircraft cockpit view",
        },
        {
          id: "prod-4",
          name: "Enterprise Security System",
          price: "Cybersecurity",
          imageSrc: "http://img.b2bpic.net/free-photo/padlock-computer-circuit-board_93675-128377.jpg",
          imageAlt: "Secure network infrastructure",
        },
        {
          id: "prod-5",
          name: "SaaS Analytics Platform",
          price: "Web Development",
          imageSrc: "http://img.b2bpic.net/free-photo/online-shopping-concept_23-2151896857.jpg",
          imageAlt: "SaaS application UI",
        },
        {
          id: "prod-6",
          name: "Drone Command System",
          price: "Aviation",
          imageSrc: "http://img.b2bpic.net/free-photo/land-phuket-coast-beach-view_1203-5555.jpg",
          imageAlt: "Drone flying over city",
        },
      ]}
      title="Featured Projects"
      description="Showcasing a selection of impactful work across cybersecurity, web development, and aviation simulations."
      tag="Portfolio"
    />
  </div>

  <div id="latest-blog-posts" data-section="latest-blog-posts">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      carouselMode="buttons"
      title="Latest Insights"
      description="Stay updated with my thoughts on cybersecurity, programming, and aviation."
      tag="Blog"
      blogs={[
        {
          id: "blog-1",
          category: "Cybersecurity",
          title: "Blue Teaming: Proactive Defense Strategies",
          excerpt: "Exploring advanced techniques and methodologies for robust blue team operations.",
          imageSrc: "http://img.b2bpic.net/free-vector/padlock-lock-security-concept-abstract-wireframe-low-poly-designs-vector-illustration_587448-789.jpg",
          imageAlt: "Digital lock icon with blue shield",
          authorName: "m_m0rgan",
          authorAvatar: "http://img.b2bpic.net/free-photo/close-up-cute-guy-carnival_23-2148311247.jpg",
          date: "2024-07-20",
        },
        {
          id: "blog-2",
          category: "Web Development",
          title: "Building Secure Web Applications with Next.js",
          excerpt: "A deep dive into best practices for developing secure and scalable web solutions.",
          imageSrc: "http://img.b2bpic.net/free-photo/technology-internet-big-data-background_1387-1012.jpg",
          imageAlt: "Abstract code snippets",
          authorName: "m_m0rgan",
          authorAvatar: "http://img.b2bpic.net/free-photo/urban-transport-concept-with-planes-top-view_23-2148996417.jpg",
          date: "2024-07-15",
        },
        {
          id: "blog-3",
          category: "Aviation",
          title: "The Future of Flight: AI in Aviation",
          excerpt: "How artificial intelligence is transforming pilot training and aircraft systems.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-world-tourism-day-concept-with-copy-space_23-2148608881.jpg",
          imageAlt: "Modern aircraft flying through digital network",
          authorName: "m_m0rgan",
          authorAvatar: "http://img.b2bpic.net/free-vector/linear-flat-people-faces-professions-illustration_1416-526.jpg",
          date: "2024-07-10",
        },
      ]}
    />
  </div>

  <div id="contact-cta" data-section="contact-cta">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact Me"
      title="Ready to Collaborate?"
      description="Let's build secure and innovative solutions together. Reach out for projects, consultations, or just a chat!"
      buttons={[
        {
          text: "Get in Touch",
          href: "/contact",
        },
      ]}
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
