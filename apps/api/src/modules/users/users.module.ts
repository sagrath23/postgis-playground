import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './infrastructure/controller';
import { AddUserUseCase, GetUserByIdUseCase, GetUsersInRadiusUseCase } from './application';
import { TypeORMUsersRepository } from './infrastructure/adapter/typeorm';
import { UserSchema } from './infrastructure/adapter/typeorm/schemas';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([UserSchema])],
  controllers: [UsersController],
  providers: [
    GetUserByIdUseCase,
    GetUsersInRadiusUseCase,
    AddUserUseCase,
    {
      provide: 'UsersRepository',
      useClass: TypeORMUsersRepository,
    }
  ],
})
export class UsersModule {}
