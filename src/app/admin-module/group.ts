export class Group {
  id: number;
  name: string;
  users: string;
  constructor(id: number,
              name: string,
              users: string) {
    this.id = id;
    this.name = name;
    this.users = users;
  }
}
