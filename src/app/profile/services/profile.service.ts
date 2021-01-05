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
  login() {

  }

  /**
   *
   */
  getList() {
    return new Observable(
      (observer) => {
        const jsonUsers = JSON.parse(localStorage.getItem('users'));

        const profileModels: ProfileModel[] = [];

        jsonUsers.forEach(
          user => {
            const profile = new ProfileModel();
            profile.id = user._id;
            profile.firstName = user._firstName;
            profile.lastName = user._lastName;
            profile.password = user._password;
            profileModels.push(profile);
          }
        );

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
        this.getList().subscribe(
          (next: ProfileModel[]) => {

            let unique = true;
            const profileArray = next;

            profileArray.forEach(
              profileModel => {
                if (profileModel.username === user.username) {
                  unique = false;
                }
              }
            );

            if (unique === false) {
              observer.error({status: 'ERROR_UNIQUE', message: 'UNIQUE: Username is not unique'});
            }else{
              user.id = profileArray.length;
              profileArray.push(user);
              localStorage.removeItem('users');
              localStorage.setItem('users', JSON.stringify(profileArray));
            }

          }
        );
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
