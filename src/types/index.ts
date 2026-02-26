export type ServiceType =
  | "chassis-pvc"
  | "chassis-aluminium"
  | "portes"
  | "volets"
  | "moustiquaires";

export interface Service {
  id: ServiceType;
  title: string;
  description: string;
  icon: string;
  color?: string;
  iconColor?: string;
}

export interface FormData {
  name: string;
  phone: string;
  email: string;
  projectType: ServiceType | "";
  message: string;
}

export interface ContactInfo {
  address: string;
  city: string;
  phone: string;
  email: string;
}
