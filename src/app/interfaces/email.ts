export interface Email {
  to: string;
  subject: string;
  message: string;
  sentOn?: Date;
  sentBy?: string; // the id of the user who sent the email.
  [key: string]: any;
}

export default Email;
