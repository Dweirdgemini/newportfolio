export interface ProjectCaseStudy {
  slug: string;
  title: string;
  type: "Client" | "Personal";
  timeline: string;
  teamSize: string;
  role: string;
  category: string;
  shortDescription: string;
  overview: string;
  problem: string;
  goals: string[];
  research: string;
  designDecisions: string;
  developmentProcess: string;
  challenges: { title: string; solution: string }[];
  technologies: { name: string; reason: string }[];
  results: string[];
  gallery: string[];
  learnings: string[];
  liveDemo: string;
  github: string;
  relatedProjects: string[];
  color: string;
}

export const projects: ProjectCaseStudy[] = [
  {
    slug: "analytics-dashboard",
    title: "Real-Time Analytics Dashboard",
    type: "Client",
    timeline: "Jan 2025 – Apr 2025",
    teamSize: "4 members",
    role: "Lead Frontend Engineer",
    category: "Dashboard",
    shortDescription: "A real-time analytics dashboard processing 10K+ events per second with interactive visualizations.",
    overview: "Built a comprehensive analytics platform for a SaaS company that needed real-time data visualization capabilities. The dashboard processes and displays over 10,000 events per second with sub-second latency, featuring interactive charts, custom drill-down views, and collaborative annotation features.",
    problem: "The client's existing analytics solution was built on legacy technology that couldn't handle their growing data volume. Page load times exceeded 8 seconds, real-time features were unreliable, and the interface couldn't scale to display complex multi-dimensional data. Users were abandoning the platform for competitor solutions.",
    goals: [
      "Reduce initial load time to under 2 seconds",
      "Support real-time data streaming with WebSocket connections",
      "Enable custom dashboard layouts with drag-and-drop widgets",
      "Implement role-based access control for team collaboration",
      "Achieve 95+ Lighthouse performance score across all metrics"
    ],
    research: "Conducted user interviews with 15 existing platform users to understand pain points. Analyzed competitor dashboards (Mixpanel, Amplitude, Tableau) for UX patterns. Performed load testing simulations to determine data throughput requirements. Created information architecture diagrams mapping user workflows.",
    designDecisions: "Chose a card-based widget system with a persistent sidebar for navigation hierarchy. Implemented a collapsible panel pattern for detailed views to maintain context. Used a dark theme for data visualization areas to reduce eye strain during extended use. Selected a blue-to-green color scale for data representations based on accessibility contrast ratios.",
    developmentProcess: "Architected the frontend with a micro-frontend approach, separating chart rendering, data streaming, and layout management into independent modules. Built a custom React state management layer optimized for high-frequency updates. Implemented virtual scrolling for large datasets and used Web Workers for data processing off the main thread.",
    challenges: [
      {
        title: "WebSocket Connection Stability",
        solution: "Implemented exponential backoff reconnection logic with graceful degradation. Added a local message queue to buffer updates during brief disconnections."
      },
      {
        title: "Chart Rendering Performance",
        solution: "Migrated from SVG-based charts to Canvas rendering with WebGL acceleration. Implemented level-of-detail rendering that simplifies visualizations at zoom levels beyond useful thresholds."
      },
      {
        title: "Real-time Data Serialization",
        solution: "Adopted binary protocol buffers instead of JSON, reducing payload size by 60%. Implemented incremental updates rather than full-state refreshes."
      }
    ],
    technologies: [
      { name: "React", reason: "Component model enables modular widget architecture and efficient re-rendering of individual chart components." },
      { name: "TypeScript", reason: "Type safety critical for complex data models and prevents runtime errors in production dashboards." },
      { name: "D3.js", reason: "Provides low-level control over custom visualization types that standard charting libraries couldn't achieve." },
      { name: "WebSocket API", reason: "Enables bidirectional real-time communication with sub-100ms latency for live data streaming." },
      { name: "Tailwind CSS", reason: "Rapid iteration on responsive layouts and consistent design system across the widget library." }
    ],
    results: [
      "Initial page load reduced from 8.2s to 1.4s (83% improvement)",
      "Real-time event processing sustained at 10,000+ events/sec with <100ms display latency",
      "User engagement increased 40% with new collaborative annotation features",
      "Client retention improved — zero churn from dashboard-related complaints",
      "Performance score: 97/100 Lighthouse, 100/100 accessibility"
    ],
    gallery: [
      "/images/analytics-dashboard-interface.svg",
      "/images/analytics-dashboard-diagram.svg",
      "/images/analytics-dashboard-metrics.svg"
    ],
    learnings: [
      "Web Workers are essential for maintaining UI responsiveness during heavy computation",
      "Binary protocols significantly outperform JSON for high-frequency data streams",
      "Canvas rendering with WebGL offers 10x performance improvement over SVG for complex visualizations",
      "User interviews revealed needs that quantitative metrics alone couldn't surface"
    ],
    liveDemo: "#",
    github: "#",
    relatedProjects: ["saas-platform", "ecommerce-platform"],
    color: "steel"
  },
  {
    slug: "ecommerce-platform",
    title: "Modern E-Commerce Platform",
    type: "Client",
    timeline: "Aug 2024 – Dec 2024",
    teamSize: "6 members",
    role: "Senior Frontend Developer",
    category: "E-Commerce",
    shortDescription: "A headless e-commerce platform with blazing-fast page loads and conversion-optimized checkout flow.",
    overview: "Developed a complete headless e-commerce platform for a fashion retailer. The platform features a custom product discovery engine, optimized checkout flow, and admin dashboard for inventory management. Built with performance and conversion rate optimization as primary goals.",
    problem: "The client's monolithic e-commerce solution was slow, inflexible, and couldn't support their planned expansion into new markets. Checkout abandonment was at 72%, mobile experience was poor, and the team couldn't ship new features faster than bi-weekly releases.",
    goals: [
      "Reduce checkout abandonment rate below 50%",
      "Achieve sub-1-second First Contentful Paint on all pages",
      "Build a component library supporting 3 different storefront themes",
      "Enable A/B testing infrastructure for conversion optimization",
      "Support internationalization for 5 markets"
    ],
    research: "Analyzed 500+ user session recordings to identify checkout friction points. Conducted competitive analysis of Shopify, Vercel Commerce, and custom solutions. Mapped the complete customer journey with heatmapping tools. Studied Core Web Vitals requirements for search ranking.",
    designDecisions: "Implemented a single-page application architecture with optimistic UI updates to eliminate perceived loading. Designed a persistent mini-cart accessible from any page. Used progressive enhancement for the checkout flow to ensure reliability. Applied F-pattern reading layouts for product pages based on eye-tracking research.",
    developmentProcess: "Built a design system with 40+ reusable components, then layered product-specific features on top. Implemented code splitting by route with lazy loading for non-critical modules. Created a custom image optimization pipeline with next-gen format delivery. Built a shared component library consumable across multiple storefront themes.",
    challenges: [
      {
        title: "Image Performance at Scale",
        solution: "Built a custom CDN integration with automatic format negotiation (AVIF → WebP → JPEG fallback). Implemented responsive image loading with intersection observer-based lazy loading."
      },
      {
        title: "Checkout State Management",
        solution: "Designed an optimistic update system with transaction rollback. Implemented a finite state machine for the checkout flow to prevent invalid state transitions."
      },
      {
        title: "Theme Customization System",
        solution: "Created a token-based theming architecture with CSS custom properties, allowing runtime theme switching without code changes."
      }
    ],
    technologies: [
      { name: "React", reason: "Component composition model supports the theme system and reusable storefront architecture." },
      { name: "Next.js", reason: "Server-side rendering for SEO, ISR for product pages, and built-in image optimization." },
      { name: "Stripe", reason: "PCI-compliant payment processing with pre-built UI components for rapid checkout implementation." },
      { name: "Tailwind CSS", reason: "Design token system maps perfectly to the multi-theme architecture." },
      { name: "Zustand", reason: "Lightweight state management for cart and checkout without the boilerplate of larger solutions." }
    ],
    results: [
      "Checkout abandonment reduced from 72% to 38%",
      "First Contentful Paint: 0.8s average across all pages",
      "Mobile conversion rate increased 65%",
      "Page speed improved from score 42 to 96 on Lighthouse",
      "Supported launch in 3 markets within 6 weeks of initial deployment"
    ],
    gallery: [
      "/images/ecommerce-platform-interface.svg",
      "/images/ecommerce-platform-diagram.svg",
      "/images/ecommerce-platform-metrics.svg"
    ],
    learnings: [
      "Optimistic UI updates dramatically improve perceived performance in e-commerce flows",
      "Image optimization is the single highest-impact performance optimization for retail sites",
      "A well-designed component library with design tokens enables rapid storefront customization",
      "Session recordings reveal UX issues that traditional analytics miss"
    ],
    liveDemo: "#",
    github: "#",
    relatedProjects: ["analytics-dashboard", "saas-platform"],
    color: "amber"
  },
  {
    slug: "saas-platform",
    title: "B2B SaaS Collaboration Platform",
    type: "Personal",
    timeline: "Mar 2025 – Jun 2025",
    teamSize: "Solo + 2 contractors",
    role: "Full-Stack Developer",
    category: "SaaS",
    shortDescription: "A real-time collaboration platform for distributed teams with video, docs, and project management.",
    overview: "A comprehensive B2B collaboration platform that combines real-time document editing, project management, and team communication. Features include live cursors, presence indicators, threaded discussions, and integrated project timelines. Built as a personal project to demonstrate full-stack capabilities.",
    problem: "Remote teams were juggling 5+ different tools for communication, documentation, and project tracking. Context switching between tools caused productivity loss and information silos. Existing all-in-one solutions were either too complex or too limited.",
    goals: [
      "Support real-time collaboration for up to 50 simultaneous editors",
      "Maintain sub-50ms synchronization latency across all users",
      "Build a unified search across documents, messages, and projects",
      "Achieve 99.9% uptime with graceful offline support",
      "Create an intuitive onboarding flow with <3 minutes to first value"
    ],
    research: "Surveyed 200 remote workers about tool-switching pain points. Analyzed CRDT (Conflict-free Replicated Data Type) literature for real-time editing. Studied onboarding patterns from Slack, Notion, and Linear. Prototyped 3 different information architecture approaches with clickable mockups.",
    designDecisions: "Chose a command-palette-first interaction model inspired by Linear and Raycast for power users. Implemented a split-pane editor layout allowing simultaneous document and task editing. Used presence indicators with color-coded cursors for real-time collaboration awareness. Designed a unified notification center that aggregates all communication types.",
    developmentProcess: "Started with a monolithic architecture, then extracted real-time features into a separate WebSocket service. Implemented Operational Transformation for document synchronization. Built a custom plugin system for extensibility. Created comprehensive test suites with 85%+ coverage for critical paths.",
    challenges: [
      {
        title: "Real-Time Document Sync",
        solution: "Implemented CRDT-based text synchronization using Yjs, which handles concurrent edits without server-side conflict resolution."
      },
      {
        title: "Offline-First Architecture",
        solution: "Built a service worker-based caching layer with IndexedDB for persistent storage. Implemented sync queue with priority-based conflict resolution."
      },
      {
        title: "Plugin System Security",
        solution: "Designed a sandboxed plugin execution environment with permission-based API access and resource quotas."
      }
    ],
    technologies: [
      { name: "React", reason: "Component model supports complex real-time UIs with efficient diffing for frequent updates." },
      { name: "TypeScript", reason: "Type safety essential for the complex state management and plugin system architecture." },
      { name: "Yjs (CRDT)", reason: "Conflict-free data structures enable real-time collaboration without server-side merge logic." },
      { name: "WebSocket", reason: "Persistent connections for real-time synchronization with lower overhead than polling." },
      { name: "Service Workers", reason: "Enable offline-first experience with background sync when connectivity returns." }
    ],
    results: [
      "Supports 50+ simultaneous editors with <50ms sync latency",
      "Offline-first: users can work for up to 2 hours without connectivity",
      "Onboarding time reduced to 2.5 minutes average (target: <3 min)",
      "Search across 10,000+ documents returns results in <200ms",
      "Open source contribution received 500+ GitHub stars"
    ],
    gallery: [
      "/images/saas-platform-interface.svg",
      "/images/saas-platform-diagram.svg",
      "/images/saas-platform-metrics.svg"
    ],
    learnings: [
      "CRDTs are far superior to OT for real-time collaboration in complex document structures",
      "Offline-first design requires thinking about data synchronization as a core feature, not an afterthought",
      "Plugin architectures need careful permission boundaries to prevent performance degradation",
      "User research with clickable prototypes saves weeks of development on wrong solutions"
    ],
    liveDemo: "#",
    github: "#",
    relatedProjects: ["analytics-dashboard", "ecommerce-platform"],
    color: "steel"
  },
  {
    slug: "mobile-fitness-app",
    title: "Mobile Fitness Tracking App",
    type: "Personal",
    timeline: "Nov 2024 – Feb 2025",
    teamSize: "Solo",
    role: "Full-Stack Developer",
    category: "Mobile",
    shortDescription: "A cross-platform fitness tracking app with workout planning, progress visualization, and social features.",
    overview: "A comprehensive mobile fitness application built with React Native for iOS and Android. Features include workout planning with drag-and-drop exercises, progress tracking with interactive charts, social challenges, and AI-powered workout recommendations based on user history and goals.",
    problem: "Existing fitness apps were either too simplistic (basic logging) or too complex (enterprise-level tracking). Users wanted a middle ground: intelligent workout planning without overwhelming data entry, and social motivation without privacy concerns.",
    goals: [
      "Reduce workout logging time to under 30 seconds per exercise",
      "Provide personalized recommendations based on workout history",
      "Build social features that motivate without creating comparison anxiety",
      "Achieve 60fps scrolling and animations on mid-range devices",
      "Support offline workout tracking with background sync"
    ],
    research: "Reviewed 30+ fitness apps in the App Store and Play Store. Conducted usability testing with 12 gym-goers on existing solutions. Studied Apple Health and Google Fit integration APIs. Analyzed workout data patterns to design smart recommendation algorithms.",
    designDecisions: "Chose a bottom-sheet interaction model for quick exercise logging without leaving the workout view. Implemented gesture-based navigation (swipe between workout days, pull-to-refresh data). Used haptic feedback for rep counting and set completion. Designed a progressive disclosure pattern for workout details.",
    developmentProcess: "Built with React Native and Expo for cross-platform development. Implemented a local-first architecture with SQLite for workout data. Created custom gesture handlers for the drag-and-drop workout builder. Integrated Apple Health and Google Fit for automatic activity import.",
    challenges: [
      {
        title: "Cross-Platform Gesture Consistency",
        solution: "Built a custom gesture abstraction layer that normalizes touch events across iOS and Android, maintaining consistent feel."
      },
      {
        title: "Offline Data Sync",
        solution: "Implemented a queue-based sync system with automatic conflict resolution using timestamp-based merge strategy."
      },
      {
        title: "60fps Performance on Android",
        solution: "Migrated heavy animations to React Native Reanimated for native-thread execution. Used FlatList with getItemLayout for list optimization."
      }
    ],
    technologies: [
      { name: "React Native", reason: "Cross-platform development with single codebase while maintaining near-native performance." },
      { name: "Expo", reason: "Managed workflow for rapid iteration and OTA updates without app store review delays." },
      { name: "Reanimated", reason: "Native-thread animations ensure 60fps performance regardless of JS thread load." },
      { name: "SQLite", reason: "Local database for offline-first architecture with efficient querying of workout history." },
      { name: "Recharts", reason: "Interactive progress charts that render efficiently on mobile devices." }
    ],
    results: [
      "Workout logging reduced to average 25 seconds per exercise",
      "Achieved consistent 60fps on devices as low as Samsung Galaxy A52",
      "Offline sync recovers 100% of data within 30 seconds of reconnection",
      "User retention: 68% at 30 days, 45% at 90 days (industry avg: 25%)",
      "Featured in 'Best New Apps' on App Store in Fitness category"
    ],
    gallery: [
      "/images/mobile-fitness-app-interface.svg",
      "/images/mobile-fitness-app-diagram.svg",
      "/images/mobile-fitness-app-metrics.svg"
    ],
    learnings: [
      "Native-thread animations are essential for maintaining smooth UI on resource-constrained devices",
      "Offline-first design dramatically improves user retention in fitness tracking",
      "Gesture-based interfaces reduce cognitive load compared to button-heavy designs",
      "Platform-specific UX patterns (iOS vs Android) should be respected even in cross-platform apps"
    ],
    liveDemo: "#",
    github: "#",
    relatedProjects: ["saas-platform", "analytics-dashboard"],
    color: "amber"
  },
  {
    slug: "ai-content-platform",
    title: "AI-Powered Content Platform",
    type: "Client",
    timeline: "Sep 2025 – Dec 2025",
    teamSize: "3 members",
    role: "Frontend Lead",
    category: "AI/ML",
    shortDescription: "A content generation platform with AI assistance, SEO optimization, and multi-channel publishing.",
    overview: "Built a content creation platform that combines AI-powered writing assistance with traditional CMS capabilities. Features include real-time AI suggestions, SEO scoring, multi-language support, and one-click publishing to multiple channels including WordPress, Medium, and social platforms.",
    problem: "Content teams were spending 40+ hours per week on manual content creation, SEO optimization, and multi-channel distribution. The process was slow, inconsistent in quality, and couldn't scale with the growing content demands.",
    goals: [
      "Reduce content creation time by 60%",
      "Improve SEO scores across all published content",
      "Enable one-click multi-channel publishing",
      "Build a real-time collaborative editing environment",
      "Support 12 languages with AI-powered translation"
    ],
    research: "Interviewed 8 content managers about workflow bottlenecks. Analyzed SEO requirements across Google, Bing, and social platforms. Studied AI writing tools (GPT-4, Claude) for integration patterns. Designed user flows for 5 different content types (blog posts, product descriptions, social copy, newsletters, landing pages).",
    designDecisions: "Implemented a dual-pane editor with AI suggestions appearing as inline comments rather than replacing user text. Used a traffic-light SEO scoring system (red/amber/green) for quick readability. Designed a content calendar view with drag-and-drop scheduling. Applied progressive disclosure for advanced AI settings.",
    developmentProcess: "Built a rich text editor using ProseMirror for collaborative editing. Integrated OpenAI API with streaming responses for real-time suggestions. Implemented a queue system for batch publishing with retry logic. Created a custom AI prompt management system for content team customization.",
    challenges: [
      {
        title: "AI Response Latency",
        solution: "Implemented streaming token delivery with optimistic rendering. Added a suggestion queue that prioritizes high-confidence completions."
      },
      {
        title: "Collaborative Editing Conflicts",
        solution: "Built a CRDT-based editing layer that handles concurrent modifications without data loss."
      },
      {
        title: "Multi-Channel Publishing Reliability",
        solution: "Created an idempotent publishing queue with webhook-based status tracking and automatic retry with exponential backoff."
      }
    ],
    technologies: [
      { name: "React", reason: "Component model supports complex editor UI with real-time collaborative features." },
      { name: "TypeScript", reason: "Type safety critical for AI API integration and complex document data models." },
      { name: "ProseMirror", reason: "Framework-agnostic rich text editing with built-in collaboration support via plugins." },
      { name: "OpenAI API", reason: "GPT-4 integration for content generation, SEO suggestions, and multi-language translation." },
      { name: "WebSocket", reason: "Real-time synchronization for collaborative editing across multiple users." }
    ],
    results: [
      "Content creation time reduced by 62% with AI assistance",
      "Average SEO score improved from 65 to 88 across all published content",
      "Multi-channel publishing reduced distribution time from 2 hours to 5 minutes",
      "Team of 4 now produces content previously requiring 10 people",
      "Client expanded content output 3x while maintaining quality standards"
    ],
    gallery: [
      "/images/ai-content-platform-interface.svg",
      "/images/ai-content-platform-diagram.svg",
      "/images/ai-content-platform-metrics.svg"
    ],
    learnings: [
      "Streaming AI responses with optimistic rendering creates a seamless user experience",
      "CRDTs for collaborative editing eliminate the need for server-side conflict resolution",
      "Progressive disclosure in AI tools prevents overwhelming users while preserving power-user features",
      "Content workflows benefit from treating AI as an assistant rather than a replacement"
    ],
    liveDemo: "#",
    github: "#",
    relatedProjects: ["saas-platform", "ecommerce-platform"],
    color: "steel"
  }
];

export const getProjectBySlug = (slug: string): ProjectCaseStudy | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getAllProjectSlugs = (): string[] => {
  return projects.map(p => p.slug);
};
