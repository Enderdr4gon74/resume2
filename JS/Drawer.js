import { skills } from "../JS/Data/Data.js";
import { Skill } from "../JS/Models/Skill.js";
import { Icon } from "./Models/Icon.js";

function drawSkills(skillList = []) {
  let html = ""
  skillList.forEach((skill = Skill, i)=>{
    html += formatSkill(skill)
  })
  // console.log(html)
  // @ts-ignore
  document.getElementById("skills").innerHTML = html
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
      html += `\t\t\t<div class="col-3">\n`
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

drawSkills(skills)