import {
    Code2,
    Smartphone,
    TrendingUp,
    Glasses,
    Box,
    Palette,
  } from "lucide-react";
  
  const services = [
    {
      id: 1,
      slug: "web-development",
      title: "Web Development",
      shortTitle: "Web",
      description:
        "High-performance websites and web applications designed around your business goals.",
      icon: Code2,
      accent: "Digital Experiences",
      features: [
        "Corporate Websites",
        "Web Applications",
        "E-Commerce Solutions",
        "Custom Web Platforms",
      ],
    },
  
    {
      id: 2,
      slug: "app-development",
      title: "App Development",
      shortTitle: "Apps",
      description:
        "Modern mobile applications that connect your business with customers anywhere.",
      icon: Smartphone,
      accent: "Mobile Innovation",
      features: [
        "Android Applications",
        "iOS Applications",
        "Cross-Platform Apps",
        "Custom Mobile Solutions",
      ],
    },
  
    {
      id: 3,
      slug: "digital-marketing",
      title: "Digital Marketing",
      shortTitle: "Marketing",
      description:
        "Data-driven digital strategies designed to improve visibility, engagement and business growth.",
      icon: TrendingUp,
      accent: "Business Growth",
      features: [
        "SEO",
        "Social Media",
        "Performance Marketing",
        "Analytics & Optimization",
      ],
    },
  
    {
      id: 4,
      slug: "ar-vr",
      title: "AR / VR",
      shortTitle: "AR / VR",
      description:
        "Immersive digital experiences that bring products, environments and ideas to life.",
      icon: Glasses,
      accent: "Immersive Technology",
      features: [
        "Augmented Reality",
        "Virtual Reality",
        "Interactive Experiences",
        "3D Product Experiences",
      ],
    },
  
    {
      id: 5,
      slug: "3d-modeling",
      title: "3D Modeling",
      shortTitle: "3D",
      description:
        "Detailed 3D assets and interactive visual experiences for digital products and brands.",
      icon: Box,
      accent: "3D Experiences",
      features: [
        "3D Product Models",
        "3D Visualization",
        "Interactive Models",
        "Digital Assets",
      ],
    },
  
    {
      id: 6,
      slug: "ui-ux-design",
      title: "UI/UX Design",
      shortTitle: "UI/UX",
      description:
        "Beautiful and intuitive interfaces designed around people, products and business objectives.",
      icon: Palette,
      accent: "Design Excellence",
      features: [
        "User Experience",
        "Interface Design",
        "Design Systems",
        "Prototyping",
      ],
    },
  ];
  
  export default services;