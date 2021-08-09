import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service shoppingCart;

  get subtotal() {
    return this.shoppingCart.items.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }

  get tax() {
    return 0.09 * this.subtotal;
  }

  get total() {
    return this.tax + this.subtotal;
  }

  @action
  updateInput(item, event) {
    const ct = event.target.value;
    if (ct >= 0) {
      item.count = +ct;
    } else {
      item.count = 0;
      event.target.value = 0;
    }
  }
}
