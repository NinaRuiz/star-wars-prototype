import { ProfileModel } from './profile-model';

describe('ProfileModel', () => {
  it('should create an instance', () => {
    expect(new ProfileModel()).toBeTruthy();
  });

  it ('should populate a ProfileModel', () => {
    const profileModel = new ProfileModel();

    // Testing setters
    profileModel.username = 'test';
    profileModel.lastName = 'test';
    profileModel.firstName = 'test';
    profileModel.password = 'test';
    profileModel.id = 1;

    // Testing getters
    expect(profileModel.username === 'test').toBeTruthy();
    expect(profileModel.lastName === 'test').toBeTruthy();
    expect(profileModel.firstName === 'test').toBeTruthy();
    expect(profileModel.password === 'test').toBeTruthy();
    expect(profileModel.id === 1).toBeTruthy();
  });
});
