import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    //@Inject('API_KEY') private apiKey: string,
    @Inject('TASK') private tasks: any[],
    private config: ConfigService,
  ) {}

  getHello(): string {
    const apiKey = this.config.get('APY_KEY');
    const name = this.config.get('DATABASE_NAME');

    return `Hello worlddddd!s ${apiKey}`;
  }
}
