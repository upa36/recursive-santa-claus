function deliverPresents(houses) {

  if (houses.length === 1) {
    console.log('Delivering presents to ' + houses[0])
  } else {
    var mid = (parseInt(houses.length)) / 2
    var firsthalf = houses.slice(0, mid)
    var secondhalf = houses.slice(mid)
    deliverPresents(firsthalf)
    deliverPresents(secondhalf)
  }
}


module.exports = deliverPresents
