import { CharactersCollection } from './CharactersCollection';
import { LinkedLisk } from './LinkedLisk';
import { NumbersCollection } from './NumbersCollection';

const charactersCollection = new CharactersCollection('dsakfjakfjdldfas');
charactersCollection.sort();
console.log(charactersCollection.data);

const numbersCollection = new NumbersCollection([10, 4, -1, 0, -4]);
numbersCollection.sort();
console.log(numbersCollection.data);

const linkedLisk = new LinkedLisk();
linkedLisk.add(5);
linkedLisk.add(-2);
linkedLisk.add(20);
linkedLisk.add(-11);
linkedLisk.add(0);
linkedLisk.add(2);

linkedLisk.sort();
linkedLisk.print();
