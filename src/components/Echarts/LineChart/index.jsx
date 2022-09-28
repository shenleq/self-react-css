import React from 'react'
import { useEffect } from 'react';

import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

export default function LineEcharts() {
    useEffect(() => {
        echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;
        
        option = {
          color:'#fff',
          gradientColor:'#f6f6f6',
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [160, 230, 224, 218, 135, 147, 260],
              type: 'line'
            }
          ]
        };
        option && myChart.setOption(option);
    })
    return (
      <div id='main' className='echarts'></div>
    )
  }