// Im initializaing this outside,
// Since the Question wants to create a function
// that returns only the total Coins needed
let coinsNumber = {};

function getCoinDenominations(unSortedDenominations, amount) {

  const hasValidInput = validateInput(unSortedDenominations, amount);

  if (!hasValidInput) {
    return -1;
  }

  // Sort the Denominations in Descending order
  denominations = unSortedDenominations.sort().reverse();

  return denominations.reduce((totalCoins, denomination) => {

   // Gets the Maximum coins that can be converted to this denominator
    const noOfCoinsForDenomination = parseInt(amount / denomination);
    if (noOfCoinsForDenomination) {
      coinsNumber[denomination] = noOfCoinsForDenomination;
      amount = amount % denomination;
    }
    return totalCoins + noOfCoinsForDenomination;
  }, 0) || -1;
}

function printOutput(totalCoins) {
  const printOutput = Object.keys(coinsNumber).map((coinValue) => `${coinsNumber[coinValue]}x${coinValue}`);
  if (totalCoins !== -1) {
    console.log(`${totalCoins}(${printOutput.join(' + ')})`);
  } else {
    console.log('The Amount cannot be given with the provided denominations');
  }
}

function validateInput(denominations, amount) {

  if (denominations.length === 0) {
    console.log('Please provide Denomniations to give the amount');
    return false;
  }

  if (!amount) {
    console.log('Amount cannot be 0');
    return false;
  }

  return true;
}

const totalCoinsNeeded = getCoinDenominations([1, 5, 10], 7);
printOutput(totalCoinsNeeded);