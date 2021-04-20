import { Preset } from '@superset-ui/core';
import { FmhPieChartPlugin } from './index';

export default class FmhPiePreset extends Preset {
  constructor() {
    super({
      name: 'FMH Chart - Pie',
      plugins: [new FmhPieChartPlugin().configure({ key: 'fmh-pie' })],
    });
  }
}
