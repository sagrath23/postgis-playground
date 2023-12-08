import { Inject, Injectable, Logger } from '@nestjs/common';
import { UsersRepository } from '../domain/port';
import { User } from '../domain/model';

@Injectable()
export class GetUserByIdUseCase {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: UsersRepository,
  ) {}

  async execute(id: number): Promise<User> {
    Logger.log('execute GetUserByIdUseCase');

    const result = await this.usersRepository.getUserById(id);

    Logger.log(result, 'GetUserByIdUseCase.execute');

    return result;
  }
}
