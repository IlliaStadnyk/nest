import { Type } from 'class-transformer';
import { ValidateNested, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { CreateOrderProductDto } from '../../order-product/dtos/create-order-product.dto';
import { CreateClientDto } from '../../clients/dtos/create-client.dto';

export class CreateOrderDto {
  @ValidateNested()
  @Type(() => CreateClientDto)
  client: CreateClientDto;

  @ValidateNested({ each: true })
  @Type(() => CreateOrderProductDto)
  items: CreateOrderProductDto[];

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsInt()
  total: number;
}
