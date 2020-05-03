import app from './app';

const PORT = process.env.PORT || 3000;

const main = async () => {
  await app.listen(PORT);
  console.log(`Server on port ${PORT}`);
};

main();
