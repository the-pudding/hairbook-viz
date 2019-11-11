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
const $seeMoreButton = d3.select('.methods__button')
const $methodsText = d3.select('.methods__text')
const $fade = d3.select('.methods__fade')

function resize() {
  chartTrends.resize()
}

function setupTrendLines(data) {
  chartTrends = $trendLines
    .datum(data)
    .puddingTrendLines()
}

function handleSeeMore() {
  $methodsText.style('height', 'auto')
  $fade.classed('is-visible', false)
  $seeMoreButton.classed('is-visible', false)
}

function init() {
  loadData().then(result => {
    femaleTrendData = result[0]
    maleTrendData = result[1]
    genderTrendData = femaleTrendData.concat(maleTrendData)
    photoData = result[2]
    combinedData.push(genderTrendData, photoData)

    setupTrendLines(combinedData)

    $seeMoreButton.on('click', handleSeeMore)
  })
}

export default { init, resize };
