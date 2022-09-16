import { Controller, Get } from '@nestjs/common';
import { MovieService } from '../service/MoviesService';

@Controller()
export class MovieController {
  constructor(private readonly appService: MovieService) {}

  @Get('/movies')
  getHello() {
    return this.appService.getMovies();
  }
}
