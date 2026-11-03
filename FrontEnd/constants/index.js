
// import ArrowIcon from "./src/assets/svg/arow.svg";

export const HeroSectionItems = {
  blueAlert: "Available for new projects",

  title: "Designing the",
  highlightedTitle: "Future",
  titleSuffix: "of Web.",

  subtitle:
    "I'm a creative developer tailored for the modern web. I build immersive, high-performance digital experiences that blend art with engineering.",

  buttons: {
    primary: "View My Work",
    secondary: "Download CV",
  },

  features: [
    {
      id: 1,
      title: "Clean Code",
      icon: "./src/assets/svg/code.svg",
    },
    {
      id: 2,
      title: "Pixel Perfect",
      icon: "./src/assets/svg/2.svg",
    },
    {
      id: 3,
      title: "Fast Performance",
      icon: "./src/assets/svg/rocket.svg",
    },
  ],

  profile: {
    image:  "./src/assets/photos/mine photo edited.png",
    statusTitle: "Current Status",
    statusText: "Refining the design system for",
    projectName: "Project Nebula.",
  },
};

export const HeroAssets = {
  arrow: './src/assets/svg/arow.svg',
  folder: "./src/assets/svg/folder.svg",
  profileImage: "./src/assets/photos/ChatGPT Image Sep 25, 2025, 01_47_48 PM.png"
};
//------------end hero ---------
export const HeaderItems = [
    "Home",
    "work",
    "About",
    "Notes",

];
export const HamburgerMenu_items = [
    "Home",
    "My_Post",
    "About us",

];

// export const heroAlert = {
//     actions:[]
//     blueAlert: "Available for new projects",
//     heroTitle: "Designing the  Web"

// }
export const heroAlert = {
  actions: [
    {
      id: "work",
      label: "View My Work",
      href: "#projects",
      type: "primary",
    },
    {
      id: "cv",
      label: "Download CV",
      href: "/cv.pdf",
      type: "secondary",
    },
  ],
};
export const Core_Capabilities = [
    {

        imgSrc: "./src/assets/svg/Front.svg",
        Title: "Frontend Architecture",
        Description: "Building complex SPAs with React, Next.js, and modern state management. Focusing on performance, accessibility, and SEO optimization",
        circleColor: "bg-linear1/40"
    },
    {

        imgSrc: "./src/src/assets/svg/Ui-Ux.svg",
        Title: "UI/UX Engineering",
        Description: "Translating design concepts into pixel-perfect code. Proficient with Framer Motion, GSAP, and Tailwind for fluid animations and micro-interactions.",
        circleColor: "bg-linear2/40"
    },
    {

        imgSrc: "./src/assets/svg/Front.svg",
        Title: "Full Stack Integration",
        Description: "Seamlessly connecting frontends with robust backends. Experience with Node.js, PostgreSQL, Supabase, and Serverless Edge Functions.",
        circleColor: "bg-linear3/40"
    }

]
export const projrct_section = [
    {
        imgSrc: "assets/photos/Image.png",
        Title: "Nova Financial",
        Description: "Real-time cryptocurrency trading dashboard with live WebSocket feeds, advanced charting, and portfolio analytics.",
        Technologies: ["React", "D3.js", "Supabase"]
    }
]
export const UserComment = [
    {
        id: 1,
        starsRate: 4.5,
        imgSrc: "./src/assets/photos/ChatGPT Image Sep 25, 2025, 01_47_48 PM.png",
        authorName: "Sarah Johnson",
        Specializations: "CEO, TechFlow",
        Description: `"Alex transformed our vision into reality with exceptional attention to detail. The dashboard he built is not only beautiful but incredibly performant."`
    },
]
export const Experience = [
    {
        id: 1,
        Title: "Senior Frontend Engineer",
        Company: "TechCorp Inc.",
        TimeLine: "2022 - Present",
        Description: `Leading frontend architecture for a suite of SaaS products serving 100K+ users. Implemented design system, optimized performance by 60%, and mentored junior developers.`,
        Specializations: ["React", "D3.js", "Supabase"]
    }
]
export const Contact = [
    {
        id: 1,
        Title: "Let's Build Something ",
        ColorofullWord: "Amazing",
        Description: `Have a project in mind? I'm currently available for freelance work and full-time opportunities. Let's discuss how we can work together.`,
        Messaging_Apps: [
            {id:1, imgSrc: "./src/assets/svg/github-142-svgrepo-com.svg", Title: "GitHub", Href: "" },
            {id:2, imgSrc: "./src/assets/svg/linkedin-svgrepo-com.svg", Title: "LinkedIn", Href: "" },
            {id:3, imgSrc: "./src/assets/svg/instagram-1-svgrepo-com.svg", Title: "Instagram", Href: "" },
            {id:4, imgSrc: "./src/assets/svg/letter-svgrepo-com.svg", Title: "Email", Href: "" },
        ]
    }
]