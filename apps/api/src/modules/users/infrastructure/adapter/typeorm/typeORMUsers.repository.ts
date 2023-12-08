import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from '../../../domain/port';
import { Repository } from 'typeorm';
import { User } from '../../../domain/model';

@Injectable()
export class TypeORMUsersRepository implements UsersRepository {
  constructor( @InjectRepository(User)
  private usersRepository: Repository<User>) {}
  
  async addUser(userData) {
    return this.usersRepository.save(userData);
  }

  async getUserById(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async getUsersByRadius(latitude, longitude, radius) {
    return this.usersRepository
      .createQueryBuilder('user')
      .where('ST_DistanceSphere(user.location, ST_MakePoint(:longitude, :latitude)) <= :radius', { latitude, longitude, radius })
      .getMany();
  }
}
