import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class HocComponent extends Component {
  @service shoppingCart;

  get totalCount() {
    console.log('accVAlue', this.shoppingCart.items);
    return this.shoppingCart.items.reduce((acc, item) => {
      acc += item.count;
      console.log('accVAlue', acc);
      return acc;
    }, 0);
  }
}
