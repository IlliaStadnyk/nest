import { Body, Controller, Delete, Param, Put } from '@nestjs/common';
import { OrderProductService } from './order-product.service';
import { UpdateOrderProductDto } from './dtos/update-order-product.dto';

@Controller('order-product')
export class OrderProductController {
  constructor(private readonly orderProductService: OrderProductService) {}

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() orderProduct: UpdateOrderProductDto,
  ) {
    return this.orderProductService.update(id, orderProduct);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.orderProductService.delete(id);
  }
}
