import {Injectable} from '@angular/core';
import {ProfileModel} from '../models/profile-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() {
  }

  // region rest functions

  /**
   *
   */
  login(username: string, password: string): Observable<ProfileModel> {
    return new Observable(
      observer => {
        this.getList().subscribe(
          (next: ProfileModel[]) => {
            const profileModels = next;
            let user: ProfileModel = null;

            profileModels.forEach(
              profileModel => {
                if (profileModel.username === username) {
                  user = profileModel;
                }
              }
            );

            if (user === null) {
              observer.error({
                status: 'NOT_FOUND',
                message: 'User not found.'
              });
            } else {
              if (user.password === password) {
                observer.next(user);
              } else {
                observer.error({
                  status: 'PASSWORD_WRONG',
                  message: 'Passwords doesn\'t match.'
                });
              }
            }
          },
          (err) => {
            observer.error(err);
          }
        );
      }
    );
  }

  /**
   *
   */
  getList() {
    return new Observable(
      (observer) => {

        let profileModels: ProfileModel[] = [];

        const jsonString = localStorage.getItem('users');

        if (jsonString === null) {
          profileModels = [];
        } else {
          const jsonUsers = JSON.parse(jsonString);

          jsonUsers.forEach(
            user => {
              const profile = new ProfileModel();
              profile.id = user._id;
              profile.username = user._username;
              profile.firstName = user._firstName;
              profile.lastName = user._lastName;
              profile.password = user._password;
              profileModels.push(profile);
            }
          );
        }

        observer.next(profileModels);
        observer.complete();
      }
    );
  }

  /**
   *
   */
  getById() {

  }

  /**
   *
   */
  create(user: ProfileModel): Observable<ProfileModel> {
    return new Observable(
      observer => {

        // Get users list
        this.getList().subscribe(
          (next: ProfileModel[]) => {

            // Variables
            let unique = true;
            const profileArray = next;

            profileArray.forEach(
              profileModel => {
                console.log(profileModel);
                if (profileModel.username === user.username) {
                  unique = false;
                }
              }
            );

            if (profileArray.length === 0) {
              unique = true;
            }

            // If username is the same of another one
            if (!unique) {
              observer.error({status: 'ERROR_UNIQUE', message: 'UNIQUE: Username is not unique'});
            } else {
              user.id = profileArray.length + 1;
              profileArray.push(user);
              localStorage.removeItem('users');
              localStorage.setItem('users', JSON.stringify(profileArray));
              observer.next(user);
            }

          }
        );
        observer.complete();
      }
    );
  }

  /**
   *
   */
  delete() {

  }

  /**
   *
   */
  update() {

  }

  // endregion rest functions
}
