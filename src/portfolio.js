/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Shahzaib Nasir",
  title: "Hi all, I'm Shahzaib",
  subTitle: emoji(
    "Front End Developer 👨‍💻 | Software Engineer 🤖"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1LVBWauoSNFUP91jLR4-zKExI1CGKkZa_/edit?usp=share_link&ouid=100223492053731464282&rtpof=true&sd=true",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/snasir-code",
  linkedin: "https://www.linkedin.com/in/shahzaib-nasir-340059147/",
  outlook: "shah.nasir@outlook.com",
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle:
    "Motivated professional with over 5 years of experience in Web Developement and scalable software solutions to meet changing demands",
  skills: [
    emoji(
      "⚡ Using frameworks like React.js or Next.js, I build reusable components to streamline development and enhance user experience."
    ),
    emoji("⚡ Leveraging technologies like HTML, CSS, and JavaScript, I develop interactive and visually appealing user interfaces."),
    emoji(
      "⚡ I collaborate with backend engineers to integrate frontend components with databases using technologies like MongoDB, MySQL and REST APIs, ensuring seamless data retrieval and manipulation for dynamic user experiences."
    ),
    emoji(
      "⚡ Experience in scoping out business requirements, highlighting edge cases, and simplifying client expectations into manageable work items."
    ),
  ],

  softwareSkills: [
    {
      skillName: "Python",
      classname: "logos:python",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Javascript",
      classname: "logos:javascript",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "NodeJs",
      classname: "logos:nodejs",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Java",
      classname: "logos:java",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "ReactJS",
      classname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "Git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: ".Net",
      classname: "logos:dotnet",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Mongo",
      classname: "simple-icons:mongodb",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Html",
      classname: "simple-icons:html5",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Css",
      classname: "simple-icons:css3",
      style: {
        backgroundColor: "white",
        color: "#D00000",
      },
    },
    {
      skillName: "Django",
      classname: "simple-icons:django",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Ui/Ux",
      classname: "logos:figma",
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "KPMG",
      companylogo: require("./assets/images/kpmg.jpg"),
      date: "Sept 2018 – Present",
      desc: "Applications development and support of We applications. Design and develop solutions for client and internal teams.",
    },
    {
      role: "IT Support",
      company: "Lewisham Southwark College",
      companylogo: require("./assets/images/lsc.jpg"),
      date: "2016-2017",
      desc: "Creating technical documentation and communicating technical information to non-technical users.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: "Bachelors of Software Engineering",
      subtitle: "- Digital and Technology Soltions",
      logo_path: "qml.png",
      color_code: "#FEF6E6",
    },
    {
      title: "Python",
      subtitle: "- Certified Python Developer",
      logo_path: "python-logo.png",
      alt_name: "Vskills",
      color_code: "#F6EAEA",
    },
    {
      title: "Azure",
      subtitle: "- Fundamentals of Azure",
      logo_path: "azure.jpg",
      color_code: "#F0FFDD",
    }
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://bharatkammakatla.hashnode.dev/selenium-python-automation-framework-how-to-build",
      title: "How to build a Selenium Python Automation Framework",
      description:
        "Interested in building a test automation framework with selenium and python? If so, check out here !",
    },
    {
      url: "https://bharatkammakatla.hashnode.dev/steps-to-build-a-selenium-java-framework-ckdsi73xg005ga9s1defhemfz",
      title: "Steps to build a Selenium Java Automation Framework",
      description:
        "Interested in building a test automation framework with selenium and java? If so, check out here !",
    },
    {
      url: "https://bharatkammakatla.hashnode.dev/face-expression-recognition-using-keras-and-cnns-ckbevmufo0195dis1dfs10kt1",
      title: "Building a Machine Learning model to detect human emotions",
      description:
        "Are you interested to know how machines detect human emotions? If so, check out here !",
    },
    {
      url: "https://medium.com/@bharatkammakatla/basic-end-to-end-scikit-learn-workflow-cd9e9a50491b?source=friends_link&sk=b828ac262c172abd7508efcbd00e5bd3",
      title: "Basic End-to-End Scikit-Learn workflow",
      description:
        "Do you want to know how a basic end-to-end scikit-learn workflow is implemented ? If so, check out here !",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+44 12345678",
  email_address: "shahzaib.nasir@outlook.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  certifications,
};
