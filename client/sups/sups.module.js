import angular from 'angular';

import supsPageComponent from './sups-page.component';
import supsItemComponent from './sups-item.component';
const SupsModule = angular.module('sups', [
	])
	.component('supsPage', supsPageComponent)
	.component('supsPage', supsItemComponent);

export default SupsModule;