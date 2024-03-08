import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { data } from './mockData';

const App = () => {
  return (
    <ResponsiveContainer width='100%' height={275}>
      <AreaChart
        width={1330}
        height={275}
        data={data}
        margin={{ top: 20, right: 50, left: 20, bottom: 30 }}
      >
        <defs>
          <linearGradient
              id='colorUv'
              x1='0'
              y1='0'
              x2='0'
              y2='1'
          >
            <stop offset='0%' stopColor='#A3B6D8' stopOpacity={0.8}/>
            <stop offset='100%' stopColor='#A3B6D8' stopOpacity={0}/>
          </linearGradient>
        </defs>
          <XAxis
            dataKey='time'
            angle={0} // 刻度值的角度
            axisLine={false} // x 軸(粗)
            tickLine={true} // 刻度
            tickMargin={10} // 刻度數值 margin top
            minTickGap={30} // 刻度之間最小的間隔寬度
            tick={props => {
              // console.log(`props: ${JSON.stringify(props)}`)
              const { x, y, payload, index } = props
              // {
              //   "textAnchor":"middle",
              //   "verticalAnchor":"start",
              //   "angle":0,
              //   "orientation":"bottom",
              //   "width":1240,
              //   "height":30,
              //   "x":1300,
              //   "y":261,
              //   "className":"recharts-xAxis xAxis",
              //   "stroke":"none",
              //   "fill":"#666",
              //   "index":24,
              //   "payload":{
              //     "coordinate":1300,
              //     "value":"24:00",
              //     "index":24,
              //     "offset":0,
              //     "tickCoord":1300,
              //     "isShow":true
              //   },
              //   "visibleTicksCount":25
              // }
              return (
                <g transform={`translate(${x},${y})`}>
                  <text x={0} y={0} dy={10} fill='#858585'>
                    <tspan textAnchor='middle' x='0' style={{ fontSize: '12px', letterSpacing: '0.6px' }}>
                      {data[index].date}
                    </tspan>
                    <tspan textAnchor='middle' x='0' dy='20' style={{ fontSize: '12px', letterSpacing: '0.6px' }}>
                      {payload.value}
                    </tspan>
                  </text>
                </g>
              )
            }} // 客製刻度值 
          />
          <YAxis
            dataKey='usage'
            unit='%'
            axisLine={false}
            tickLine={false}
            tickMargin={20}
            tickCount={6}
            tick={props => {
              // console.log(`props: ${JSON.stringify(props)}`)
              const { x, y, index, payload } = props
              return (
                <>
                {index !== 0 && (
                  <g transform={`translate(${x},${y - 15})`}>
                    <text x={0} y={0} dy={10} fill='#858585'>
                      <tspan textAnchor='middle' x='0' dy='20' style={{ fontSize: '12px', letterSpacing: '0.6px' }}>
                        {`${payload.value}%`}
                      </tspan>
                    </text>
                  </g>
                )}
                </>
              )
            }}
          />
          <CartesianGrid
            strokeDasharray='0'
            vertical={false}
            stroke='#EBEBEB'
            strokeWidth='0.5px'
          />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='usage'
            stroke='#A3B6D8'
            strokeWidth={2}
            fill='url(#colorUv)'
          />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default App;
