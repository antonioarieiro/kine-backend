import { Module } from '@nestjs/common';
import { FestivalController } from './controllers/FestivalsController';
import { FestivalService } from './service/FestivalsService';
import { MovieService } from './service/MoviesService';
import { MovieController } from './controllers/MoviesController';

@Module({
  imports: [],
  controllers: [FestivalController, MovieController],
  providers: [FestivalService, MovieService],
})
export class AppModule {}
