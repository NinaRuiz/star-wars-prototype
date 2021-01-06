export class StarshipModel {

  /**
   * Passengers property
   *
   * The number of non-essential people this starship can transport.
   *
   * @private
   */
  private _passengers: number;

  get passengers(): number {
    return this._passengers;
  }

  set passengers(value: number) {
    this._passengers = value;
  }

  /**
   * Pilots property
   *
   * An array of People URL Resources that this starship has been piloted by.
   *
   * @private
   */
  private _pilots: [];

  get pilots(): [] {
    return this._pilots;
  }

  set pilots(value: []) {
    this._pilots = value;
  }

  /**
   * Name property
   *
   * The name of this starship. The common name, such as Death Star.
   *
   * @private
   */
  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  /**
   * Hyperdrive Rating property
   *
   * The class of this starships hyperdrive.
   *
   * @private
   */
  private _hyperdriveRating: string;

  get hyperdriveRating(): string {
    return this._hyperdriveRating;
  }

  set hyperdriveRating(value: string) {
    this._hyperdriveRating = value;
  }

  /**
   * URL property
   *
   * The hypermedia URL of this resource.
   *
   * @private
   */
  private _url: string;

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  /**
   * Cargo Capacity property
   *
   * The maximum number of kilograms that this starship can transport.
   *
   * @private
   */
  private _cargoCapacity: number;

  get cargoCapacity(): number {
    return this._cargoCapacity;
  }

  set cargoCapacity(value: number) {
    this._cargoCapacity = value;
  }

  /**
   * Edited property
   *
   * The ISO 8601 date format of the time that this resource was edited.
   *
   * @private
   */
  private _edited: string;

  get edited(): string {
    return this._edited;
  }

  set edited(value: string) {
    this._edited = value;
  }

  /**
   * Consumables property
   *
   * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
   *
   * @private
   */
  private _consumables: string;

  get consumables(): string {
    return this._consumables;
  }

  set consumables(value: string) {
    this._consumables = value;
  }

  /**
   * Max Atmosphering Speed property
   *
   * The maximum speed of this starship in atmosphere. n/a if this starship is incapable of atmosphering flight.
   *
   * @private
   */
  private _maxAtmospheringSpeed: number;

  get maxAtmospheringSpeed(): number {
    return this._maxAtmospheringSpeed;
  }

  set maxAtmospheringSpeed(value: number) {
    this._maxAtmospheringSpeed = value;
  }

  /**
   * Crew property
   *
   * The number of personnel needed to run or pilot this starship.
   *
   * @private
   */
  private _crew: number;

  get crew(): number {
    return this._crew;
  }

  set crew(value: number) {
    this._crew = value;
  }

  /**
   * Length property
   *
   * The length of this starship in meters.
   *
   * @private
   */
  private _length: number;

  get length(): number {
    return this._length;
  }

  set length(value: number) {
    this._length = value;
  }

  /**
   * MGLT property
   *
   * The Maximum number of Megalights this starship can travel in a standard hour. A Megalight is a standard unit of distance and has
   * never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed
   * of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
   *
   * @private
   */
  private _MGLT: number;

  get MGLT(): number {
    return this._MGLT;
  }

  set MGLT(value: number) {
    this._MGLT = value;
  }

  /**
   * Starship Class property
   *
   * The class of this starship, such as Starfighter or Deep Space Mobile Battlestation.
   *
   * @private
   */
  private _starshipClass: string;

  get starshipClass(): string {
    return this._starshipClass;
  }

  set starshipClass(value: string) {
    this._starshipClass = value;
  }

  /**
   * Created property
   *
   * The ISO 8601 date format of the time that this resource was created.
   *
   * @private
   */
  private _created: string;

  get created(): string {
    return this._created;
  }

  set created(value: string) {
    this._created = value;
  }

  /**
   * Films property
   *
   * An array of Film URL Resources that this starship has appeared in.
   *
   * @private
   */
  private _films: [];

  get films(): [] {
    return this._films;
  }

  set films(value: []) {
    this._films = value;
  }

  /**
   * Model property
   *
   * The model or official name of this starship. Such as T-65 X-wing or DS-1 Orbital Battle Station.
   *
   * @private
   */
  private _model: string;

  get model(): string {
    return this._model;
  }

  set model(value: string) {
    this._model = value;
  }

  /**
   * Cost In Credits property
   *
   * The cost of this starship new, in galactic credits.
   *
   * @private
   */
  private _costInCredits: number;

  get costInCredits(): number {
    return this._costInCredits;
  }

  set costInCredits(value: number) {
    this._costInCredits = value;
  }

  /**
   * Manu Facturer property
   *
   * The manufacturer of this starship. Comma seperated if more than one.
   *
   * @private
   */
  private _manufacturer: string;

  get manufacturer(): string {
    return this._manufacturer;
  }

  set manufacturer(value: string) {
    this._manufacturer = value;
  }

  constructor() {
  }
}
