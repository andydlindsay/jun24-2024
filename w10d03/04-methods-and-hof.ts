interface Writer {
  penName: string;
  writeBook: (title: string) => boolean;
}

const writer: Writer = {
  penName: 'agatha christie',
  writeBook: (title: string) => { return true; }
};

const hof = (cb: (num: number) => string[]) => {};

hof((num: number) => { return ['a', 'b'] });
