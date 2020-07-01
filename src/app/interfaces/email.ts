export interface Email {
  to: string;
  toCustomerName?: string;
  toCustomerId?: string;
  subject: string;
  message: string;
  sentOn?: string;
  sentBy?: string; // the id of the user who sent the email.
  [key: string]: any;
}

export default Email;
