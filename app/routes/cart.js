import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ price: 15 }, { price: 10 }];
    return items;
  }
}
