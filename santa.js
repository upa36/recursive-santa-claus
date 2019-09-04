function deliverPresents(houses) {
  if (houses.length === 0) return

  if (houses.length === 1) {
    console.log('Delivering presents to ' + houses[0])
  } else {
    var firstHalf = houses.slice(0, Math.ceil(houses.length / 2))
    var secondHalf = houses.slice(Math.ceil(houses.length / 2), houses.length)

    deliverPresents(firstHalf)
    deliverPresents(secondHalf)
  }
}

module.exports = deliverPresents
