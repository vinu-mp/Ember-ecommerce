import Route from '@ember/routing/route';
import { products } from '../data/product';
export default class ItemRoute extends Route {
  model(params) {
    const { item_id } = params;
    const prod = products.find((item) => item.id === item_id);
    return prod;
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.colors[0].color;
  }
}
