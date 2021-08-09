import Component from '@glimmer/component';

export default class ProductComponent extends Component {
  productImg = this.args.product.colors[0].image;
}
