import { Requirement } from "./Requirement.js"

export class Job {
  constructor(data) {
    this.Company = data.Company
    this.Location = data.Location
    this.To = data.To
    this.From = data.From
    this.JobTitle = data.JobTitle
    this.Requirements = data.Requirements.map(r => new Requirement(r))
  }
}