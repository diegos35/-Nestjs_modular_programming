import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASK') private tasks: any[],
  ) {}

  getHello(): string {
    console.log(this.tasks);
    return `Hello worlddddd!s ${this.apiKey}`;
  }
}
