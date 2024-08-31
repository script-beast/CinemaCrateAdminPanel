const allActiveStandardCrates = async () => {
  return new Promise((resolve, reject) => {
    const standardCrates = [
      {
        id: 1,
        name: "Standard Crate 1",
        price: 10,
        description: "This is a standard crate",
        active: true,
      },
      {
        id: 2,
        name: "Standard Crate 2",
        price: 20,
        description: "This is a standard crate",
        active: true,
      },
      {
        id: 3,
        name: "Standard Crate 3",
        price: 30,
        description: "This is a standard crate",
        active: true,
      },
    ];
    resolve(standardCrates);
  });
};

const allDeletedStandardCrates = async () => {
  return new Promise((resolve, reject) => {
    const standardCrates = [
      {
        id: 4,
        name: "Standard Crate 4",
        price: 40,
        description: "This is a standard crate",
        active: false,
      },
      {
        id: 5,
        name: "Standard Crate 5",
        price: 50,
        description: "This is a standard crate",
        active: false,
      },
      {
        id: 6,
        name: "Standard Crate 6",
        price: 60,
        description: "This is a standard crate",
        active: false,
      },
    ];
    resolve(standardCrates);
  });
};

const deleteStandardCrate = async (id) => {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
};

export {
  allActiveStandardCrates,
  allDeletedStandardCrates,
  deleteStandardCrate,
};
