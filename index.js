// Im initializaing this outside,
// Since the Question wants to create a function
// that returns only the total Coins needed
let coinsNumber = {};

function getCoinDenominations(denominations, amount) {
  let totalCoins = 0;

  const hasValidInput = validateInput(denominations, amount);

  if (hasValidInput) {
    return -1;
  }

  // Sort the Denominations in Descending order
  denominations = denominations.sort().reverse();

  // reduce the amount with the denominations used
  denominations.forEach(denomination => {

    // Gets the Maximum coins that can be converted to this denominator
    const noOfCoinsForDenomination = parseInt(amount / denomination);
    if (noOfCoinsForDenomination) {
      coinsNumber[denomination] = noOfCoinsForDenomination;
      amount = amount % denomination;
      totalCoins += noOfCoinsForDenomination; 
    }
  });

  return totalCoins || -1;
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
    return 0;
  }

  if (!amount) {
    console.log('Amount cannot be 0');
    return 0;
  }

  return 1;

}

const totalCoinsNeeded = getCoinDenominations([1, 5, 10], 7);
printOutput(totalCoinsNeeded);