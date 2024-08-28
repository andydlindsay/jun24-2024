interface Pet {
  breed: string;
  name: string;
}

interface MyType {
  id?: number;
  name: string;
  age: number;
  myPet?: Pet;
}

const myObj: MyType = {
  id: 1,
  name: 'alice',
  age: 42,
};

const another: MyType = {} as MyType;
another.name = 'bob';
another.age = 100;
