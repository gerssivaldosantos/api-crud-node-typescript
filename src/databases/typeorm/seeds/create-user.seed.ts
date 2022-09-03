import { Factory, Seeder } from 'typeorm-seeding'
import { User } from '@/entities/user.entity'
import { DataSource } from 'typeorm'
import { faker } from '@faker-js/faker'

export default class createUser implements Seeder {
  public async run(_factory: Factory, AppDataSource: DataSource): Promise<any> {
    await AppDataSource.initialize().then(dataSource => {
      const user = new User({
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: "123456",
      });
      dataSource.getRepository(User).save(user);
    })

  }
}