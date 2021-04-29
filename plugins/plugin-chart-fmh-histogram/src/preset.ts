import { Preset } from '@superset-ui/core';
import { FmhHistogramChartPlugin } from './index';

export default class FmhHistogramPreset extends Preset {
  constructor() {
    super({
      name: 'FMH Chart - Histogram',
      plugins: [new FmhHistogramChartPlugin().configure({ key: 'fmh-histogram' })],
    });
  }
}
