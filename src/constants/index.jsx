import { DollarSign, CreditCard, TrendingUp } from 'lucide-react';

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

// Navigation items
export const navItems = [
  { label: "Features", href: "#" },
  { label: "Testimonials", href: "#" },
];

// Testimonials data

export const testimonials = [
  {
    user: "Alice Johnson",
    company: "Wealth Management Corp",
    image: user1,
    text: "The financial tools and insights provided by this platform have transformed our investment strategies. Their solutions are effective and easy to use.",
  },
  {
    user: "Robert Brown",
    company: "Capital Strategies Ltd.",
    image: user2,
    text: "Our financial analysis capabilities have greatly improved thanks to the comprehensive tools offered here. The customer service is also top-notch.",
  },
  {
    user: "Emily Davis",
    company: "Prosperity Partners",
    image: user3,
    text: "This platform has been a game-changer for managing our financial portfolios. The accuracy of the data and ease of use have exceeded our expectations.",
  },
  {
    user: "Michael Wilson",
    company: "Secure Investments",
    image: user4,
    text: "The team provided exceptional support and innovative solutions that streamlined our financial processes. We highly recommend their services.",
  },
  {
    user: "Sophia Turner",
    company: "Growth Financials",
    image: user5,
    text: "Thanks to this platform, we now have a clearer understanding of our financial health and growth opportunities. Their tools are both powerful and user-friendly.",
  },
  {
    user: "James Wilson",
    company: "Future Finance Advisors",
    image: user6,
    text: "The depth of financial insights and the quality of the tools provided have greatly enhanced our decision-making processes. Excellent service and results!",
  },
];

// Features data
export const features = [
  {
    icon: <DollarSign />,
    text: "Budget Management",
    description:
      "Manage your budget efficiently by setting limits and tracking expenses.",
  },
  {
    icon: <CreditCard />,
    text: "Expense Tracking",
    description:
      "Track your daily, weekly, and monthly expenses with ease.",
  },
  {
    icon: <TrendingUp />,
    text: "Financial Goals",
    description:
      "Set and achieve your financial goals by planning ahead.",
  },
];

// Re-adding checklistItems
export const checklistItems = [
  {
    title: "Efficient Budget Tracking",
    description:
      "Seamlessly monitor your budget with real-time updates and insights.",
  },
  {
    title: "Automated Expense Management",
    description:
      "Automatically categorize and manage your expenses to save time and effort.",
  },
  {
    title: "Smart Financial Goals",
    description:
      "Set and track financial goals with actionable insights and personalized recommendations.",
  },
  {
    title: "Comprehensive Spending Analysis",
    description:
      "Analyze your spending patterns with detailed reports and visualizations.",
  },
];


// Re-adding pricingOptions
export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Basic Budget Management",
      "Expense Tracking",
      "Financial Goal Setting",
      "Spending Visualization",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Advanced Budget Management",
      "Expense Tracking",
      "AI-driven Financial Advice",
      "Spending Visualization",
      "Bank Account Integration",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Full Suite of Features",
      "Unlimited Budget Tracking",
      "Priority Support",
      "Custom Integrations",
    ],
  },
];

// Resources links
// Resources links
export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "User Guide" },
  { href: "#", text: "Financial Tools Overview" },
  { href: "#", text: "FAQ" },
  { href: "#", text: "Support Center" },
];

// Platform links
export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Accounts" },
  { href: "#", text: "Security Measures" },
  { href: "#", text: "Integrations" },
  { href: "#", text: "Updates" },
];

// Community links
export const communityLinks = [
  { href: "#", text: "Webinars" },
  { href: "#", text: "Workshops" },
  { href: "#", text: "Networking Events" },
  { href: "#", text: "Case Studies" },
  { href: "#", text: "Careers" },
];
