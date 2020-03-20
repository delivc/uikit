import User from './user'

export default interface Team {
  id: string;
  name: string;
  billing_email: string;
}

export interface TeamMember extends User {
  permission: string
  roles: string[]
}
