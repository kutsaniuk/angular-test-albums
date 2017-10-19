import angular from 'angular';
import Navbar from './navbar/navbar';
import AddVideo from './add/add';

export default angular.module('app.common', [
  Navbar.name,
  AddVideo.name
]);
