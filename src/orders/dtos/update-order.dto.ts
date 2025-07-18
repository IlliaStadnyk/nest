import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateOrderDto {
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  clientId: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;
}
