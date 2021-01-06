import {StarshipModel} from '../models/starship-model';
import {StarshipListModel} from '../models/starship-list-model';

export class StarshipMapper {

  static map(response): StarshipModel {
    const model = new StarshipModel();

    const keys = Object.keys(response);
    const values = Object.values(response);

    for (let i = 0; i < keys.length; i++) {
      if (keys[i].substring(0, 1) === '_') {
        model[keys[i]] = values[i];
      } else {
        model['_' + keys[i]] = values[i];
      }
    }

    let id = model.url.substring(model.url.length - 2, model.url.length - 1);
    model.id = parseInt(id);
    model.imgUrl = 'https://starwars-visualguide.com/assets/img/starships/' + model.id + '.jpg';

    return model;
  }

  static mapList(response): StarshipListModel {

    const out = [];

    for (const starshipRequest of response.results) {
      out.push(
        this.map(starshipRequest)
      );
    }

    const list = new StarshipListModel();

    list.pageSize = 10;
    if (response.next !== null ){
      list.pageNumber = response.next.substring(response.next.length - 1);
    } else {

    }
    list.totalPages = response.count / list.pageSize;
    list.totalElements = response.count;
    list.size = 10;
    list.numberOfElements = 10;

    list.starshipList = out;

    return list;
  }

}
