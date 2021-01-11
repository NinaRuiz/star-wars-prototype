import {TestBed} from '@angular/core/testing';

import {ProfileService} from './profile.service';
import {log} from 'util';
import {Observable} from 'rxjs';
import {ProfileModel} from '../models/profile-model';

/**
 * Test List
 *  Create Method Test
 *    Validate correct creation of a profile
 *    Validate return an observable
 *    Validate when okey return a Profile Model
 *    Validate correct id assignation
 *    Validate when not unique username return an error
 *
 *  Login Method Test
 *    Validate return an observable
 *    Validate when okey return a Profile Model
 *    Validate when password wrong return an error
 *    Validate when user not found return an error
 *
 *  Get List Method Test
 *    Validate return an observable
 *    Validate return Profile Models
 *
 */

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileService);
  });

  // region good faith

  /**
   * Validate Create Method return an Observable
   */
  it('createTest validate return an observable', () => {
    const profileModel = new ProfileModel();
    profileModel.username = 'creationTest';
    profileModel.firstName = 'creation';
    profileModel.lastName = 'test';
    profileModel.password = 'a';

    const out = service.create(profileModel);
    expect(out instanceof Observable).toBeTruthy();
  });

  /**
   * Validate Create Method correct creation of a profile
   */
  it('createTest validate correct creation of a profile', () => {
    const profileModel = new ProfileModel();
    profileModel.username = 'creationTest2';
    profileModel.firstName = 'creation';
    profileModel.lastName = 'test';
    profileModel.password = 'a';

    service.create(profileModel).subscribe(
      (ok) => {
        expect(ok.username === 'creationTest2').toBeTruthy();
        expect(ok.firstName === 'creation').toBeTruthy();
        expect(ok.lastName === 'test').toBeTruthy();
        expect(ok.password === 'a').toBeTruthy();
        expect(ok.id).toBeGreaterThan(0);
      }
    );
  });

  /**
   * Validate Create Method return a ProfileModel
   */
  it('createTest validate return a ProfileModel', () => {
    const profileModel = new ProfileModel();
    profileModel.username = 'creationTest3';
    profileModel.firstName = 'creation';
    profileModel.lastName = 'test';
    profileModel.password = 'a';

    service.create(profileModel).subscribe(
      (ok) => {
        expect(ok).toBeInstanceOf(ProfileModel);
      }
    );
  });

  /**
   * Validate return of Login Method
   */
  it('loginTest validate return observable', () => {
    const loginTest = service.login('creationTest', 'a');
    expect(loginTest instanceof Observable).toBeTruthy();
  });

  /**
   * Validate Login Method return a Profile Model
   */
  it('loginTest validate login pass an user when login correctly', () => {
    let loginUser = null;

    service.login('creationTest', 'a').subscribe(
      (ok) => {
        loginUser = ok;
      }
    );

    expect(loginUser instanceof ProfileModel).toBeTruthy();
  });

  /**
   * Validate return of GetList Method
   */
  it('getListTest validate return observable', () => {
    const getListTest = service.getList();
    expect(getListTest instanceof Observable).toBeTruthy();
  });

  /**
   * Validate GetList return an array of ProfileModel
   */
  it('getListTest validate return an array', () => {
    let out = null;

    service.getList().subscribe(
      (ok) => {
        out = ok;
      }
    );

    expect(Array.isArray(out)).toBeTruthy();
  });

  // endregion good faith

  // region bad faith

  /**
   * Validate return error when pass the same username
   */
  it('createTest validate unique username', () => {
    const profileModel = new ProfileModel();
    profileModel.username = 'creationTest';
    profileModel.firstName = 'creation';
    profileModel.lastName = 'test';
    profileModel.password = 'a';

    service.create(profileModel).subscribe(
      (ok) => {

      },
      (ko) => {
        expect(ko.status === 'ERROR_UNIQUE').toBeTruthy();
      }
    );
  });

  /**
   * Validate Login Method when password wrong return an error
   */
  it('loginTest validate when password wrong return an error', () => {

    service.login('creationTest', 'a34').subscribe(
      (ok) => {

      },
      (ko) => {
        expect(ko.status === 'PASSWORD_WRONG');
      }
    );

  });

  /**
   * Validate Login Method when user not found return an error
   */
  it('loginTest validate when password wrong return an error', () => {

    service.login('creationTest56', 'a').subscribe(
      (ok) => {

      },
      (ko) => {
        expect(ko.status === 'NOT_FOUND');
      }
    );

  });

  // region bad faith

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
