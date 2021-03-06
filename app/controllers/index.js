import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @service('router') router;

  @action
  submitForm() {
    this.router.transitionTo('authenticated');
  }
}
