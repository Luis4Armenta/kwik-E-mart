import app from './app'
import { connect } from 'mongoose'
import Product from './models/product.model';

async function connectDB (): Promise<void> {
  try {
    await connect('mongodb://localhost/prueba-mart', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
  } catch (e) {
    throw new Error('Se ha producido un error con la base de datos,,\n' + e);
  }
}


async function llenar (): Promise<void> {
  await new Product({ name: 'coca-cola', price: 12, quantity: 10 }).save();
  await new Product({ name: 'Pepsi', price: 11, quantity: 15 }).save();
  await new Product({ name: 'Sabritas', price: 12, quantity: 20 }).save();
  await new Product({ name: 'Leche 1L Lala', price: 24, quantity: 10 }).save();
  await new Product({ name: 'Chicles', price: 2, quantity: 150 }).save();
  await new Product({ name: 'Agua 1L', price: 8, quantity: 12 }).save();
}

connectDB();
// llenar();

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running!..');
});