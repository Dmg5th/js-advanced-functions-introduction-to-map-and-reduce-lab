const array = [1,2,3,-9]

function mapToNegativize(sourceArray){
    return sourceArray.map(function(single){
        return single * -1
    })
}

function mapToNoChange(sourceArray){
    return sourceArray
}

function mapToDouble(sourceArray){
    return sourceArray.map(function(i){
        return i * 2
    })
}

function mapToSquare(sourceArray){
    return sourceArray.map(function(i){
        return i * i
    })
}

function reduceToTotal(sourceArray, startingPoint = 0){
    for (let index = 0; index < sourceArray.length; index++) {
        startingPoint += sourceArray[index]
    }
    return startingPoint
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }

  function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) return true
      }
      return false
  }






