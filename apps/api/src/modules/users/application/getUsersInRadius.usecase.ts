import { Inject, Injectable, Logger } from '@nestjs/common';
import { UsersRepository } from '../domain/port';
import { User } from '../domain/model';

@Injectable()
export class GetUsersInRadiusUseCase {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: UsersRepository,
  ) {}

  async execute(longitude: number, latitude: number, radius: number): Promise<Array<User>> {
    Logger.log('execute GetUsersInRadiusUseCase');

    console.log(longitude, latitude, radius, 'data');
    const result = await this.usersRepository.getUsersByRadius(latitude, longitude, radius);

    console.log(result, 'result');
    Logger.log(result, 'GetUsersInRadiusUseCase.execute');

    return result;
  }
}
