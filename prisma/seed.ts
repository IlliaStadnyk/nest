import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getCategories() {
  return [
    {
      id: '6a3615a2-913f-4b38-85d7-14c6400a1c11',
      name: 'Cameras',
    },
    {
      id: '27ae6bc7-cdf2-4e91-b67e-7b927a85b320',
      name: 'Lenses',
    },
  ];
}

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      title: 'Canon EOS 1D',
      price: 21000,
      description: 'Cheap, ideal for beginners',
      imageMain: 'image.jpg',
      imageDesc: 'image.jpg',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      title: 'Canon EOS 52D',
      price: 52000,
      description: 'Professional camera, solid build',
      imageMain: 'image.jpg',
      imageDesc: 'image.jpg',
    },
    {
      id: 'fd10a551-0f0d-4a9f-bc41-c559c8a17258',
      title: 'Canon R',
      price: 33000,
      description: 'Professional camera, new technology',
      imageMain: 'image.jpg',
      imageDesc: 'image.jpg',
    },
    {
      id: 'ad105551-0f0d-4a9f-bc41-c559c8a17256',
      title: 'Canon EOS 530D',
      price: 2000,
      description: 'Cheap, ideal for beginners',
      imageMain: 'image.jpg',
      imageDesc: 'image.jpg',
    },
    {
      id: 'b920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      title: 'Canon EOS 335D',
      price: 15000,
      description: 'Professional camera, solid build',
      imageMain: 'image.jpg',
      imageDesc: 'image.jpg',
    },
    {
      id: 'cd105551-0f0d-4a9f-bc41-c559c8a17258',
      title: 'Canon 4R',
      price: 323000,
      description: 'Professional camera, new technology',
      imageMain: 'image.jpg',
      imageDesc: 'image.jpg',
    },
    {
      id: 'dd105551-0f0d-4a9f-bc41-c559c8a17256',
      title: 'Canon EOS 570D',
      price: 23000,
      description: 'Cheap, ideal for beginners',
      imageMain: 'image.jpg',
      imageDesc: 'image.jpg',
    },
    {
      id: 'e920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      title: 'Canon EOS 509D',
      price: 59000,
      description: 'Professional camera, solid build',
      imageMain: 'image.jpg',
      imageDesc: 'image.jpg',
    },
    {
      id: 'fa105551-0f0d-4a9f-bc41-c559c8a17258',
      title: 'Canon 68R',
      price: 38000,
      description: 'Professional camera, new technology',
      imageMain: 'image.jpg',
      imageDesc: 'image.jpg',
    },
    {
      id: 'fb105551-0f0d-4a9f-bc41-c559c8a17256',
      title: 'Canon EOS 50D',
      price: 2000,
      description: 'Cheap, ideal for beginners',
      imageMain: 'image.jpg',
      imageDesc: 'image.jpg',
    },
    {
      id: 'cc20c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      title: 'Canon EOS 5D',
      price: 5000,
      description: 'Professional camera, solid build',
      imageMain: 'image.jpg',
      imageDesc: 'image.jpg',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      title: 'Canon R',
      price: 3000,
      description: 'Professional camera, new technology',
      imageMain: 'image.jpg',
      imageDesc: 'image.jpg',
    },
    {
      id: 'fe105551-0f0d-4a9f-bc41-c559c8a17256',
      title: 'Canon EOS 50D',
      price: 2000,
      description: 'Cheap, ideal for beginners',
      imageMain: 'image.jpg',
      imageDesc: 'image.jpg',
    },
    {
      id: 'c9a0c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      title: 'Canon EOS 5D',
      price: 5000,
      description: 'Professional camera, solid build',
      imageMain: 'image.jpg',
      imageDesc: 'image.jpg',
    },
    {
      id: 'fdb05551-0f0d-4a9f-bc41-c559c8a17258',
      title: 'Canon R',
      price: 3000,
      description: 'Professional camera, new technology',
      imageMain: 'image.jpg',
      imageDesc: 'image.jpg',
    },
  
  ];
}

function getClients() {
  return [
    {
      id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      name: 'John Doe',
      address: '123 Main Street, London',
    },
    {
      id: '9c858901-8a57-4791-81fe-4c455b099bc9',
      name: 'Jane Doe',
      address: '456 Main Street, London',
    },
  ];
}

function getOrders() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      clientId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      clientId: '9c858901-8a57-4791-81fe-4c455b099bc9',
    },
  ];
}

function getOrderProducts() {
  return [
    {
      id: 'b774e7e1-4b0c-4cf5-8823-64d79d51820f',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      orderId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      quantity: BigInt(1),
      description: 'First order product',
    },
    {
      id: 'ecb3bb5c-4820-42f3-8aa2-16fc55ff50d6',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      orderId: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      quantity: BigInt(2),
      description: 'Second order product',
    },
  ];
}

async function seed() {
  await db.orderProduct.deleteMany();
  await db.order.deleteMany();
  await db.product.deleteMany();
  await db.client.deleteMany();
  // await db.category.deleteMany();

  // await Promise.all(
  //   getCategories().map((category) => {
  //     return db.category.create({ data: category });
  //   }),
  // );

  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  // await Promise.all(
  //   getClients().map((client) => {
  //     return db.client.create({ data: client });
  //   }),
  // );
  //
  // await Promise.all(
  //   getOrders().map(({ clientId, ...order }) => {
  //     return db.order.create({
  //       data: {
  //         ...order,
  //         client: {
  //           connect: { id: clientId },
  //         },
  //       },
  //     });
  //   }),
  // );
  //
  // await Promise.all(
  //   getOrderProducts().map(({ productId, orderId, quantity, ...op }) => {
  //     return db.orderProduct.create({
  //       data: {
  //         ...op,
  //         product: { connect: { id: productId } },
  //         order: { connect: { id: orderId } },
  //         quantity: Number(quantity),
  //       },
  //     });
  //   }),
  // );
}

seed()
  .then(() => {
    console.log('✅ Seed complete');
    return db.$disconnect();
  })
  .catch((e) => {
    console.error('❌ Error seeding DB', e);
    return db.$disconnect();
  });
