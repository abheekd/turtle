import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

function EquitySummary(props) {
  return (
    <div>
      <Grid container justify="flex-start" alignItems="center">
        <Typography color="textPrimary">Equity</Typography>
      </Grid>
      <Divider />
      
      <svg height={300} width={600} >
        <VictoryChart 
          theme={VictoryTheme.grayscale} 
          standalone={false} 
          height={300} 
          width={600} >
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

export default EquitySummary;