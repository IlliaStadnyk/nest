import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/services/prisma.service';
import { Carousel } from '@prisma/client';

@Injectable()
export class CarouselService {
  constructor(private readonly prismaService: PrismaService) {}
  public getAll(): Promise<Carousel[]> {
    return this.prismaService.carousel.findMany();
  }
}
