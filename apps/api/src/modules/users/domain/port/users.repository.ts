export interface UsersRepository {
  getUserById(id: number);

  addUser(userData: { firstName: string, lastName: string });

  getUsersByRadius(latitude: number, longitude: number, radius: number);
}
