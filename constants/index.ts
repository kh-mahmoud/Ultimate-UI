import {
  BookOpen,
  Bot,
  Calendar,
  Frame,
  Gift,
  Home,
  Inbox,
  LifeBuoy,
  Map,
  PieChart,
  Search,
  Send,
  Settings,
  Settings2,
  SquareTerminal,
  Users,
  BadgeCheck, Shield
} from "lucide-react";


// Menu items.
export const navigation = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export const platform = [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ]
  
export const help = [
  {
    title: "Support",
    url: "#",
    icon: LifeBuoy,
  },
  {
    title: "Feedback",
    url: "#",
    icon: Send,
  },

];


export const projects = [
  {
    title: "Design Engineering",
    url: "#",
    icon: Frame,
  },
  {
    title: "Sales & Marketing",
    url: "#",
    icon: PieChart,
  },
   {
    title: "Travel",
    url: "#",
    icon: Map,
  },

];

export const popularContent = [
  {
    id: 1,
    title: "JavaScript Tutorial",
    badge: "Coding",
    image:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 4300,
  },
  {
    id: 2,
    title: "Tech Trends 2025",
    badge: "Tech",
    image:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3200,
  },
  {
    id: 3,
    title: "The Future of AI",
    badge: "AI",
    image:
      "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2400,
  },
  {
    id: 4,
    title: "React Hooks Explained",
    badge: "Coding",
    image:
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1500,
  },
  {
    id: 5,
    title: "Image Generation with AI",
    badge: "AI",
    image:
      "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1200,
  },
];

export const latestTransactions = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "John Doe",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "Payment for Services",
    badge: "Jane Smith",
    image:
      "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 3,
    title: "Subscription Renewal",
    badge: "Michael Johnson",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 4,
    title: "Payment for Services",
    badge: "Lily Adams",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 5,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
];


export const todoItems = [
  "Lorem ipsum dolor sit amet.",
  "Consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt.",
  "Ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam.",
  "Quis nostrud exercitation ullamco.",
  "Laboris nisi ut aliquip ex ea commodo.",
  "Duis aute irure dolor in reprehenderit.",
  "Excepteur sint occaecat cupidatat non proident.",
  "Sunt in culpa qui officia deserunt."
];


export const badges = [
  {
    icon: BadgeCheck,
    bgColor: "bg-blue-500/30",
    borderColor: "border-blue-500/50",
    title: "Verified User",
    description: "This user has been verified by the admin.",
  },
  {
    icon: Shield,
    bgColor: "bg-green-800/30",
    borderColor: "border-green-800/50",
    title: "Admin",
    description: "Admin users have access to all features and can manage users.",
  },
  {
    icon: Gift,
    bgColor: "bg-yellow-500/30",
    borderColor: "border-yellow-500/50",
    title: "Awarded",
    description: "This user has been awarded for their contributions.",
  },
  {
    icon: Users,
    bgColor: "bg-orange-500/30",
    borderColor: "border-orange-500/50",
    title: "Popular",
    description: "This user has been popular in the community.",
  },
];


export const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "1a2b3c4d",
    amount: 250,
    status: "failed",
    email: "john.doe@example.com",
  },
  {
    id: "5e6f7g8h",
    amount: 80,
    status: "failed",
    email: "jane.smith@example.com",
  },
  {
    id: "9i0j1k2l",
    amount: 300,
    status: "pending",
    email: "alice.brown@example.com",
  },
  {
    id: "3m4n5o6p",
    amount: 95,
    status: "success",
    email: "charlie@example.org",
  },
  {
    id: "7q8r9s0t",
    amount: 150,
    status: "processing",
    email: "lucy@domain.com",
  },
  {
    id: "uvw123xy",
    amount: 220,
    status: "failed",
    email: "bob.marley@music.com",
  },
  {
    id: "z9y8x7w6",
    amount: 110,
    status: "success",
    email: "steve.jobs@apple.com",
  },
  {
    id: "abc987de",
    amount: 180,
    status: "pending",
    email: "elon.musk@mars.com",
  },
];

