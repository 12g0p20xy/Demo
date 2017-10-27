function formatPrice(val) {
  let newVal = (Math.round(val * 100) / 100).toString()
  if (newVal.indexOf('.') === -1) {
    newVal += '.00'
  }
  else if (newVal.slice(newVal.indexOf('.')).length < 3) {
    newVal += '0'
  }
  return newVal
}

formatPrice('15.222') // '15.22'
formatPrice('15.2')   // '15.20'
formatPrice('15')     // '15.00'