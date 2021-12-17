/* function parsePrice(x) {
    var parts = (x+'').split(".");
    console.log(parts, 'parts')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let result = parts.join('.')
    console.log(result, 'reslt')
    let splitedResult = result.split('.') // [int, decimals]
    console.log(splitedResult, 'splitedResult')
    if(splitedResult.length == 2 && splitedResult[1].length>2){
      let fixDecimals = splitedResult[1].substring(0,2)
      return splitedResult[0] + fixDecimals
    }
    return result
} */
  
function parsePrice(x){
  let result = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(x)
  return result.substring(0, result.length - 2)
}
  export default {
    methods: {
      parsePrice
    }
  };


