import angular from 'angular';

import SupsModule from '../sups/sups.module'

import appComponent from './app.component';
// not 100% sure what the following line does.
const AppModule = angular.module('app', [
	SupsModule.name,
])
    .component('app', appComponent);

export default AppModule;
