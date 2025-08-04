import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../shared/services/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}
  public getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  public getById(id: Product['id']): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
    });
  }
}
