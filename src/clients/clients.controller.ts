import { Body, Controller, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dtos/create-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientService: ClientsService) {}

  @Post('/')
  create(@Body() createClient: CreateClientDto) {
    return this.clientService.addClient(createClient);
  }
}
