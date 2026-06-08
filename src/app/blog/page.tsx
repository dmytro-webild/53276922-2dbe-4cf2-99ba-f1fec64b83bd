"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

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

  <div id="all-blog-posts" data-section="all-blog-posts">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      carouselMode="buttons"
      title="Blog & Insights"
      description="Exploring topics in cybersecurity, programming, technology, and aviation."
      tag="Latest Posts"
      blogs={[
        {
          id: "blog-4",          category: "Cybersecurity",          title: "Analyzing Ransomware Attacks: Case Study",          excerpt: "A detailed case study on recent ransomware attack vectors and mitigation strategies.",          imageSrc: "http://img.b2bpic.net/free-photo/cyber-security-concept-digital-art_23-2151637780.jpg",          imageAlt: "Digital lock icon with blue shield",          authorName: "m_m0rgan",          authorAvatar: "http://img.b2bpic.net/free-vector/blue-travel-concept-background-with-elements_23-2147736305.jpg",          date: "2024-06-25"},
        {
          id: "blog-5",          category: "Web Development",          title: "Optimizing React Performance for Large Applications",          excerpt: "Techniques and tools to boost the performance of complex React-based web applications.",          imageSrc: "http://img.b2bpic.net/free-photo/program-development-with-data-terminal-window-displaying-it-coding-language-computer-database-cloud-computing-programming-new-user-interface-with-hmtl-script-close-up_482257-60750.jpg",          imageAlt: "Abstract code snippets",          authorName: "m_m0rgan",          authorAvatar: "http://img.b2bpic.net/free-photo/smiling-hacker_23-2147985408.jpg",          date: "2024-06-18"},
        {
          id: "blog-6",          category: "Aviation",          title: "Understanding Airspace Regulations for Drone Pilots",          excerpt: "A comprehensive guide to navigating airspace regulations for safe and compliant drone operations.",          imageSrc: "http://img.b2bpic.net/free-photo/laptop-airplane-miniature-blue-background-flat-lay-copy-space_169016-28236.jpg",          imageAlt: "Modern aircraft flying through digital network",          authorName: "m_m0rgan",          authorAvatar: "http://img.b2bpic.net/free-photo/handsome-middle-aged-man-portrait-neon-lights_23-2149051805.jpg",          date: "2024-06-10"},
        {
          id: "blog-7",          category: "Cybersecurity",          title: "The Role of AI in Next-Gen Firewalls",          excerpt: "Exploring how artificial intelligence is revolutionizing network security with advanced firewall technologies.",          imageSrc: "http://img.b2bpic.net/free-vector/gradient-ssl-illustration_23-2149250979.jpg",          imageAlt: "Digital lock icon with blue shield",          authorName: "m_m0rgan",          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-boy-posing-with-neon-light_23-2149596328.jpg",          date: "2024-05-30"},
        {
          id: "blog-8",          category: "Web Development",          title: "Serverless Functions: A Game Changer for Web Apps",          excerpt: "How serverless architecture simplifies deployment and scales web applications efficiently.",          imageSrc: "http://img.b2bpic.net/free-photo/falling-binary-code_23-2152020924.jpg",          imageAlt: "Abstract code snippets",          authorName: "m_m0rgan",          authorAvatar: "http://img.b2bpic.net/free-vector/modern-set-male-jobs-avatars_23-2147675545.jpg",          date: "2024-05-22"},
        {
          id: "blog-9",          category: "Aviation",          title: "Beyond Visual Line of Sight (BVLOS) Drone Operations",          excerpt: "Delving into the complexities and future of BVLOS operations for commercial drones.",          imageSrc: "http://img.b2bpic.net/free-photo/african-american-copilot-holding-lever-takeoff-with-airplane-flying-aircraft-with-dashboard-power-buttons-control-panel-command-radar-navigation-windscreen-compass-close-up_482257-50406.jpg",          imageAlt: "Modern aircraft flying through digital network",          authorName: "m_m0rgan",          authorAvatar: "http://img.b2bpic.net/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100250.jpg",          date: "2024-05-15"},
      ]}
    />
  </div>

  <div id="blog-faqs" data-section="blog-faqs">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",          title: "How often do you publish new articles?",          content: "I aim to publish new articles bi-weekly, covering diverse topics in cybersecurity, web development, and aviation."},
        {
          id: "faq-2",          title: "Can I suggest a topic for a blog post?",          content: "Absolutely! I welcome suggestions. Feel free to reach out via the contact form or social media with your ideas."},
        {
          id: "faq-3",          title: "Do you accept guest posts?",          content: "I occasionally feature guest posts from experts in my fields. If you have a compelling article idea, please contact me."},
        {
          id: "faq-4",          title: "Is there a comment policy?",          content: "Yes, comments are moderated to ensure a respectful and constructive discussion environment. Please review the policy for more details."},
      ]}
      title="Frequently Asked Questions"
      description="Common questions about my blog, content, and how to engage with the community."
      tag="FAQs"
      faqsAnimation="slide-up"
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