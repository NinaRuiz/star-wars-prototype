import { StarshipModel } from './starship-model';

/**
 * Test List
 *  Test setters
 *  Test getters
 */
describe('StarshipModel', () => {
  it('should create an instance', () => {
    expect(new StarshipModel()).toBeTruthy();
  });

  it('StarshipModelTest validate getters and setters', () => {
    const newModel = new StarshipModel();
    newModel.id = 1;
    newModel.name = 'test';
    newModel.imgUrl = 'test';
    newModel.passengers = 1;
    newModel.pilots = [];
    newModel.hyperdriveRating = 'test';
    newModel.url = 'test';
    newModel.cargoCapacity = 1;
    newModel.edited = 'test';
    newModel.consumables = 'test';
    newModel.maxAtmospheringSpeed = 1;
    newModel.crew = 1;
    newModel.length = 1;
    newModel.MGLT = 1;
    newModel.starshipClass = 'test';
    newModel.created = 'test';
    newModel.films = [];
    newModel.model = 'test';
    newModel.costInCredits = 1;
    newModel.manufacturer = 'test';

    expect(newModel.name === 'test').toBeTruthy();
    expect(newModel.imgUrl === 'test').toBeTruthy();
    expect(newModel.hyperdriveRating === 'test').toBeTruthy();
    expect(newModel.url === 'test').toBeTruthy();
    expect(newModel.edited === 'test').toBeTruthy();
    expect(newModel.consumables === 'test').toBeTruthy();
    expect(newModel.starshipClass === 'test').toBeTruthy();
    expect(newModel.created === 'test').toBeTruthy();
    expect(newModel.model === 'test').toBeTruthy();
    expect(newModel.manufacturer === 'test').toBeTruthy();
    expect(newModel.passengers === 1).toBeTruthy();
    expect(newModel.id === 1).toBeTruthy();
    expect(newModel.cargoCapacity === 1).toBeTruthy();
    expect(newModel.maxAtmospheringSpeed === 1).toBeTruthy();
    expect(newModel.crew === 1).toBeTruthy();
    expect(newModel.length === 1).toBeTruthy();
    expect(newModel.MGLT === 1).toBeTruthy();
    expect(newModel.costInCredits === 1).toBeTruthy();
    expect(Array.isArray(newModel.pilots)).toBeTruthy();
    expect(Array.isArray(newModel.films)).toBeTruthy();
  });
});
