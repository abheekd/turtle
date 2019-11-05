import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { VictoryChart, VictoryLine, VictoryLegend, VictoryTheme } from 'victory';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';

function MarketOverview(props) {
  return (
    <div>
      <Grid container justify="flex-start" alignItems="center" >
        <TrendingUpIcon />
        <Typography color="textPrimary">Market Overview</Typography>
      </Grid>
      <Divider />

      <svg height={300} width={600} >
        <VictoryChart
          theme={VictoryTheme.grayscale}
          standalone={false}
          height={300}
          width={600} >
          <VictoryLegend
            orientation="horizontal"
            theme={VictoryTheme.grayscale}
            data={[
              { name: "One", symbol: { type: "square" } }
            ]}
          />
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