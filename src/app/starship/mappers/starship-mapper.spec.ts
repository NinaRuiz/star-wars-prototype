import {StarshipMapper} from './starship-mapper';
import {map} from 'rxjs/operators';
import {StarshipModel} from '../models/starship-model';
import {StarshipListModel} from '../models/starship-list-model';

/**
 * Test List
 *  Map Method
 *    Map a correct starship json
 *    Set undefined on missing properties
 *
 *  MapList Method
 *    Map a correct starship list json
 */
describe('StarshipMapper', () => {
  it('should create an instance', () => {
    expect(new StarshipMapper()).toBeTruthy();
  });

  /**
   * Validate correct mapping of StarshipModel
   */
  it('mapMethodTest validate correct mapping', () => {
    const jsonString = '{\n' +
      '      "name": "CR90 corvette",\n' +
      '      "model": "CR90 corvette",\n' +
      '      "manufacturer": "Corellian Engineering Corporation",\n' +
      '      "cost_in_credits": "3500000",\n' +
      '      "length": "150",\n' +
      '      "max_atmosphering_speed": "950",\n' +
      '      "crew": "30-165",\n' +
      '      "passengers": "600",\n' +
      '      "cargo_capacity": "3000000",\n' +
      '      "consumables": "1 year",\n' +
      '      "hyperdrive_rating": "2.0",\n' +
      '      "MGLT": "60",\n' +
      '      "starship_class": "corvette",\n' +
      '      "pilots": [],\n' +
      '      "films": [\n' +
      '        "http://swapi.dev/api/films/1/",\n' +
      '        "http://swapi.dev/api/films/3/",\n' +
      '        "http://swapi.dev/api/films/6/"\n' +
      '      ],\n' +
      '      "created": "2014-12-10T14:20:33.369000Z",\n' +
      '      "edited": "2014-12-20T21:23:49.867000Z",\n' +
      '      "url": "http://swapi.dev/api/starships/2/"\n' +
      '    }';
    const out = StarshipMapper.map(JSON.parse(jsonString));

    expect(out).toBeInstanceOf(StarshipModel);
  });

  /**
   * Validate correct mapping of StarshipListModel
   */
  it('mapListMethodTest validate correct mapping', () => {
    const jsonString = '{\n' +
      '  "count": 36,\n' +
      '  "next": "http://swapi.dev/api/starships/?page=2",\n' +
      '  "previous": null,\n' +
      '  "results": [\n' +
      '    {\n' +
      '      "name": "CR90 corvette",\n' +
      '      "model": "CR90 corvette",\n' +
      '      "manufacturer": "Corellian Engineering Corporation",\n' +
      '      "cost_in_credits": "3500000",\n' +
      '      "length": "150",\n' +
      '      "max_atmosphering_speed": "950",\n' +
      '      "crew": "30-165",\n' +
      '      "passengers": "600",\n' +
      '      "cargo_capacity": "3000000",\n' +
      '      "consumables": "1 year",\n' +
      '      "hyperdrive_rating": "2.0",\n' +
      '      "MGLT": "60",\n' +
      '      "starship_class": "corvette",\n' +
      '      "pilots": [],\n' +
      '      "films": [\n' +
      '        "http://swapi.dev/api/films/1/",\n' +
      '        "http://swapi.dev/api/films/3/",\n' +
      '        "http://swapi.dev/api/films/6/"\n' +
      '      ],\n' +
      '      "created": "2014-12-10T14:20:33.369000Z",\n' +
      '      "edited": "2014-12-20T21:23:49.867000Z",\n' +
      '      "url": "http://swapi.dev/api/starships/2/"\n' +
      '    },\n' +
      '    {\n' +
      '      "name": "Star Destroyer",\n' +
      '      "model": "Imperial I-class Star Destroyer",\n' +
      '      "manufacturer": "Kuat Drive Yards",\n' +
      '      "cost_in_credits": "150000000",\n' +
      '      "length": "1,600",\n' +
      '      "max_atmosphering_speed": "975",\n' +
      '      "crew": "47,060",\n' +
      '      "passengers": "n/a",\n' +
      '      "cargo_capacity": "36000000",\n' +
      '      "consumables": "2 years",\n' +
      '      "hyperdrive_rating": "2.0",\n' +
      '      "MGLT": "60",\n' +
      '      "starship_class": "Star Destroyer",\n' +
      '      "pilots": [],\n' +
      '      "films": [\n' +
      '        "http://swapi.dev/api/films/1/",\n' +
      '        "http://swapi.dev/api/films/2/",\n' +
      '        "http://swapi.dev/api/films/3/"\n' +
      '      ],\n' +
      '      "created": "2014-12-10T15:08:19.848000Z",\n' +
      '      "edited": "2014-12-20T21:23:49.870000Z",\n' +
      '      "url": "http://swapi.dev/api/starships/3/"\n' +
      '    },\n' +
      '    {\n' +
      '      "name": "Sentinel-class landing craft",\n' +
      '      "model": "Sentinel-class landing craft",\n' +
      '      "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",\n' +
      '      "cost_in_credits": "240000",\n' +
      '      "length": "38",\n' +
      '      "max_atmosphering_speed": "1000",\n' +
      '      "crew": "5",\n' +
      '      "passengers": "75",\n' +
      '      "cargo_capacity": "180000",\n' +
      '      "consumables": "1 month",\n' +
      '      "hyperdrive_rating": "1.0",\n' +
      '      "MGLT": "70",\n' +
      '      "starship_class": "landing craft",\n' +
      '      "pilots": [],\n' +
      '      "films": [\n' +
      '        "http://swapi.dev/api/films/1/"\n' +
      '      ],\n' +
      '      "created": "2014-12-10T15:48:00.586000Z",\n' +
      '      "edited": "2014-12-20T21:23:49.873000Z",\n' +
      '      "url": "http://swapi.dev/api/starships/5/"\n' +
      '    },\n' +
      '    {\n' +
      '      "name": "Death Star",\n' +
      '      "model": "DS-1 Orbital Battle Station",\n' +
      '      "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",\n' +
      '      "cost_in_credits": "1000000000000",\n' +
      '      "length": "120000",\n' +
      '      "max_atmosphering_speed": "n/a",\n' +
      '      "crew": "342,953",\n' +
      '      "passengers": "843,342",\n' +
      '      "cargo_capacity": "1000000000000",\n' +
      '      "consumables": "3 years",\n' +
      '      "hyperdrive_rating": "4.0",\n' +
      '      "MGLT": "10",\n' +
      '      "starship_class": "Deep Space Mobile Battlestation",\n' +
      '      "pilots": [],\n' +
      '      "films": [\n' +
      '        "http://swapi.dev/api/films/1/"\n' +
      '      ],\n' +
      '      "created": "2014-12-10T16:36:50.509000Z",\n' +
      '      "edited": "2014-12-20T21:26:24.783000Z",\n' +
      '      "url": "http://swapi.dev/api/starships/9/"\n' +
      '    },\n' +
      '    {\n' +
      '      "name": "Millennium Falcon",\n' +
      '      "model": "YT-1300 light freighter",\n' +
      '      "manufacturer": "Corellian Engineering Corporation",\n' +
      '      "cost_in_credits": "100000",\n' +
      '      "length": "34.37",\n' +
      '      "max_atmosphering_speed": "1050",\n' +
      '      "crew": "4",\n' +
      '      "passengers": "6",\n' +
      '      "cargo_capacity": "100000",\n' +
      '      "consumables": "2 months",\n' +
      '      "hyperdrive_rating": "0.5",\n' +
      '      "MGLT": "75",\n' +
      '      "starship_class": "Light freighter",\n' +
      '      "pilots": [\n' +
      '        "http://swapi.dev/api/people/13/",\n' +
      '        "http://swapi.dev/api/people/14/",\n' +
      '        "http://swapi.dev/api/people/25/",\n' +
      '        "http://swapi.dev/api/people/31/"\n' +
      '      ],\n' +
      '      "films": [\n' +
      '        "http://swapi.dev/api/films/1/",\n' +
      '        "http://swapi.dev/api/films/2/",\n' +
      '        "http://swapi.dev/api/films/3/"\n' +
      '      ],\n' +
      '      "created": "2014-12-10T16:59:45.094000Z",\n' +
      '      "edited": "2014-12-20T21:23:49.880000Z",\n' +
      '      "url": "http://swapi.dev/api/starships/10/"\n' +
      '    },\n' +
      '    {\n' +
      '      "name": "Y-wing",\n' +
      '      "model": "BTL Y-wing",\n' +
      '      "manufacturer": "Koensayr Manufacturing",\n' +
      '      "cost_in_credits": "134999",\n' +
      '      "length": "14",\n' +
      '      "max_atmosphering_speed": "1000km",\n' +
      '      "crew": "2",\n' +
      '      "passengers": "0",\n' +
      '      "cargo_capacity": "110",\n' +
      '      "consumables": "1 week",\n' +
      '      "hyperdrive_rating": "1.0",\n' +
      '      "MGLT": "80",\n' +
      '      "starship_class": "assault starfighter",\n' +
      '      "pilots": [],\n' +
      '      "films": [\n' +
      '        "http://swapi.dev/api/films/1/",\n' +
      '        "http://swapi.dev/api/films/2/",\n' +
      '        "http://swapi.dev/api/films/3/"\n' +
      '      ],\n' +
      '      "created": "2014-12-12T11:00:39.817000Z",\n' +
      '      "edited": "2014-12-20T21:23:49.883000Z",\n' +
      '      "url": "http://swapi.dev/api/starships/11/"\n' +
      '    },\n' +
      '    {\n' +
      '      "name": "X-wing",\n' +
      '      "model": "T-65 X-wing",\n' +
      '      "manufacturer": "Incom Corporation",\n' +
      '      "cost_in_credits": "149999",\n' +
      '      "length": "12.5",\n' +
      '      "max_atmosphering_speed": "1050",\n' +
      '      "crew": "1",\n' +
      '      "passengers": "0",\n' +
      '      "cargo_capacity": "110",\n' +
      '      "consumables": "1 week",\n' +
      '      "hyperdrive_rating": "1.0",\n' +
      '      "MGLT": "100",\n' +
      '      "starship_class": "Starfighter",\n' +
      '      "pilots": [\n' +
      '        "http://swapi.dev/api/people/1/",\n' +
      '        "http://swapi.dev/api/people/9/",\n' +
      '        "http://swapi.dev/api/people/18/",\n' +
      '        "http://swapi.dev/api/people/19/"\n' +
      '      ],\n' +
      '      "films": [\n' +
      '        "http://swapi.dev/api/films/1/",\n' +
      '        "http://swapi.dev/api/films/2/",\n' +
      '        "http://swapi.dev/api/films/3/"\n' +
      '      ],\n' +
      '      "created": "2014-12-12T11:19:05.340000Z",\n' +
      '      "edited": "2014-12-20T21:23:49.886000Z",\n' +
      '      "url": "http://swapi.dev/api/starships/12/"\n' +
      '    },\n' +
      '    {\n' +
      '      "name": "TIE Advanced x1",\n' +
      '      "model": "Twin Ion Engine Advanced x1",\n' +
      '      "manufacturer": "Sienar Fleet Systems",\n' +
      '      "cost_in_credits": "unknown",\n' +
      '      "length": "9.2",\n' +
      '      "max_atmosphering_speed": "1200",\n' +
      '      "crew": "1",\n' +
      '      "passengers": "0",\n' +
      '      "cargo_capacity": "150",\n' +
      '      "consumables": "5 days",\n' +
      '      "hyperdrive_rating": "1.0",\n' +
      '      "MGLT": "105",\n' +
      '      "starship_class": "Starfighter",\n' +
      '      "pilots": [\n' +
      '        "http://swapi.dev/api/people/4/"\n' +
      '      ],\n' +
      '      "films": [\n' +
      '        "http://swapi.dev/api/films/1/"\n' +
      '      ],\n' +
      '      "created": "2014-12-12T11:21:32.991000Z",\n' +
      '      "edited": "2014-12-20T21:23:49.889000Z",\n' +
      '      "url": "http://swapi.dev/api/starships/13/"\n' +
      '    },\n' +
      '    {\n' +
      '      "name": "Executor",\n' +
      '      "model": "Executor-class star dreadnought",\n' +
      '      "manufacturer": "Kuat Drive Yards, Fondor Shipyards",\n' +
      '      "cost_in_credits": "1143350000",\n' +
      '      "length": "19000",\n' +
      '      "max_atmosphering_speed": "n/a",\n' +
      '      "crew": "279,144",\n' +
      '      "passengers": "38000",\n' +
      '      "cargo_capacity": "250000000",\n' +
      '      "consumables": "6 years",\n' +
      '      "hyperdrive_rating": "2.0",\n' +
      '      "MGLT": "40",\n' +
      '      "starship_class": "Star dreadnought",\n' +
      '      "pilots": [],\n' +
      '      "films": [\n' +
      '        "http://swapi.dev/api/films/2/",\n' +
      '        "http://swapi.dev/api/films/3/"\n' +
      '      ],\n' +
      '      "created": "2014-12-15T12:31:42.547000Z",\n' +
      '      "edited": "2014-12-20T21:23:49.893000Z",\n' +
      '      "url": "http://swapi.dev/api/starships/15/"\n' +
      '    },\n' +
      '    {\n' +
      '      "name": "Rebel transport",\n' +
      '      "model": "GR-75 medium transport",\n' +
      '      "manufacturer": "Gallofree Yards, Inc.",\n' +
      '      "cost_in_credits": "unknown",\n' +
      '      "length": "90",\n' +
      '      "max_atmosphering_speed": "650",\n' +
      '      "crew": "6",\n' +
      '      "passengers": "90",\n' +
      '      "cargo_capacity": "19000000",\n' +
      '      "consumables": "6 months",\n' +
      '      "hyperdrive_rating": "4.0",\n' +
      '      "MGLT": "20",\n' +
      '      "starship_class": "Medium transport",\n' +
      '      "pilots": [],\n' +
      '      "films": [\n' +
      '        "http://swapi.dev/api/films/2/",\n' +
      '        "http://swapi.dev/api/films/3/"\n' +
      '      ],\n' +
      '      "created": "2014-12-15T12:34:52.264000Z",\n' +
      '      "edited": "2014-12-20T21:23:49.895000Z",\n' +
      '      "url": "http://swapi.dev/api/starships/17/"\n' +
      '    }\n' +
      '  ]\n' +
      '}';

    const out = StarshipMapper.mapList(JSON.parse(jsonString));

    expect(out).toBeInstanceOf(StarshipListModel);
  });

  /**
   * Validate undefined on missing properties of StarshipModel
   */
  it('mapMethodTest validate undefined on missing properties', () => {
    const jsonString = '{\n' +
      '      "name": "CR90 corvette",\n' +
      '      "model": "CR90 corvette",\n' +
      '      "manufacturer": "Corellian Engineering Corporation",\n' +
      '      "cost_in_credits": "3500000",\n' +
      '      "max_atmosphering_speed": "950",\n' +
      '      "crew": "30-165",\n' +
      '      "passengers": "600",\n' +
      '      "cargo_capacity": "3000000",\n' +
      '      "consumables": "1 year",\n' +
      '      "hyperdrive_rating": "2.0",\n' +
      '      "MGLT": "60",\n' +
      '      "starship_class": "corvette",\n' +
      '      "pilots": [],\n' +
      '      "films": [\n' +
      '        "http://swapi.dev/api/films/1/",\n' +
      '        "http://swapi.dev/api/films/3/",\n' +
      '        "http://swapi.dev/api/films/6/"\n' +
      '      ],\n' +
      '      "created": "2014-12-10T14:20:33.369000Z",\n' +
      '      "edited": "2014-12-20T21:23:49.867000Z",\n' +
      '      "url": "http://swapi.dev/api/starships/2/"\n' +
      '    }';
    const out = StarshipMapper.map(JSON.parse(jsonString));

    expect(out.length).toBeUndefined();
  });
});
