import GameSavingLoader from '../GameSavingLoader';
import { saveData } from '../reader';
import GameSaving from '../GameSaving';

const hitman = new GameSaving(JSON.parse(saveData));

test('Test case №1', (done) => {
  GameSavingLoader.load().then((result) => {
    expect(result).toEqual(hitman);
  }).catch((err) => err);
  done();
});
