import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/services/prisma.service';
import { CreateOrderDto } from './dtos/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}
  async create(dto: CreateOrderDto) {
    return this.prismaService.$transaction(async (tx) => {
      let client = await tx.client.findUnique({
        where: { phone: dto.client.phone },
      });

      if (!client) {
        client = await tx.client.create({
          data: {
            name: dto.client.name,
            phone: dto.client.phone,
          },
        });
      }

      const order = await tx.order.create({
        data: {
          clientId: client.id,
          address: dto.address,
        },
      });

      const orderProducts = await Promise.all(
        dto.items.map((item) =>
          tx.orderProduct.create({
            data: {
              orderId: order.id,
              productId: item.productId,
              quantity: item.quantity,
              orderDescription: item.orderDescription || '',
            },
          }),
        ),
      );

      return { client, order, orderProducts };
    });
  }
}
