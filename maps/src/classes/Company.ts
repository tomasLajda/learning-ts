import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    };
  }
  markerContent(): string {
    return `
    <div>
    <h1>Company Name: ${this.name}<h1/>
    <p>Catchphrase: ${this.catchPhrase}<p/>
    <div/>
    `;
  }
}
