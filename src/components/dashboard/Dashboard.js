import React from 'react';

import Grid from '@material-ui/core/Grid';

import MarketOverview from './panels/marketOverview/MarketOverview';
import EquitySummary from './panels/equitySummary/EquitySummary';
import SectorAllocations from './panels/sectorAllocations/SectorAllocations';
import PAndLBySector from './panels/pAndLBySector/PAndLBySector';
import DashboardStyles from './DashboardStyles';

function Dashboard(props) {
  const gridSpacing = 3;
  return (
    <div>
      <Grid container justify="center" alignItems="center" spacing={gridSpacing}>
        <Grid item xs>
          <MarketOverview />
        </Grid>
        <Grid item xs>
          <EquitySummary />
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center" spacing={gridSpacing}>
        <Grid item xs>
          <SectorAllocations />
        </Grid>
        <Grid item xs>
          <PAndLBySector />
        </Grid>
      </Grid>
    </div>
  );
}

export default DashboardStyles(Dashboard);