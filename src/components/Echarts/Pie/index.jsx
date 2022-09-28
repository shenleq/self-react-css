import React, {useEffect} from 'react'
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';


export default function Pie() {
  useEffect(() => {
    echarts.use([
      TitleComponent,
      TooltipComponent,
      LegendComponent,
      PieChart,
      CanvasRenderer,
      LabelLayout
    ]);
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
      title: {
        text: '机动车违规行驶',
        subtext: '违章数据',
        left: 'center'
      },
    tooltip:{
      triggerEvent:"item"
    },
      // legend: {
      //   orient: 'vertical',
      //   left: 'left'
      // },
      series: [
        {
          // name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '违章停车' },
            { value: 735, name: '骑行不戴头盔' },
            { value: 580, name: '机动车违反信号灯规定' },
            { value: 484, name: '不按导向行驶' },
            { value: 300, name: '客货分道' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    option && myChart.setOption(option);
  })
  return (
    <div id='main' className='echarts'></div>
  )
}
