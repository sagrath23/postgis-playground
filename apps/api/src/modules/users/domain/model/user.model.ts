import { Point } from "geojson";

export class User {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly location: Point

  constructor(id, firstName, lastName, location) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
  };
}
