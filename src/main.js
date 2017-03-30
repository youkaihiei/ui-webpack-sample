import jQuery from 'jquery';
import Form from './js/form';
import Global from './js/global';
import Home from './js/home';
import Sidebar from './js/sidebar';
let path = require('path');
require('bootstrap-sass');
require('./css/style.scss');

new Form();
new Global();
new Home();
new Sidebar();