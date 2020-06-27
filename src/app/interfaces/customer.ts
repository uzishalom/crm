import Email from "./email"
export interface Customer {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  notes?: string;
  receivedEmails?: Email[];
  [key: string]: any;
}
