import React, {useEffect, useState, memo} from 'react'
import L  from 'leaflet'
import 'leaflet/dist/leaflet.css';

var setMap, city, city2
export default function Leaflet(props) {
  let {cm, pan} = props
  //注意，这个State最好就不要和cm相同，原因在最后面
  const [controlM, setControlM] = useState(1)
  const [controlView, setControlView] = useState([39.908186, 116.397411])
  useEffect(() => {
    var mymap = L.map('map').setView(controlView,10);
    //底片
    L.tileLayer('http://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7',{
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
        subdomains: '1234'
    }).addTo(mymap);
    //自定义图标
    var myIcon = L.icon({
      iconUrl:"https://pic42.photophoto.cn/20170322/0470017311069082_b.jpg",
      iconSize: [32, 32],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      // shadowUrl: 'my-icon-shadow.png',
      // shadowSize: [68, 95],
      // shadowAnchor: [22, 94]
    });
    var LeafIcon = L.Icon.extend({
      options: { //定义了一个图标类
      // shadowUrl: 'http://mars2d.cn/forleaflet/docs/images/leaf-shadow.png',
      iconSize: [32, 32],   //注意,这里没设置图片
      // shadowSize: [50, 64],
      iconAnchor: [22, 94],
      // shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    }})
    var greenIcon = new LeafIcon({
      iconUrl: 'https://pic42.photophoto.cn/20170322/0470017311069082_b.jpg'
    });
    var redIcon = new LeafIcon({
      iconUrl: 'https://pic42.photophoto.cn/20170322/0470017311069082_b.jpg'
    });
    var orangeIcon = new LeafIcon({
      iconUrl: 'https://pic42.photophoto.cn/20170322/0470017311069082_b.jpg'
    });
  //添加标记
  var marker1 = L.marker([39.909186, 116.397411], 
    {icon:myIcon}).bindPopup("你好啊!我是小陈").openPopup()
  var marker2 = L.marker([39.925496, 112.397431], 
    {icon:greenIcon}).bindPopup("你好啊!我是小王").openPopup()
  var marker3 = L.marker([39.946216, 119.397423], 
    {icon:redIcon}).bindPopup("你好啊!我是小刘").openPopup()
  var marker4 = L.marker([36.964220, 110.397445], 
    {icon:orangeIcon}).bindPopup("你好啊!我是小李").openPopup()
  var markerP = L.marker([39.609186, 116.387411], 
    {icon:orangeIcon}).bindPopup("你好啊!我是D").openPopup()
  //添加线,二维数组是3个点的经纬度
  var latlngs = [
    [39.909184, 116.397412],
    [37.77, 117.43],
    [34.04, 120.2]
  ];
  var polyline = L.polyline(latlngs, {
    color: 'red'
  }).addTo(mymap);
  L.control.scale({maxWidth:300}).addTo(mymap)//比例尺
  //.removeTo(mymap)移除图层 
  mymap.fitBounds(polyline.getBounds());// 缩放地图到折线所在区域
  //在一个区域画一个圆
  var circle = L.circle([38.909184, 115.397412], 20000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
  })
  var polygon = L.polygon([
    [38.509, 113.08],
    [38, 113.06],
    [38.51, 112]
  ])
  var baseLayers = { //定义两个图层在baseLayers里
    //给地图设置底图addTo默认给他添加到地图上
    "OSM": L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap),
    'Sputnik': L.tileLayer('http://{s}.tiles.maps.sputnik.ru/{z}/{x}/{y}.png'),
  };
  L.control.layers(baseLayers, {}, {}).addTo(mymap);//注册一个控件,默认在左上角

    //创建一个marker的集合，这样就可以统一管理,名字是cities
    marker1.on('mouseover',function onmsover(e){  
	    //自定义一个需要展示的提示框popText
      var popText = '<div style="width: 40px;height: 20px;background-color: pink;color:"#fff">你好啊!</div>'
      //e.target就是当前触发移入事件的对象 绑定提示框popText 后面的{}可以设置一些参数详情看api文档.  openTooltip打开提示框
      e.target.bindTooltip(popText, {}).openTooltip();
    }); 
    markerP.on('mouseover',function onmsover(e){  
	    //自定义一个需要展示的提示框popText
      var popText = '<div style="width: 40px;height: 20px;background-color: pink;color:"#fff">你好啊!</div>'
      //e.target就是当前触发移入事件的对象 绑定提示框popText 后面的{}可以设置一些参数详情看api文档.  openTooltip打开提示框
      e.target.bindTooltip(popText, {}).openTooltip();
    }); 
    var cities1 = L.layerGroup([marker1, marker2, marker3, marker4]);
    city = cities1
    city2 = L.layerGroup([markerP]);
    var cities2 = L.layerGroup([polygon, circle]);
    // cities1.addTo(mymap)
    cities2.addTo(mymap)
    setMap = mymap
  },[])
  useEffect(() => {
    /**原因：改变State的值的set函数会把要改的指放入一个队列，
     * 不会马上就改变State，是异步的，
     * 会等待下一次执行时才把上一次执行的值改过去
     * **/
    setControlM(cm)
    if(controlM == 1){
      city.addTo(setMap)
    }
    else{
      setMap.removeLayer(city)
    }
  },[cm])
  useEffect(() => {
    setControlView(pan)
    setMap.setView(controlView)
    setMap.setZoom(8)
    city2.addTo(setMap)
    console.log(controlView)
  },[pan])
  return (
    <div id="map"></div>)
}

