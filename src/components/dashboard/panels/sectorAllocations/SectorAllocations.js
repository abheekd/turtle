import React from 'react';
import { VictoryPie, VictoryTheme } from 'victory';
import Typography from '@material-ui/core/Typography';

function SectorAllocations(props) {
  return (
    <div>
      <Typography color="textPrimary">Sector Allocations</Typography>
      <svg height={400} width={400} >
        <VictoryPie
          theme={VictoryTheme.material} 
          standalone={false} 
          height={400}
          width={400}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 6 }
          ]}
        />
      </svg>
    </div>
  );
}

export default SectorAllocations;