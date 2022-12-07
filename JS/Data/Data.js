import { Skill } from "../Models/Skill.js"
import { Job } from "../Models/Job.js"
import { Requirement } from "../Models/Requirement.js"
import { Achievement } from "../Models/Achievement.js"
import { School } from "../Models/School.js"


export let showSkills = false

export function enableShowSkillsBool() {
  showSkills = true
}

export function disableShowSkillsBool() {
  showSkills = false
}

export let showJobs = false

export function enableShowJobsBool() {
  showJobs = true
}

export function disableShowJobsBool() {
  showJobs = false
}

export let showSchools = false

export function enableShowSchoolsBool() {
  showSchools = true
}

export function disableShowSchoolsBool() {
  showSchools = false
}

export let showAchievements = false

export function enableShowAchievementsBool() {
  showAchievements = true
}

export function disableShowAchievementsBool() {
  showAchievements = false
}

export const skills = [
  // new Skill({
  //   Name: "Google Suite",
  //   Description: "Document, Presentation, and Sheets Editor",
  //   Icons: [
  //     {
  //       Img: "https://imgs.search.brave.com/ywCxl-GUJ3zHTrsuDSe9kCq1boyT8f1OX77BF1FQouA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2RhL0dvb2dsZV9E/cml2ZV9sb2dvLnBu/Zw",
  //       Link: "https://www.google.com/drive/",
  //       Title: "Google Drive",
  //     },
  //     {
  //       Img: "https://imgs.search.brave.com/H55Hh6wii-tXq6ysyMN2ksky6gHiNv70pCRLPoS9-L4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL2d3ZWIt/dW5pYmxvZy1wdWJs/aXNoLXByb2QvaW1h/Z2VzL0dvb2dsZS1E/b2NzLWxvZ28tdHJh/bnNwYXJlbnQubWF4/LTI4MDB4MjgwMC5w/bmc",
  //       Link: "https://www.google.com/drive/",
  //       Title: "Google Docs, Slides, & Sheets",
  //     },
  //   ]
  // }),
  // new Skill({
  //   Name: "Python from CodeSkulptor",
  //   Description: "A programming language that is very easy to learn and get used to.",
  //   Icons: [
  //     {
  //       Img:
  //       "https://imgs.search.brave.com/vB3rIUOwUdSCy9FquSiK2jlHfO7i8b1KcIbEvkFdqWs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMTAvUHl0aG9u/X2xvZ29faWNvbi5w/bmc",
  //       Link: "https://www.python.org/",
  //       Title: "Python",
  //     },
  //     {
  //       Img:
  //       "https://py3.codeskulptor.org/icon.svg",
  //       Link: "https://py3.codeskulptor.org/",
  //       Title: "CodeSkulptor",
  //     },
  //   ]
  // }),
  // new Skill({
  //   Name: "Java from IntelliJ Idea",
  //   Description: "Another programming language that is not as easy to learn, but faster since it is more strict than Python",
  //   Icons: [
  //     {
  //       Img:
  //       "https://imgs.search.brave.com/DUR9TwXHA5oH-kXMndhMbAiZ2p7wwKNbXleC3G0ioqI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cGlrcG5nLmNvbS9w/bmdsL2IvMTQ2LTE0/NjkxNDZfamF2YS1s/b2dvLXRyYW5zcGFy/ZW50LXBuZy5wbmc",
  //       Link: "https://www.java.com/en/",
  //       Title: "Java",
  //     },
  //     {
  //       Img:
  //       "https://imgs.search.brave.com/nBKhAEzefUeVMP8ozvE1Y_QPeOPM3aYVqqB8ls3gock/rs:fit:1024:1024:1/g:ce/aHR0cDovL2xvZ29u/b2lkLmNvbS9pbWFn/ZXMvaW50ZWxsaWot/aWRlYS1sb2dvLnBu/Zw",
  //       Link: "https://www.jetbrains.com/idea/",
  //       Title: "IntelliJ Idea",
  //     },
  //   ]
  // }),
  // new Skill({
  //   Name: "MVC File Flow Structure",
  //   Description: "MVC is a file structure that organizes functions into: View - What the user sees, \nController - where the functions that any interactable button or item might activate, \nService - where all the business logic for each function lays, \nAppState - where all the current data lays, \nModels - where the formats of data lay",
  //   Icons: []
  // }),
  new Skill({
    Name: "HTML",
    Description: "HyperText Markup Language is a programming language that acts as the structure of all websites",
    Icons: [
      {
        Img:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
        Title: "HTML (HyperText Markup Language)",
      },
    ]
  }),
  new Skill({
    Name: "CSS",
    Description: "Cascading Style Sheets is a programming language which helps designing a website and give it life",
    Icons: [
      {
        Img:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
        Title: "CSS (Cascading Style Sheets)",
      },
    ]
  }),
  new Skill({
    Name: "JS - JavaScript",
    Description: "JavaScript is the main backbone of a website allowing it to be reactive and conform to the need of the user",
    Icons: [
      {
        Img:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        Link: "https://www.javascript.com/",
        Title: "JavaScript",
      },
    ]
  }),
  new Skill({
    Name: "C#",
    Description: "C Sharp is a programming language that is very strict with it's typing, declarations, and functions. That makes it better for servers since it will impose more restrictions on the users data and other items they might try to pass in.",
    Icons: [
      {
        Img:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        Title: "C Sharp",
      },
    ]
  }),
  new Skill({
    Name: "SQL",
    Description: "SQL or Structure Query Language is a programming language that is specifically for manipulating data from a MySQL database",
    Icons: [
      {
        Img:
        "https://imgs.search.brave.com/1kElzFQooQk3vhOyGeAbIsnWv_hCOidVNqGZtEjOJBI/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9kZXZi/bG9ncy5taWNyb3Nv/ZnQuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9zaXRlcy80My8y/MDE5LzAzL0F6dXJl/LVNRTC1EYXRhYmFz/ZS1nZW5lcmljX0NP/TE9SLnBuZw",
        Title: "SQL",
      },
    ]
  }),
  new Skill({
    Name: "Vue",
    Description: "The Vue framework is a front-end framework that makes designing a page and showing data easier and allows for multi-page applications",
    Icons: [
      {
        Img:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        Link: "https://vuejs.org/",
        Title: "Vue.js",
      },
    ]
  }),
  new Skill({
    Name: "Node Server",
    Description: "Node is a run-time environment and using a framework, allows you to create a server relatively easily",
    Icons: [
      {
        Img:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
        Link: "https://nodejs.org/en/",
        Title: "Node.js",
      },
    ]
  }),
  new Skill({
    Name: "DotNet",
    Description: "DotNet is another type of framework for back-end purposes that uses C#, SQL, and MySQL to create a server",
    Icons: [
      {
        Img:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original-wordmark.svg",
        Link: "https://dotnet.microsoft.com/en-us/",
        Title: "DotNet",
      },
    ]
  }),
  new Skill({
    Name: "Mongo DB",
    Description: "Mongo DB is a database which handles all of your database and sometimes can be free to use.",
    Icons: [
      {
        Img:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
        Link: "https://www.mongodb.com/",
        Title: "MongoDB",
      },
    ]
  }),
  new Skill({
    Name: "MySQL",
    Description: "MySQL is another database which uses the sql language to manage data and create a database",
    Icons: [
      {
        Img:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
        Link: "https://www.mysql.com/",
        Title: "My SQL",
      },
    ]
  }),
  new Skill({
    Name: "Adobe Illustrator",
    Description: "Vector Based Design Software",
    Icons: [
      // {
      //   Img: "https://imgs.search.brave.com/QyAEJLxe3bvcEBvw_0En5HDgpCnqFRl9MTVpZgOHUdY/rs:fit:920:920:1/g:ce/aHR0cHM6Ly9jbGlw/YXJ0Y3JhZnQuY29t/L2ltYWdlcy9hZG9i/ZS1sb2dvLTMucG5n",
      //   Link: "https://www.adobe.com/",
      //   Title: "Adobe",
      // },
      {
        Img: "https://imgs.search.brave.com/rdP-mZPAIySXYMR3amKYoy9V2Wo6qT7hPWoCr0kEplQ/rs:fit:1200:1170:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9mL2ZiL0Fk/b2JlX0lsbHVzdHJh/dG9yX0NDX2ljb24u/c3ZnLzEyMDBweC1B/ZG9iZV9JbGx1c3Ry/YXRvcl9DQ19pY29u/LnN2Zy5wbmc",
        Link: "https://www.adobe.com/products/illustrator.html",
        Title: "Adobe Illustrator",
      }
    ]
  }),
  new Skill({
    Name: "Adobe InDesign",
    Description: "Overall Design Software that can create Posters, Business Cards, Web Pages, Books, and Many More",
    Icons: [
      // {
      //   Img:
      //   "https://imgs.search.brave.com/QyAEJLxe3bvcEBvw_0En5HDgpCnqFRl9MTVpZgOHUdY/rs:fit:920:920:1/g:ce/aHR0cHM6Ly9jbGlw/YXJ0Y3JhZnQuY29t/L2ltYWdlcy9hZG9i/ZS1sb2dvLTMucG5n",
      //   Link: "https://www.adobe.com/",
      //   Title: "Adobe",
      // },
      {
        Img:
        "https://imgs.search.brave.com/kAzHBhDlByq2QJdDBjNeENgBDG6Rbh2n8q4NjvZAw6A/rs:fit:1200:1170:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQ4L0Fk/b2JlX0luRGVzaWdu/X0NDX2ljb24uc3Zn/LzEyMDBweC1BZG9i/ZV9JbkRlc2lnbl9D/Q19pY29uLnN2Zy5w/bmc",
        Link: "https://www.adobe.com/products/indesign.html",
        Title: "Adobe InDesign",
      },
    ]
  }),
]

