import { Controller, Get } from '@nestjs/common';
import { CarouselService } from './carousel.service';

@Controller('carousel')
export class CarouselController {
  constructor(private readonly CarouselService: CarouselService) {}

  @Get('/')
  getAll(): any {
    return this.CarouselService.getAll();
  }
}
