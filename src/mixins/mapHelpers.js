function parsePrice(x) {
    var parts = (x+'').split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let result = parts.join('.')
    let splitedResult = result.split('.') // [int, decimals]
    if(splitedResult.length == 2 && splitedResult[1].length>2){
      let fixDecimals = splitedResult[1].substring(0,2)
      return splitedResult[0] + fixDecimals
    }
    return result
}
  
  export default {
    methods: {
      parsePrice
    }
  };