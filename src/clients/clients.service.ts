import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/services/prisma.service';
import { Client } from '@prisma/client';

@Injectable()
export class ClientsService {
  constructor(private prismaService: PrismaService) {}

  public addClient(
    clientData: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Client> {
    return this.prismaService.client.create({
      data: clientData,
    });
  }
}
