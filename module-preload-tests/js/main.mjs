const main = async () => {
  const {import1} = await import(    './import1.mjs');
  console.log('Dynamic Import 1 value:', import1);

  const {import2} = await import(    './import2.mjs');
  console.log('Dynamic Import 2 value:', import2);
};

main();
