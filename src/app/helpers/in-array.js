import Ember from 'ember';

export function inArray(params) {
  return params[0].indexOf(params[1]) > -1;
}

export default Ember.Helper.helper(inArray);
