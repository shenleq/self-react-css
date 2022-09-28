import { Navigate } from 'react-router-dom'
import Bar from '../components/Echarts/Bar'
import LineEcharts from '../components/Echarts/LineChart'
import SmoothedLineChart from '../components/Echarts/SmoothedLineChart'
import TransverseChart from '../components/Echarts/TransverseChart'
import Pie from '../components/Echarts/Pie'
import Self from '../components/Echarts/Slfe'
import Video from '../components/Video'
// import ReactStudy from '../pages/ReactStudy'
// import StudyCss from '../pages/studyCss'


export default [
      {
        path:'/Bar',
        element:<Bar key="Bar"/>
      },
      { 
        path:'/LineEcharts',
        element:<LineEcharts key="LineEcharts"/>
      },
      {
        path:'/SmoothedLineChart',
        element:<SmoothedLineChart key="SmoothedLineChart"/>
      },
      {
        path:'/TransverseChart',
        element:<TransverseChart key='TransverseChart'/>
      },
      {
        key:'Pie',
        path:'/Pie',
        element:<Pie key='Pie'/>
      },
      {
        path:'/Self',
        element:<Self key="Self"/>
      },
      {
        path:'/Video',
        key:'Video',
        element:<Video key="Video"/>
      },
      {
        path:'/',
        element:<Navigate to="/Bar"/>
      },

  // {
  //   path:"/study-css",
  //   element:<StudyCss key="study-css"/>
  // }
]


// L.Popup1 = L.Popup.extend({
//   _initLayout: function () {
//     var prefix = 'leaflet-popup',
//         container = this._container = L.DomUtil.create('div',
//       prefix + ' ' + (this.options.className || '') +
//       ' leaflet-zoom-animated');
  
//     var wrapper = this._wrapper = L.DomUtil.create('div', prefix + '-content-wrapper', container);
//     this._contentNode = L.DomUtil.create('div', prefix + '-content', wrapper);
  
//     L.DomEvent.disableClickPropagation(container);
//     L.DomEvent.disableScrollPropagation(this._contentNode);
//     L.DomEvent.on(container, 'contextmenu', L.DomEvent.stopPropagation);
  
//     this._tipContainer = L.DomUtil.create('div', prefix + '-tip-container', container);
//     this._tip = L.DomUtil.create('div', prefix + '-tip', this._tipContainer);
  
//     if (this.options.closeButton) {
//       var closeButton = this._closeButton = L.DomUtil.create('span', prefix + '-close-button', container);
//       closeButton.setAttribute('role', 'button'); // overrides the implicit role=link of <a> elements #7399
//       closeButton.setAttribute('aria-label', 'Close popup');
//       // closeButton.href = '#close';
//       closeButton.innerHTML = '<span aria-hidden="true">&#215;</span>';
  
//       L.DomEvent.on(closeButton, 'click', this.close, this);
//     }
//   }
// })

//   L.popup1 = function (options, source) {
//   	return new L.Popup1(options, source);
//   };

//   L.popup1()
//    .setLatLng([36.07685215551436 , 118.34609985351564])
//     .setContent("I am a standalone popup1.").openOn(map);
