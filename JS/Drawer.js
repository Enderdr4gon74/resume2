import { disableShowJobsBool, disableShowSchoolsBool, disableShowSkillsBool, enableShowJobsBool, enableShowSchoolsBool, enableShowSkillsBool, schools, showJobs, showSchools, showSkills, skills, workExperience } from "../JS/Data/Data.js";
import { Skill } from "../JS/Models/Skill.js";
import { Icon } from "./Models/Icon.js";
import { Job } from "./Models/Job.js";
import { Requirement } from "./Models/Requirement.js";
import { School } from "./Models/School.js";

function drawSkills(skillList = []) {
  let html = ""
  skillList.forEach((skill = Skill)=>{
    html += formatSkill(skill)
  })
  // console.log(html)
  // @ts-ignore
  document.getElementById("skills").innerHTML = html
  enableShowSkillsBool()
}

function drawJobExperience(jobList = []) {
  let html = ""
  jobList.forEach((job = Job)=>{
    html += formatJob(job)
  })
  // @ts-ignore
  document.getElementById("jobs").innerHTML = html
  enableShowJobsBool()
}

function drawSchools(schoolList = []) {
  let html  = ""
  schoolList.forEach((school = School) => {
    html += formatSchool(school)
  })
  // @ts-ignore
  document.getElementById("schools").innerHTML = html
  enableShowSchoolsBool()
}

function unDrawSkills() {
  // @ts-ignore
  document.getElementById("skills").innerHTML = ""
  disableShowSkillsBool()
}

function unDrawJobs() {
  // @ts-ignore
  document.getElementById("jobs").innerHTML = ""
  disableShowJobsBool()
}

function unDrawSchools() {
  // @ts-ignore
  document.getElementById("schools").innerHTML = ""
  disableShowSchoolsBool()
}

function formatSkill(s) {
  let skill = new Skill(s)
  let html = 
    `<div class="brick py-2 px-1">\n` + 
    `\t<div class="spec-card-2 p-2">\n` + 
    `\t\t<h3 class="m-0">${skill.Name}</h3>\n` + 
    `\t\t<p class="ps-1 mb-1">${skill.Description}</p>\n`
  if (skill.Icons.length > 0) {
    html += `\t\t<section class="row">\n`
    skill.Icons.forEach((ic)=>{
      let icon = new Icon(ic)
      html += `\t\t\t<div class="col-6 col-md-3">\n`
      if (icon.Link) {
        html +=
        `\t\t\t\t<a href="${icon.Link}" class="w-100">\n` + 
        `\t\t\t\t\t<img src="${icon.Img}" alt="${icon.Title}" title="${icon.Title}" class="img-fluid w-100  rounded-3">\n` + 
        `\t\t\t\t</a>\n`
      } else {
        html += `\t\t\t\t<img src="${icon.Img}" alt="${icon.Title}" title="${icon.Title}" class="img-fluid w-100  rounded-3">\n`
      }
      html +=`\t\t\t</div>\n` 
    })
    html += `\t\t</section>\n` 
  }
  html += 
    `\t</div>\n` + 
    `</div>\n`
  // console.log(html)
  return html
}

function formatJob(j) {
  let job = new Job(j)
  let html = 
    `<div class="brick py-2 px-1">\n` +
    `\t<div class="spec-card-2 p-2">\n` +
    `\t\t<h3 class="mb-1">${job.Company} - ${job.JobTitle}</h3>\n` +
    `\t\t<p class="mb-0">${job.From} - ${job.To}</p>\n` +
    `\t\t<p class="mb-1">${job.Location}</p>\n`
  if (job.Requirements.length > 0) {
    html += 
    `\t\t<h4>Duties: </h4>\n` + 
    `\t\t<ul>\n`
    job.Requirements.forEach((r) => {
      let requirement = new Requirement(r)
      html += 
        `\t\t\t<li>\n` + 
        `\t\t\t\t<p class="m-0">${requirement.Name}</p>\n` + 
        `\t\t\t</li>\n`
    })
    html += 
      `\t\t</ul>\n` 
    }
    html += 
      `\t</div>\n` + 
      `</div>`
  return html
}

function formatSchool(s) {
  let school = new School(s)
  let html = 
    `<div class="col-12 col-md-6">\n` +
    `\t<section class="row spec-card-2 p-2 mx-0">\n` +
    `\t\t<div class="col-12 col-md-4 d-flex justify-content-center align-items-center p-0">\n` + 
    `\t\t\t<a href="${school.Link}" target="_blank">\n` + 
    `\t\t\t\t<img src="${school.Picture}" alt="${school.Name}" title="${school.Name}" class="img-fluid w-100 spec-image">\n` +
    `\t\t\t</a>\n` +
    `\t\t</div>\n` +
    `\t\t<div class="col-12 col-md-8">\n` +
    `\t\t\t<h3 class="mb-1">${school.Name}</h3>\n` +
    `\t\t\t<p class="m-0">${school.Location} | Class of ${school.Class}</p>\n` +
    `\t\t\t<p class="m-0">${school.Description}</p>\n` +
    `\t\t</div>\n` +
    `\t</section>\n` +
    `</div>`
    return html
}

export function toggleShowSkills2() {
  if (!showSkills) {
    drawSkills(skills)
    unDrawJobs()
    unDrawSchools()
  } else {
    unDrawSkills()
  }
  // toggleShowSkillsBool()
}

export function toggleShowJobs2() {
  if (!showJobs) {
    drawJobExperience(workExperience)
    unDrawSkills()
    unDrawSchools()
  } else {
    unDrawJobs()
  }
  // toggleShowJobsBool()
}

export function toggleShowSchools2() {
  if (!showSchools) {
    drawSchools(schools)
    unDrawJobs()
    unDrawSkills()
  } else {
    unDrawSchools()
  }
}