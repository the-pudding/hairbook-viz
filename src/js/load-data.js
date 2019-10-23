const photo_years = d3.range(1930, 2014, 10)
const photo_steps = d3.range(1, 11)
let femaleArray = [];
let maleArray = [];
let photoArray = [];
let IDArray = [];

/* photo data */
function buildPhotoArray(number) {
  let photo1 = `${number}_1`
  let photo2 = `${number}_2`
  let photo3 = `${number}_3`
  let photo4 = `${number}_4`
  let photo5 = `${number}_5`
  let photo6 = `${number}_6`
  let photo7 = `${number}_7`
  let photo8 = `${number}_8`
  let photo9 = `${number}_9`
  let photo10 = `${number}_10`
  IDArray.push(photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10 )
}

function setUpPhotoSteps() {
  photo_steps.forEach(d => {
    let femaleStep = `female_${d}.png`
    let maleStep = `male_${d}.png`
    femaleArray.push( { femaleStep })
    maleArray.push( { maleStep })
  })
}

function setupPhotoData(number) {
  const decade = number.split('_')[0]
  const count = number.split('_')[1]
  const ID = number

  let femalePhoto = `${decade}_female_${count}`
  let malePhoto = `${decade}_male_${count}`

  photoArray.push( { ID, decade, femalePhoto, malePhoto })
}

/* load year-by-year csvs */
function loadA(file) {
  return new Promise((resolve, reject) => {
    d3.csv(`assets/data/${file}`)
      .then(result => {
        // clean here
        resolve(result);
      })
      .catch(reject);
  });
}

export default function loadData() {
	setUpPhotoSteps()
  photo_years.map(buildPhotoArray)
  IDArray.map(setupPhotoData)
  const loads = [loadA('trend_f_smoothed.csv'), loadA('trend_m_smoothed.csv'), photoArray];
  return Promise.all(loads);
}
