// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Input: [7, 1, 5, 3, 6, 4]
// Output: 7
// Explanation: Buy on day 2(price = 1) and sell on day 3(price = 5), profit = 5 - 1 = 4.
// Then buy on day 4(price = 3) and sell on day 5(price = 6), profit = 6 - 3 = 3.

// Input: [1, 2, 3, 4, 5]
// Output: 4
// Explanation: Buy on day 1(price = 1) and sell on day 5(price = 5), profit = 5 - 1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
// engaging multiple transactions at the same time.You must sell before buying again.

const maxProfit = prices => {
  let profit = 0

  let i = 1
  let j = i - 1

  while (i < prices.length) {
    if (prices[i] - prices[j] > 0) {
      profit += prices[i] - prices[j]
    }
    i++
    j++
  }

  return profit
}

const maxProfit2 = prices => {
  return prices.reduce((tally, item, index, array) => {
    if (array[index] - array[index - 1] > 0) {
      return tally + array[index] - array[index - 1]
    } else {
      return tally
    }
  }, 0)
}

const maxProfit3 = prices => {
  return prices.reduce((profit, item, i, arr) => (arr[i] - arr[i - 1] > 0 ? profit + arr[i] - arr[i - 1] : profit), 0)
}
