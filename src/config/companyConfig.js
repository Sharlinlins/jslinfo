export const COMPANY_CONFIG = {
  name: "JSL Infotech",
  tagline: "All IT Solutions Under One Roof",
  logoText: "JSL Infotech",
  primaryColor: "#667eea",
  secondaryColor: "#764ba2",
  contactEmail: "jslinfotechs@gmail.com",
  contactPhone: "+91 88077 71377",
  address: "North Street, Marthandam, Kanyakumari District, Tamil Nadu - 629165",
  social: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
    github: "#"
  },
  heroTitle: "Transform Your Business with",
  heroHighlight: "Cutting-Edge IT Solutions",
  heroSubtitle: "Empowering businesses with innovative technology, seamless integration, and unparalleled expertise — all under one roof.",
  
  services: [
    { 
      id: "web-development",
      name: "Web Application Development", 
      icon: "🌐", 
      shortDesc: "Modern, scalable web apps with cutting-edge technologies.",
      description: "We build next-generation web applications that drive business growth. Using React, Vue.js, Node.js, and cloud-native architectures, we create scalable, high-performance solutions that deliver exceptional user experiences.",
      features: [
        "Custom Web Applications",
        "Progressive Web Apps (PWA)",
        "Enterprise E-commerce Solutions",
        "API-First Development",
        "Cloud-Native Architecture"
      ],
      technologies: ["React", "Next.js", "Node.js", "GraphQL", "AWS", "Docker"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
      benefits: [
        "Faster Time-to-Market",
        "Scalable Architecture",
        "Reduced Development Costs",
        "Enhanced User Experience"
      ]
    },
    { 
      id: "mobile-development",
      name: "Mobile Application Development", 
      icon: "📱", 
      shortDesc: "Native & cross-platform apps that users love.",
      description: "Create stunning mobile experiences with our expert app development services. We deliver high-performance iOS, Android, and cross-platform applications that engage users and drive business results.",
      features: [
        "Native iOS & Android Apps",
        "Cross-Platform Solutions",
        "UI/UX Design Excellence",
        "App Store Optimization",
        "Offline Capabilities"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
      benefits: [
        "Seamless User Experience",
        "Faster Development",
        "Cost-Effective",
        "Cross-Platform Compatibility"
      ]
    },
    { 
      id: "telecom-systems",
      name: "Telecom Systems", 
      icon: "📡", 
      shortDesc: "Enterprise-grade communication solutions.",
      description: "Revolutionize your business communications with our advanced telecom solutions. From VoIP to unified communications, we ensure seamless connectivity and collaboration.",
      features: [
        "VoIP Phone Systems",
        "Unified Communications",
        "Video Conferencing",
        "Call Center Solutions",
        "Cloud PBX"
      ],
      technologies: ["3CX", "Cisco", "Asterisk", "Zoom", "Microsoft Teams"],
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=500&fit=crop",
      benefits: [
        "Cost Savings Up to 60%",
        "Enhanced Collaboration",
        "Remote Work Ready",
        "Scalable Solutions"
      ]
    },
    { 
      id: "security-systems",
      name: "Security Systems", 
      icon: "🔒", 
      shortDesc: "Comprehensive cyber security protection.",
      description: "Protect your digital assets with our enterprise-grade security solutions. We provide end-to-end protection against evolving cyber threats.",
      features: [
        "Network Security",
        "Endpoint Protection",
        "Threat Detection",
        "Security Audits",
        "Penetration Testing"
      ],
      technologies: ["Palo Alto", "Fortinet", "CrowdStrike", "SIEM", "EDR"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
      benefits: [
        "24/7 Threat Protection",
        "Data Breach Prevention",
        "Regulatory Compliance",
        "Peace of Mind"
      ]
    },
    { 
      id: "networking",
      name: "Networking", 
      icon: "🌍", 
      shortDesc: "High-performance network infrastructure.",
      description: "Build a robust network foundation with our expert networking solutions. We design and implement reliable, secure, and scalable networks.",
      features: [
        "Network Design & Architecture",
        "Structured Cabling",
        "Wireless Networks",
        "SD-WAN Solutions",
        "Network Monitoring"
      ],
      technologies: ["Cisco", "Juniper", "Aruba", "Ubiquiti", "SD-WAN"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
      benefits: [
        "99.99% Uptime",
        "Enhanced Performance",
        "Scalable Infrastructure",
        "Centralized Management"
      ]
    },
    { 
      id: "cctv-installation",
      name: "CCTV Installation", 
      icon: "🎥", 
      shortDesc: "Advanced surveillance & monitoring systems.",
      description: "Secure your premises with our professional CCTV solutions. We provide cutting-edge surveillance technology with AI-powered analytics.",
      features: [
        "4K HD Cameras",
        "IP Camera Systems",
        "Night Vision",
        "Motion Detection",
        "Remote Monitoring"
      ],
      technologies: ["Hikvision", "Dahua", "Axis", "AI Analytics", "Cloud Storage"],
      image: "https://images.unsplash.com/photo-1581018395945-9cfe66e7a173?w=800&h=500&fit=crop",
      benefits: [
        "24/7 Surveillance",
        "Crime Deterrence",
        "Remote Access",
        "AI-Powered Alerts"
      ]
    },
    { 
      id: "smart-panels",
      name: "Smart Panels", 
      icon: "📊", 
      shortDesc: "Interactive displays for education & business.",
      description: "Transform collaboration with our interactive smart panels. Perfect for classrooms, boardrooms, and modern workplaces.",
      features: [
        "Interactive Touch Displays",
        "Wireless Screen Sharing",
        "Digital Whiteboarding",
        "Collaboration Tools",
        "Video Conferencing"
      ],
      technologies: ["SMART Board", "Promethean", "Google Jamboard", "Microsoft Surface Hub"],
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop",
      benefits: [
        "Enhanced Engagement",
        "Seamless Collaboration",
        "Remote Participation",
        "Modern Learning"
      ]
    },
    { 
      id: "led-walls",
      name: "LED Walls", 
      icon: "🖥️", 
      shortDesc: "Stunning visual display solutions.",
      description: "Create unforgettable visual experiences with our premium LED wall solutions. Perfect for events, control rooms, and digital signage.",
      features: [
        "Indoor & Outdoor LED Walls",
        "Fine Pixel Pitch",
        "Custom Shapes & Sizes",
        "Control Room Solutions",
        "Digital Signage"
      ],
      technologies: ["Samsung", "LG", "Absen", "Daktronics", "NovaStar"],
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
      benefits: [
        "Stunning Visuals",
        "High Brightness",
        "Energy Efficient",
        "Durable Construction"
      ]
    },
    { 
      id: "software-installation",
      name: "Software Installation", 
      icon: "⚙️", 
      shortDesc: "Expert software deployment & configuration.",
      description: "Ensure smooth software implementation with our professional installation services. We handle everything from licensing to configuration.",
      features: [
        "Enterprise Software Deployment",
        "License Management",
        "Configuration Services",
        "Migration Support",
        "Patch Management"
      ],
      technologies: ["Microsoft 365", "Adobe", "Salesforce", "SAP", "Oracle"],
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=500&fit=crop",
      benefits: [
        "Proper Licensing",
        "Optimal Configuration",
        "Reduced Downtime",
        "Expert Support"
      ]
    },
    { 
      id: "computer-sales",
      name: "Computer Sales & Service", 
      icon: "💻", 
      shortDesc: "Quality hardware with comprehensive support.",
      description: "Get the best hardware solutions with our computer sales and service. We offer premium products with expert support and maintenance.",
      features: [
        "Desktop & Laptop Sales",
        "Hardware Customization",
        "Annual Maintenance Contracts",
        "On-site Support",
        "Hardware Repair"
      ],
      technologies: ["Dell", "HP", "Lenovo", "Apple", "Custom Builds"],
      image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800&h=500&fit=crop",
      benefits: [
        "Quality Hardware",
        "Competitive Pricing",
        "Quick Support",
        "Business Continuity"
      ]
    }
  ],
  aboutText: "We're not just another IT company — we're your strategic technology partner. With a passion for innovation and a commitment to excellence, we help businesses harness the power of technology to achieve their goals. Our team of expert engineers, designers, and consultants work collaboratively to deliver solutions that drive real business value.",
  whyChooseUs: [
    "🚀 15+ Years of Innovation Excellence",
    "💼 500+ Successful Projects Delivered",
    "🌍 Clients Across 25+ Countries",
    "⚡ 24/7 Expert Technical Support",
    "🎯 98% Client Satisfaction Rate",
    "🏆 ISO 9001:2024 Certified",
    "🔒 100% Data Security Guarantee",
    "💡 Innovation-First Approach"
  ],
  stats: [
    { 
      value: "15+", 
      label: "Years Experience", 
      icon: "🏆",
      description: "Industry expertise since 2009"
    },
    { 
      value: "500+", 
      label: "Projects Delivered", 
      icon: "💼",
      description: "Successful implementations"
    },
    { 
      value: "98%", 
      label: "Client Retention", 
      icon: "❤️",
      description: "Long-term partnerships"
    },
    { 
      value: "24/7", 
      label: "Support Available", 
      icon: "⚡",
      description: "Round-the-clock assistance"
    }
  ],
  additionalStats: [
    { value: "25+", label: "Countries Served", icon: "🌍" },
    { value: "100%", label: "Data Security", icon: "🔒" },
    { value: "50+", label: "Expert Team", icon: "👥" },
    { value: "10K+", label: "Happy Clients", icon: "😊" }
  ]
};