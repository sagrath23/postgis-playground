import { EntitySchema } from 'typeorm';
import { User } from '../../../../domain/model';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    location: {
      type: 'geometry',
      srid: 4326,
      nullable: true,
      spatialFeatureType: 'Point',
    }
  },
  relations: {},
});
