import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  /*   constructor(@Inject('API_KEY') private apiKey: string) {}
   */
  getHello(): string {
    console.log('aqui');
    return `Hello worlddddd!sadas`;
  }
}
