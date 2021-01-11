import { StarshipListModel } from './starship-list-model';

/**
 * Test List
 *  Test setters
 *  Test getters
 */
describe('StarshipListModel', () => {
  it('should create an instance', () => {
    expect(new StarshipListModel()).toBeTruthy();
  });

  it('StarshipListModelTest validate getters and setters', () => {
    const newList = new StarshipListModel();
    newList.totalElements = 1;
    newList.pageSize = 10;
    newList.starshipList = [];
    newList.numberOfElements = 1;
    newList.size = 10;
    newList.pageNumber = 1;
    newList.totalPages = 10;

    expect(newList.totalElements === 1).toBeTruthy();
    expect(newList.numberOfElements === 1).toBeTruthy();
    expect(newList.pageNumber === 1).toBeTruthy();
    expect(newList.pageSize === 10).toBeTruthy();
    expect(newList.totalPages === 10).toBeTruthy();
    expect(newList.size === 10).toBeTruthy();
    expect(Array.isArray(newList.starshipList)).toBeTruthy();
  });
});
