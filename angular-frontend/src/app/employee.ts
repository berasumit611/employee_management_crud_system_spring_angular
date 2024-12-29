export class Employee {
    id: number;
    firstName: string;
    lastName: string;
    emailId: string;

   // Constructor with optional parameters
  constructor(id?: number, firstName?: string, lastName?: string, emailId?: string) {
    this.id = id || 0; // Default value
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.emailId = emailId || '';
  }
}
