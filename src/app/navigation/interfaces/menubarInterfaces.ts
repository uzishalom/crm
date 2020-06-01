export interface MenuDefinitions {
  menuLocation?: string;
  textColor?: string;
  bgColor?: string;
  selectedTextColor?: string;
  selectedBgColor?: string;
}

export interface MenubarMenuItem {
  title: string;
  icon?: string;
  link: string;
}