export const workExperience = [
  new Job({
    Company: "Bretz Rv",
    Location: "Boise ID",
    To: "July 30th, 2022",
    From: "April 4th, 2022",
    JobTitle: "Propane Attendant",
    Requirements: [
      new Requirement({
        Name: "Serve customers by filling propane canisters when requested."
      }),
      new Requirement({
        Name: "Manage warranty parts by adding, mailing, disposing, and inspecting the parts based on what the vendor required."
      }),
      new Requirement({
        Name: "Assist with shipping and receiving when needed by preparing incoming and outgoing shipments."
      })
    ]
  }),
  new Job({
    Company: "Autozone",
    Location: "Kuna ID",
    To: "April 2nd, 2022",
    From: "April 2021",
    JobTitle: "Sales Associate",
    Requirements: [
      new Requirement({
        Name: "Assist customers with finding, purchasing, and researching parts using Znet (Autozone part management software)."
      }),
      new Requirement({
        Name: "Manage store by stocking and organizing shelves, maintaining store tasks, and cleaning the storefront every day."
      }),
      new Requirement({
        Name: "Go to the customer's vehicle to assist with OBD II codes and replacing wiper blades, batteries, or headlights."
      })
    ]
  }),
  new Job({
    Company: "Wendy's",
    Location: "Kuna ID",
    To: "Feb 2021",
    From: " June 2020",
    JobTitle: "Crewmate",
    Requirements: [
      // new Requirement({
      //   Name: "Assemble food orders while maintaining appropriate portion control."
      // }),
      // new Requirement({
      //   Name: "Retrieves raw food stock and place at the appropriate station for preparation."
      // }),
      // new Requirement({
      //   Name: "Performs duties to prepare food."
      // }),
      // new Requirement({
      //   Name: "Operated fry station for drive-thru and dining room."
      // }),
      // new Requirement({
      //   Name: "Cleaned & sanitized food preparation dishes, devices, and materials."
      // }),
      // new Requirement({
      //   Name: "Performed closing procedures."
      // }),
    ]
  }),
  new Job({
    Company: "Subway",
    Location: "Kuna ID",
    To: "August 2020",
    From: "June 2020",
    JobTitle: "Sandwich Artist",
    Requirements: [
      // new Requirement({
      //   Name: "Created custom sandwiches as ordered."
      // }),
      // new Requirement({
      //   Name: "Maintained excellent customer service during fast-paced lunch and dinner rushes."
      // }),
      // new Requirement({
      //   Name: "Cleaned, sanitized, and organized dining room area to maintain a comfortable and clean environment."
      // }),
      // new Requirement({
      //   Name: "Processed customer payments via POS register, including accurate cash handling and credit card transactions."
      // }),
      // new Requirement({
      //   Name: "Cleaned & sanitized food preparation dishes, devices, and materials."
      // }),
      // new Requirement({
      //   Name: "Prepared food & materials to be used for sandwich creations."
      // }),
      // new Requirement({
      //   Name: "Performed closing procedures."
      // }),
    ]
  }),
]

