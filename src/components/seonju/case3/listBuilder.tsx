import { v4 as uuidv4 } from "uuid";
import { LoremIpsum } from "lorem-ipsum";

const ITEMS_PER_PAGE = 20;

const list: Array<Array<Item>> = [];

const lorem = new LoremIpsum({
  wordsPerSentence: { min: 10, max: 30 }
});

interface Item {
  id: string;
  no: number;
  text: string;
}

const itemBuilder = (no: number): Item => ({
  id: uuidv4(),
  no,
  text: lorem.generateWords(20)
});

const listBuilder = (page: number): Array<Item> =>
  Array.from({ length: ITEMS_PER_PAGE }).map((_, i) =>
    itemBuilder(page * ITEMS_PER_PAGE + i + 1)
  );

const getList = (page: number = 0): Array<Item> => {
  if (!list[page]) list[page] = listBuilder(page);
  return list[page];
};

export default getList;
