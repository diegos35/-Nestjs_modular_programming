import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

const API_KEY = '1234567';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [
    AppService, //useClases default providers
    {
      provide: 'API_KEY',
      useValue: API_KEY,
    },
  ],
})
export class AppModule {}
