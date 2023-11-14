import { NavLink } from './navLink';

export interface IBigMenu {
    id: string;
    isRoot: boolean;
    nav: Array<NavLink>;
    title: string;
}
