import { Icon } from "./Icon.js"

export class Skill {
  constructor(data) {
    this.Name = data.Name
    this.Description = data.Description
    this.Icons = new Icon(data.Icons[0])
  }
}