export const schools = [
  new School({
    Name: "Kuna High School",
    Class: "2021",
    Picture: "https://imgs.search.brave.com/p8t3pILNoZkEJIIrXhbgBdoVzLvihPsAgSmzQrGT5q4/rs:fit:1200:796:1/g:ce/aHR0cHM6Ly9ibG94/aW1hZ2VzLmNoaWNh/Z28yLnZpcC50b3du/bmV3cy5jb20vaWRh/aG9wcmVzcy5jb20v/Y29udGVudC90bmNt/cy9hc3NldHMvdjMv/ZWRpdG9yaWFsLzEv/ZjIvMWYyNDJjZTkt/YjE3NS01ZWQ1LWE1/NTItOGNkNzY1OTgy/ZTk0LzVmNTk3MDA2/YTAxYjAuaW1hZ2Uu/anBnP3Jlc2l6ZT0x/MjAwJTJDNzk2",
    Location: "Kuna, Idaho",
    Link: "https://www.kunaschools.org/kunahigh",
    Description: [
      "Intro to Computer Systems",
      "Dual Credit Programming Fundamentals",
      "Computer Science Principles"
    ]
  }),
  new School({
    Name: "Boise CodeWorks",
    Class: "Fall 2022",
    Picture: "https://imgs.search.brave.com/oB5oWKQwWj01VwxskKVLBFJikYcgl4f3zAIapNGQxfY/rs:fit:500:500:1/g:ce/aHR0cHM6Ly9pZGFo/b3BvdGF0b2Ryb3Au/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE2LzA5L2N3LWxv/Z28ucG5n",
    Location: "Boise, Idaho",
    Link: "https://boisecodeworks.com/",
    Description: [
      "Certificate of Completion - Boise CodeWorks"
    ]
  })
]

