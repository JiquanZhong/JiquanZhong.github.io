import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Introduction",
    projects: "Why did I create this website?",
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects:
      "Inermis eligendi necessitatibus an duo, accusam probatus reprehendunt ei eum, pro ne fugit theophrastus. Wisi munere delenit per ea, te pro nulla oratio dissentiunt. ",
    icon: CiMobile1,
    bg: "#EEC048",
  },
  // {
  //   name: "Brand Identity",
  //   projects: 47,
  //   icon: MdWorkspacesOutline,
  //   bg: "#F26440",
  // },
];

export const WhatDoIHelp = [
  "There are two primary motivations behind the creation of this website. Firstly, it serves as a platform to share my professional journey and offer guidance to individuals embarking on their CRM careers, mirroring my own experience when I commenced my first CRM-related internship four years ago (2019). Back then, I grappled with a limited understanding of CRM roles and the trajectory of my professional path. This website aims to support newcomers in navigating the complexities of CRM, providing insights about entering this field. It is my aspiration that visitors acquire a foundational understanding of CRM, and assist them in making informed decisions.",
  "Moreover, this website serves as an extension of my one-page CV, offering a comprehensive view of my passion for CRM and my professional capabilities. Its purpose is to provide a broader scope for organizations in Europe to see my capabilities and talent.",
  "If you are an HR or CRM manager interested in exploring my expertise, please review my CV and portfolio. I’m looking for the opportunity to engage in further discussion with you.",
];

export const workExp = [
  {
    company: "Mium lab",
    tenure: "Aug 2023 - Present",
    place: "Paris, France",
    role: "CRM Specialist",
    detail:
      "Led CRM strategies in FR, UK, EU markets, focusing on segmentation, CLV, and bilingual content. Improved customer service with automated workflows, expanded customer database through opt-ins and questionnaires. Managed data accuracy, reported monthly on omnichannel performance, and stayed updated with webinars. Contributed to China's business growth, achieving 50-80% open rates, 30-50% CTR, and 10-15% conversion rates in automated campaigns.",
  },
  {
    company: "Group les échos-medici.tv",
    tenure: "July 2022 - Jan 2023",
    place: "Paris, France",
    role: "CRM Specialist International",
    detail:
      "Managed and executed multichannel campaigns, including global email initiatives (newsletters, targeting, promotions) using Adobe Campaign. Enhanced customer satisfaction and repurchase rates through KYC programs and questionnaires. Developed email templates and conducted A/B tests. Tracked and reported monthly on campaign performance KPIs.",
  },
  {
    company: "Chanel (C/H)",
    tenure: "Dec.2020 - April.20",
    place: "Shanggai, China",
    role: "CRM Ominichanel Assistant",
    detail:
      "Oversaw omnichannel communication (SMS, MMS, Push, WeChat), analyzed online sales (Tmall, WeChat, Website), and managed sample and gift distribution to over 380 boutiques, aligned with campaign data. Collaborated with logistics for timely deliveries, shared monthly campaign updates with retail teams, addressed customer inquiries on samples and gifts, and monitored competitor trends and technologies.",
  },
  {
    company: "Toplus E-commerce",
    tenure: "June.2019 - Sept.2019",
    place: "Chengdu, China",
    role: "E-commerce Assistant",
    detail:
      "Optimized the store page by updating product content and enhancing SEO. Managed product data, monitoring inventory and updating product information and pricing. Handled customer support, managing requests and complaints, tracking order processing to maintain the store's positive rating. Assisted in marketing efforts, executing promotional activities on social media platforms like Facebook and Instagram.",
  },
];

export const strategies = [
  {
    id: "1",
    title: "Personalization",
    content:
      "Customizing interactions based on customer data to create unique experiences. Example: Using purchase history to recommend products.",
  },
  {
    id: "2",
    title: "Data-Driven Strategy",
    content:
      "Analyzing customer data to inform decision-making. Example: Identifying trends from customer behavior to tailor marketing campaigns.",
  },  
  {
    id: "3",
    title: "Automation",
    content:
      "Implementing CRM tools for automatic responses and task management. Example: Using chatbots for instant customer queries resolution.",
  },
  {
    id: "4",
    title: "Feedback Utilization",
    content:
      "Actively using customer feedback to refine products and services. Example: Incorporating customer suggestions into product development.",
  },
  {
    id: "5",
    title: "Omnichannel Engagement",
    content:
      "Integrating multiple channels for a seamless customer experience. Example: Synchronizing service across online, phone, and in-store interactions.",
  },
  {
    id: "6",
    title: "Segmentation",
    content:
      "Categorize customers into distinct groups for targeted communication. Example: Sending customized offers to different age groups.",
  },
  {
    id: "7",
    title: "Customer Journey Mapping",
    content:
      "Analyze interactions at each touchpoint to improve overall experience. Example: Streamlining the checkout process based on user feedback.",
  },
  {
    id: "8",
    title: "Loyalty Programs",
    content:
      "Encourage repeat purchases with rewards. Example: A points system for discounts on future purchases.",
  },
  {
    id: "9",
    title: "Social Media Engagement",
    content:
      "Engage customers directly on social platforms. Example: Resolving service issues and promoting deals on Twitter.",
  },
  {
    id: "10",
    title: "Predictive Analytics",
    content:
      "Use data to anticipate future customer needs. Example: Suggesting products based on previous browsing and purchase history.",
  },
];

export const works = [
  {
    id: "1",
    workTitle: "Christmas Gift Guide",
    pictureURL: "./works/picture/showCase1.png",
    htmlURL: "./works/html/work1.html",
  },
  {
    id: "2",
    workTitle: "Products Collection",
    pictureURL: "./works/picture/showCase2.png",
    htmlURL: "./works/html/work2.html",
  },
  {
    id: "3",
    workTitle: "Referrel Program",
    pictureURL: "./works/picture/showCase3.png",
    htmlURL: "./works/html/work3.html",
  },
  {
    id: "4",
    workTitle: "Products Collection",
    pictureURL: "./works/picture/showCase4.png",
    htmlURL: "./works/html/work4.html",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
