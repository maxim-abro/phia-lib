export interface IBreadcrumbItem {
  title: string;
  disabled?: boolean;
  href: string;
}

export interface IBreadcrumbsProps {
  items: IBreadcrumbItem[];
  separator?: string;
}
