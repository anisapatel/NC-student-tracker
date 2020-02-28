export const getResitHistory = blockHistory => {
  const copyBlockHistory = [...blockHistory];
  return copyBlockHistory.reduce(
    (tally, block) => {
      tally[block.slug]++;
      return tally;
    },
    { fun: 0, be: 0, fe: 0, proj: 0, grad: 0 }
  );
};
