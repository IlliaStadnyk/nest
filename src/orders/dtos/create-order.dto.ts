import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @Length(10, 20)
  @IsNotEmpty()
  client: string;

  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @Length(10, 20)
  @IsString()
  address: string;
}
