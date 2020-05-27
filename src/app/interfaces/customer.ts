export interface Customer {
  id: string;
  name: string;
  email: string;
  birthday?: Date;
  phones?: string[];
  [key: string]: any;
}
