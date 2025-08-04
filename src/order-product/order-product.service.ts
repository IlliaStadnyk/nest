import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/services/prisma.service';
import { OrderProduct } from '@prisma/client';

@Injectable()
export class OrderProductService {
  constructor(private prismaService: PrismaService) {}

  public async update(
    id: string,
    data: Omit<OrderProduct, 'id' | 'productId' | 'orderId'>,
  ): Promise<OrderProduct> {
    return this.prismaService.orderProduct.update({
      where: { id: id },
      data: data,
    });
  }

  public async delete(id: string): Promise<OrderProduct> {
    return this.prismaService.orderProduct.delete({ where: { id: id } });
  }
}
