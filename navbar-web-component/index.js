import singleSpaHtml from 'single-spa-html';
import WepComponent from './web-component';
import './styles.css';

customElements.define('web-component', WepComponent);

const htmlLifecycles = singleSpaHtml({
  template: '<web-component></web-component>',
  domElementGetter:  () => document.getElementById('navbar-web-component')
})

htmlLifecycles.originalMount = htmlLifecycles.mount;
htmlLifecycles.mount = function (opts, props) {
    return htmlLifecycles.originalMount(opts, props)
}.bind(htmlLifecycles);

export const { bootstrap, mount, unmount } = htmlLifecycles