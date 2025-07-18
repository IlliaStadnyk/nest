import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  clientId: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;
}
