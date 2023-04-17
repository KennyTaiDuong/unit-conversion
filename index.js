/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const units = document.getElementById("units")
const convertBtn = document.getElementById("convert-btn")
const lengthConversion = document.getElementById("length-conversion")
const volumeConversion = document.getElementById("volume-conversion")
const massConversion = document.getElementById("mass-conversion")



function displayRates() {
    lengthConversion.innerText = convertLength(units.value)
    volumeConversion.innerText = convertVolume(units.value)
    massConversion.innerText = convertMass(units.value)
}


function convertLength(num) {
    const meterToFeet = num * 3.28084
    const feetToMeter = num / 3.28084
    return `${num} meters = ${meterToFeet.toFixed(3)} feet | ${num} feet = ${feetToMeter.toFixed(3)} meters`
}

function convertVolume(num) {
    const literToGallon = num * 0.264172
    const gallonToLiters = num / 0.264172
    return `${num} liters = ${literToGallon.toFixed(3)} gallon | ${num} gallons = ${gallonToLiters.toFixed(3)} liters`
}

function convertMass(num) {
    const kilosToPounds = num * 2.20462
    const poundsToKilos = num / 2.20462
    return `${num} kilos = ${kilosToPounds.toFixed(3)} pounds | ${num} pounds = ${poundsToKilos.toFixed(3)} kilos`
}