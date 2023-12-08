import { Body, Controller, Get, Post, Param, Query, Version } from '@nestjs/common';
import { GetUserByIdUseCase, GetUsersInRadiusUseCase, AddUserUseCase } from '../../application';

@Controller('users')
export class UsersController {
  constructor(
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
    private readonly getUsersInRadiusUseCase: GetUsersInRadiusUseCase,
    private readonly addUserUseCase: AddUserUseCase
  ) {}

  @Version('1')
  @Get(':id')
  async getUserById(@Param('id') id) {
    return this.getUserByIdUseCase.execute(id);
  }

  @Version('1')
  @Get()
  async getUsersInRadius(@Query('lon') longitude, @Query('lat') latitude, @Query('rad') radius) {
    return this.getUsersInRadiusUseCase.execute(longitude, latitude, radius);
  }

  @Version('1')
  @Post()
  async addUser(@Body() userData) {
    return this.addUserUseCase.execute(userData);
  }
}
