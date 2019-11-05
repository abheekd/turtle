import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import Typography from '@material-ui/core/Typography';

function MarketOverview(props) {
  return (
    <div>
      <Typography color="textPrimary">Market Overview</Typography>
      <svg height={400} width={400}>
        <VictoryChart theme={VictoryTheme.material} standalone={false} height={400} width={400}>
          <VictoryLine
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 6 }
            ]}
          />
        </VictoryChart>
      </svg>
    </div>
  );
}

export default MarketOverview;