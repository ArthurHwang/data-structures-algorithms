// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line.Each of them has a single 100, 50 or 25 dollars bill.An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk.He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line ?

//   Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment.Otherwise return NO.

// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

function tickets(peopleInLine) {
  const ticketPrice = 25
  const billCount = {
    25: 0,
    50: 0,
    100: 0
  }

  let cashOnHand = 0

  for (let i = 0; i < peopleInLine.length; i++) {
    billCount[peopleInLine[i]] = billCount[peopleInLine[i]] + 1 || 1
    cashOnHand += peopleInLine[i]

    if (peopleInLine[i] === 50) {
      if (billCount[25] < 1) {
        return 'NO'
      } else {
        cashOnHand -= 50 - ticketPrice
        if (cashOnHand < 50 - ticketPrice) {
          return 'NO'
        }
        billCount[25] = billCount[25] - 1
        continue
      }
    }

    if (peopleInLine[i] === 100) {
      if (billCount[50] < 1 && billCount[25] < 1) {
        return 'NO'
      }
      if (billCount[50] > 0 && billCount[25] > 0) {
        cashOnHand -= 100 - ticketPrice
        if (cashOnHand < 100 - ticketPrice) {
          return 'NO'
        }
        billCount[50] = billCount['50'] - 1
        billCount[25] = billCount[25] - 1
        continue
      }
      if (billCount['25'] > 2) {
        cashOnHand -= 100 - ticketPrice
        if (cashOnHand < 100 - ticketPrice) {
          return 'NO'
        }
        billCount[25] = billCount['25'] - 3
        continue
      }
      if (billCount['25'] < 3) {
        return 'NO'
      }
    }
  }
  return 'YES'
}

function tickets2(peopleInLine) {
  const bills = { 25: 0, 50: 0 }

  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      bills[25]++
    } else if (peopleInLine[i] === 50) {
      bills[25]--
    } else {
      bills[50] ? bills[50]-- : (bills[25] -= 2)
      bills[25]--
    }
    if (bills[25] < 0) return 'NO'
  }

  return 'YES'
}

console.log(tickets([25, 25, 25, 100, 25, 50, 25, 100, 25, 25, 25, 100]))
