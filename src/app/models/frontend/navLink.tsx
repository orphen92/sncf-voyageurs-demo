export interface NavLink {
    id: string;
    name: string;
    subNav?: Array<NavLink>;
}
