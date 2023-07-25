import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    };
  }
  markerContent(): string {
    return `<h1>User Name: ${this.name}<h1/>`;
  }
}
