import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateOrderProductDto {
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsString()
  orderDescription: string;
}
