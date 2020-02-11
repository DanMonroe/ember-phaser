import Service from '@ember/service';

export default class GameService extends Service {

  bulletFired(bullet) {
    console.log("Look out, it's a", bullet);
  }

}
