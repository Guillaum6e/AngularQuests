import { Skill } from "./skill.model";

export class Developper {
  constructor(
    public firstname: string = "GG",
    public lastname: string = "JJ",
    public age: number = 78,
    public gender: string = "male",
    public bio: string = "",
    public skills: Skill[] = [],
  ) { }
}
