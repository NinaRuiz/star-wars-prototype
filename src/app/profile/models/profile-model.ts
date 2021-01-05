export class ProfileModel {

  /**
   * Property id of type number
   *
   * @private
   */
  private _id: number;

  /**
   * Return id value
   */
  get id(): number {
    return this._id;
  }

  /**
   *
   * @param value for id property
   */
  set id(value: number) {
    this._id = value;
  }

  /**
   * Property firstName of type string
   *
   * @private
   */
  private _firstName: string;

  /**
   * Return firstName value
   */
  get firstName(): string {
    return this._firstName;
  }

  /**
   *
   * @param value for firstName property
   */
  set firstName(value: string) {
    this._firstName = value;
  }

  /**
   * Property lastName of type string
   *
   * @private
   */
  private _lastName: string;

  /**
   * Return lastName value
   */
  get lastName(): string {
    return this._lastName;
  }

  /**
   *
   * @param value for lastName property
   */
  set lastName(value: string) {
    this._lastName = value;
  }

  /**
   * Property password of type string
   *
   * @private
   */
  private _password: string;

  /**
   * Return password value
   */
  get password(): string {
    return this._password;
  }

  /**
   *
   * @param value for password property
   */
  set password(value: string) {
    this._password = value;
  }

  /**
   * Property username of type string
   *
   * @private
   */
  private _username: string;

  /**
   * Return username value
   */
  get username(): string {
    return this._username;
  }

  /**
   *
   * @param value for username property
   */
  set username(value: string) {
    this._username = value;
  }

  /**
   * Empty constructor for ProfileModel,
   * all properties are optionals
   */
  constructor() {
  }
}
