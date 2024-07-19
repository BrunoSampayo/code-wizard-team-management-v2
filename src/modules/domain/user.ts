// export interface User {
//   name: string;
//   email: string;
//   password: string;
// }
export default class User {
  private id!: string;
  private name: string;
  private email: string;
  private password: string;
  private image: string | undefined;
  private role: "USER" | "ADMIN";

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    image: string | undefined,
    role: "USER" | "ADMIN"
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.image = image;
    this.role = role;
  }
}
