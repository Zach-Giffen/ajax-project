const hpValue = document.querySelector('.hp-number').textContent;
const attValue = document.querySelector('.att-number').textContent;
const defValue = document.querySelector('.def-number').textContent;
const spaValue = document.querySelector('.spa-number').textContent;
const spdValue = document.querySelector('.spd-number').textContent;
const speValue = document.querySelector('.spe-number').textContent;
const maxStat = 255;
console.log(speValue);
const hpPercent = (hpValue / maxStat) * 100;
const attPercent = (attValue / maxStat) * 100;
const defPercent = (defValue / maxStat) * 100;
const spaPercent = (spaValue / maxStat) * 100;
const spdPercent = (spdValue / maxStat) * 100;
const spePercent = (speValue / maxStat) * 100;
// add *.90 for negatvie natures, and *1.10 for positve natures latern b
console.log(spePercent);
document.querySelector('.hp-percent').style.width = hpPercent + '%';
document.querySelector('.att-percent').style.width = attPercent + '%';
document.querySelector('.def-percent').style.width = defPercent + '%';
document.querySelector('.spa-percent').style.width = spaPercent + '%';
document.querySelector('.spd-percent').style.width = spdPercent + '%';
document.querySelector('.spe-percent').style.width = spePercent + '%';
console.log(document.querySelector('.spe-percent'));

const $genderSwitch = document.querySelector('.gender');

$genderSwitch.addEventListener('click', function () {
  if ($genderSwitch.textContent === '♂') {
    $genderSwitch.textContent = '♀';
  } else {
    $genderSwitch.textContent = '♂';
  }
});
