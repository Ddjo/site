export interface ISkillType {
  id: number;
  name: string;
  skills: ISkill[];
}


export interface ISkill {
    name: string;
    years: number[];
    hovered: boolean;
    selected: boolean;
  }