export const achievements = [
  new Achievement({
    Name: "Adobe Certified Associate - Adobe Photoshop CC 2018",
    Date: "Dec 2018 - Nov-2022",
    Img: "https://imgs.search.brave.com/oDpPJRp4AbeQLpa_Vmjg1KOfEQuwQpyfU9dicgnhJko/rs:fit:1200:1170:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9hL2FmL0Fk/b2JlX1Bob3Rvc2hv/cF9DQ19pY29uLnN2/Zy8xMjAwcHgtQWRv/YmVfUGhvdG9zaG9w/X0NDX2ljb24uc3Zn/LnBuZw"
  }),
  new Achievement({
    Name: "Graphic Design & Illustration using Adobe Illustrator CC 2018",
    Date: "Nov 2020 - Nov 2023",
    Img: "https://imgs.search.brave.com/rdP-mZPAIySXYMR3amKYoy9V2Wo6qT7hPWoCr0kEplQ/rs:fit:1200:1170:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9mL2ZiL0Fk/b2JlX0lsbHVzdHJh/dG9yX0NDX2ljb24u/c3ZnLzEyMDBweC1B/ZG9iZV9JbGx1c3Ry/YXRvcl9DQ19pY29u/LnN2Zy5wbmc"
  }),
  new Achievement({
    Name: "Print & Digital Media Publication using Adobe InDesign CC 2018",
    Date: "May 2021 - May 2024",
    Img: "https://imgs.search.brave.com/kAzHBhDlByq2QJdDBjNeENgBDG6Rbh2n8q4NjvZAw6A/rs:fit:1200:1170:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQ4L0Fk/b2JlX0luRGVzaWdu/X0NDX2ljb24uc3Zn/LzEyMDBweC1BZG9i/ZV9JbkRlc2lnbl9D/Q19pY29uLnN2Zy5w/bmc"
  }),
  new Achievement({
    Name: "Adobe Certified Professional: Visual Design",
    Date: "2021",
    Img: "https://imgs.search.brave.com/6t7tmn8gjQwlBhWm4guUF9asMl_YKY1EiU0qgYSKHK4/rs:fit:892:271:1/g:ce/aHR0cHM6Ly9oZWxw/eC5hZG9iZS5jb20v/Y29udGVudC9kYW0v/aGVscC9lbi94LXBy/b2R1Y3RrYi9tdWx0/aS9hZG9iZS1jZXJ0/aWZpZWQtcHJvZmVz/c2lvbmFsL2pjcl9j/b250ZW50L21haW4t/cGFycy9tdWx0aV9j/b2x1bW4vY29sLTUw/LTUwLWMxL2ltYWdl/L0FDUF9sb2dvLnBu/Zw"
  }),
  new Achievement({
    Name: "Introduction to Programming using Java",
    Date: "May 2021",
    Img: "https://imgs.search.brave.com/6SO0L0R5fDplXMzgdYiL1GNrcCeupt_LHr7PG4x-pNI/rs:fit:1200:731:1/g:ce/aHR0cDovL3d3MS5w/cndlYi5jb20vcHJm/aWxlcy8yMDEyLzAx/LzE5LzkxMjE1NzUv/bXMtVGVjaEFzc29j/aWF0ZV9ibHVlLnBu/Zw"
  }),
  new Achievement({
    Name: "Certificate of Completion - Boise CodeWorks",
    Date: "Nov 2022",
    Img: "https://imgs.search.brave.com/-qnfL4yShaeHBeAsB59UmB1GSJgqrK5aATPBG0bf47Y/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9iY3cu/YmxvYi5jb3JlLndp/bmRvd3MubmV0L3B1/YmxpYy9pbWcvODYw/MDg1NjM3MzE1MjQ2/Mw"
  }),
]