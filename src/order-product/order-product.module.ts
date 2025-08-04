import { Module } from '@nestjs/common';
import { OrderProductController } from './order-product.controller';
import { OrderProductService } from './order-product.service';
import { PrismaService } from '../shared/services/prisma.service';

@Module({
  controllers: [OrderProductController],
  providers: [OrderProductService, PrismaService],
})
export class OrderProductModule {}
