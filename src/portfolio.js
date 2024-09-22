/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
    enabled: true, // set false to disable splash screen
    animation: splashAnimation,
    duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
    animated: true, // Set to false to use static SVG
};

const greeting = {
    username: "Ioannis Nikolopoulos",
    title: "Hi all, I'm John",
    subTitle: emoji(
        "A passionate Frontend Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / JQuery / PHP / Wordpress and some other cool libraries and frameworks."
    ),
    resumeLink:
        "https://drive.google.com/file/d/1OZzs4sJ43JOQkPwtW4oRTbe_QN9U0TnB/view", // Set to empty to hide the button
    displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/johnnikolo",
    linkedin: "https://www.linkedin.com/in/ioannis-nikolopoulos/",
    gmail: "ioannis.nikolopoulos@yahoo.com",
    // gitlab: "https://gitlab.com/saadpasta",
    // facebook: "https://www.facebook.com/saad.pasta7",
    // medium: "https://medium.com/@saadpasta",
    // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
    // Instagram, Twitter and Kaggle are also supported in the links!
    // To customize icons and social links, tweak src/components/SocialMedia
    display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle:
        "User-focused Frontend Developer with an eye for design and deep understanding of usability goals",
    skills: [
        emoji(
            "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
        ),
        emoji(
            "⚡ Perfectly marry functional requirements and creative elements to produce optimal interfaces"
        ),
        emoji("⚡ Integrate third party services and APIs"),
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5",
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt",
        },
        {
            skillName: "sass",
            fontAwesomeClassname: "fab fa-sass",
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js",
        },
        {
            skillName: "react.js",
            fontAwesomeClassname: "fab fa-react",
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm",
        },
        {
            skillName: "PHP",
            fontAwesomeClassname: "fab fa-php",
        },
        {
            skillName: "Git",
            fontAwesomeClassname: "fab fa-git-alt",
        },
        {
            skillName: "Wordpress",
            fontAwesomeClassname: "fab fa-wordpress",
        },
        // {
        //   skillName: "nodejs",
        //   fontAwesomeClassname: "fab fa-node"
        // },
        // {
        //   skillName: "swift",
        //   fontAwesomeClassname: "fab fa-swift"
        // },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database",
        },
        {
            skillName: "aws",
            fontAwesomeClassname: "fab fa-aws",
        },
        // {
        //   skillName: "firebase",
        //   fontAwesomeClassname: "fas fa-fire"
        // },
        // {
        //   skillName: "python",
        //   fontAwesomeClassname: "fab fa-python"
        // },
        // {
        //   skillName: "docker",
        //   fontAwesomeClassname: "fab fa-docker"
        // }
    ],
    display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
        {
            schoolName: "Athens University of Economics and Business",
            logo: require("./assets/images/aueb.jpg"),
            subHeader:
                "Bachelor of Science in Management Science and Technology",
            duration: "October 2016 - January 2021",
            desc: "",
            descBullets: [],
        },
    ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Frontend & UI", //Insert stack or technology you have experience in
            progressPercentage: "90%", //Insert relative proficiency in percentage
        },
        {
            Stack: "Research & Solutions Implementation",
            progressPercentage: "60%",
        },
        {
            Stack: "Backend",
            progressPercentage: "30%",
        },
    ],
    displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Frontend Developer",
            company: "Netcompany",
            companylogo: require("./assets/images/netcompany_intrasoft_sa_logo.jpg"),
            date: "March 2024 – Present",
            desc: "Developed and deployed frontend features for customer-facing web applications as part of micro-frontend architecture. Current project: Vodafone Travel eSIM",
            descBullets: [
                "Utilized React.js to build and maintain scalable and modular components.",
                "Onboarded and trained new team members, providing guidance on project architecture, best practices, and tools, while actively monitoring their progress to ensure continuous development and alignment with project goals.",
                "Integrated an internal CMS to enable easy configuration of components, reducing the need for unnecessary deployments and streamlining the update process.",
                "Collaborated with teams to integrate features in micro-frontends, ensuring seamless deployment.",
                "Used Git for version control, managing multiple branches and maintaining feature documentation.",
                "Worked in Agile Development Cycles with Jira to track development progress and sprint planning.",
            ],
        },
        {
            role: "Frontend Developer",
            company: "Collegelink",
            companylogo: require("./assets/images/collegelinkLogo.png"),
            date: "January 2022 – December 2023",
            desc: "Developed and deployed full-stack features for the main product and internal tools",
            descBullets: [
                "Utilized the following technologies: React.js, Vanilla JS, jQuery, HTML5, Cascading Style Sheets (CSS), SASS, PHP (5-8), MySQL and Wordpress",
                "Wrote end-to-end tests for new features using Cypress.js",
                "Utilized version control systems (Git) and documented new features accordingly",
                "Worked in Agile Development Cycles using Jira to keep track of the development status",
            ],
        },
    ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Big Projects",
    subtitle: "",
    projects: [
        {
            image: require("./assets/images/collegelinkLogoBig.png"),
            projectName: "Candidate Resume Redesign",
            projectDesc:
                "Completely redesigned the resume page that is being used from all the users of the main product in order to showcase their Candidate Profile and apply to jobs.",
            // footerLink: [
            //   {
            //     name: "",
            //     url: ""
            //   }
            //   //  you can add extra buttons here.
            // ]
        },
        {
            image: require("./assets/images/collegelinkLogoBig.png"),
            projectName: "Internal Recruitment Tool Development",
            projectDesc:
                "Developed from scratch an internal Recruitment Tool that serves the needs of the company's recruiters (in collaboration with the rest of the development team).",
            // footerLink: [
            //   {
            //     name: "Visit Website",
            //     url: "http://nextu.se/"
            //   }
            // ]
        },
    ],
    display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle:
        "Achievements, Certifications and Some Cool Stuff that I have done !",

    achievementsCards: [
        {
            title: "Qualified for and Graduated from the best Business & Technology University in Greece",
            subtitle:
                "Scored very high in the Panhellenic Exams, got accepted and completed all courses in time while working a part-time job.",
            image: require("./assets/images/aueb.jpg"),
            imageAlt: "AUEB Logo",
            footerLink: [
                {
                    name: "University & Department",
                    url: "https://www.dept.aueb.gr/en/dmst",
                },
            ],
        },
        {
            title: "Web Development Course",
            subtitle:
                "Completed a Web Development course and gained knowledge around full-stack development. During the course I developed a full-stack web app using JS, PHP and MySQL.",
            image: require("./assets/images/collegelinkLogoBig.png"),
            imageAlt: "Collegelink Web Development Academy",
            footerLink: [
                {
                    name: "View the course",
                    url: "https://www.collegelink.gr/academy/web-development-elearning-academy-online-course/",
                },
            ],
        },

        {
            title: "The Complete JavaScript Course",
            subtitle:
                "Completed the course from Udemy and improved my Javascript skills",
            image: require("./assets/images/udemy.png"),
            imageAlt: "Udemy Logo",
            footerLink: [
                {
                    name: "View the course",
                    url: "https://www.udemy.com/course/the-complete-javascript-course/",
                },
            ],
        },
    ],
    display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle:
        "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [
        {
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description:
                "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description:
                "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
        },
    ],
    display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.facebook.com/events/2339906106275053/",
        },
    ],
    display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
    ],
    display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me 📲"),
    subtitle:
        "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+30-6944827369",
    email_address: "ioannis.nikolopoulos@yahoo.com",
};

// Twitter Section

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: false, // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
    illustration,
    greeting,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails,
    isHireable,
};
