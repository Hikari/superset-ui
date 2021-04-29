## @superset-ui/plugin-chart-fmh-histogram

[![Version](https://img.shields.io/npm/v/@superset-ui/plugin-chart-fmh-histogram.svg?style=flat-square)](https://www.npmjs.com/package/@superset-ui/plugin-chart-fmh-histogram)

This plugin provides Fmh Histogram for Superset.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to lookup this chart throughout the app.

```js
import FmhHistogramChartPlugin from '@superset-ui/plugin-chart-fmh-histogram';

new FmhHistogramChartPlugin()
  .configure({ key: 'fmh-histogram' })
  .register();
```

Then use it via `SuperChart`. See [storybook](https://apache-superset.github.io/superset-ui/?selectedKind=plugin-chart-fmh-histogram) for more details.

```js
<SuperChart
  chartType="fmh-histogram"
  width={600}
  height={600}
  formData={...}
  queriesData={[{
    data: {...},
  }]}
/>
```

### File structure generated

```
├── package.json
├── README.md
├── tsconfig.json
├── src
│   ├── FmhHistogram.tsx
│   ├── images
│   │   └── thumbnail.png
│   ├── index.ts
│   ├── plugin
│   │   ├── buildQuery.ts
│   │   ├── controlPanel.ts
│   │   ├── index.ts
│   │   └── transformProps.ts
│   └── types.ts
├── test
│   └── index.test.ts
└── types
    └── external.d.ts
```