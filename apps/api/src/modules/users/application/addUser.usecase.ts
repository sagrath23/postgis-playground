import { Inject, Injectable, Logger } from '@nestjs/common';
import { UsersRepository } from '../domain/port';
import { User } from '../domain/model';

@Injectable()
export class AddUserUseCase {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: UsersRepository,
  ) {}

  async execute(userData): Promise<User> {
    Logger.log('execute AddUserUseCase');
    const { location: { lat: latitude, lon: longitude }} = userData;
    // transform to point
    const pointObject = {
      type: "Point",
      coordinates: [longitude,latitude]
    };
    const result = await this.usersRepository.addUser({ ...userData, location: pointObject });

    Logger.log(result, 'AddUserUseCase.execute');

    return result;
  }
}
