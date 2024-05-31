import { IExperience } from './IExperience';
import { IMenuItem } from './IMenuItem';
import { INotification } from './INotification';
import { ISkillType } from './ISkillType';
import { IAboutContent } from './IAboutContent';

export interface IContent {
    menuItems: IMenuItem[];
    notifications: INotification[];
}
