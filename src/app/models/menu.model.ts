export interface MenuItem {
  id: number;
  name: string;
  value: number;
  checked: boolean;
}

export interface MenuSection {
  id: number;
  name: string;
  items: MenuItem[];
}