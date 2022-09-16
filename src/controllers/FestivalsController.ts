import { Controller, Get } from '@nestjs/common';
import { FestivalService } from '../service/FestivalsService';

@Controller()
export class FestivalController {
  constructor(private readonly appService: FestivalService) {}

  @Get()
  getHello() {
    return this.appService.getFestivals();
  }
}
