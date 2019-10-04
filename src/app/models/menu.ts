
export class Children {
  label: string;
  icon: string;
  path: string;
  description: string;
  target: string;
  id: string;
}

export class NavigationMenu {
  label: string;
  icon: string;
  path: string;
  id: string;
  target: string;
  children: Children[];
}

export class UserPreferences {
  label: string;
  value: string;
}

