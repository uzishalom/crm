export interface Email {
  to: string;
  toCustomerName?: string;
  toCustomerId?: string;
  subject: string;
  message: string;
  sentOnDate?: Date;
  sentOnString?: string;
  sentBy?: string;
  [key: string]: any;
}

export default Email;
