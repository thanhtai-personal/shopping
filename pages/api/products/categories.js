import nc from 'next-connect';
import Product from '../../../models/Product';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  try {
    const categories = await Product.find().distinct('category');
  } catch (error) {
    throw error
  }
  await db.disconnect();
  res.send(categories);
});

export default handler;
