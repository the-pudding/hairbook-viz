/* global d3 */
import loadData from './load-data'
import './pudding-chart/line'

let femaleTrendData = null;
let maleTrendData = null;
let genderTrendData = null;
let photoData = null;
let combinedData = [];
let chartTrends = null;

const $trendLines = d3.select('.chart figure')

function resize() {}

function setupTrendLines(data) {
  chartTrends = $trendLines
    .datum(data)
    .puddingTrendLines()
}

function init() {
  loadData().then(result => {
    femaleTrendData = result[0]
    maleTrendData = result[1]
    genderTrendData = femaleTrendData.concat(maleTrendData)
    photoData = result[2]
    combinedData.push(genderTrendData, photoData)

    setupTrendLines(combinedData)
  })
}

export default { init, resize };
