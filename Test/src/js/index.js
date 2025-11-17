import _ from 'lodash';
import '../scss/index.scss';
//npmimport showAlert from './alert';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

  
  //$('body').css({backgroundColor: 'pink'}); //jquery

 
