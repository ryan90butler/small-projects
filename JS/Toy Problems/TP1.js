const clientData = {
  clients: [{
      name: 'Jeff',
      email: 'jeff@test.com',
      budget: {
        rangeLower: 150000,
        rangeUpper: 500000
      }
    },
    {
      name: 'Tom',
      email: 'tom@test.com',
      budget: {
        rangeLower: 250000,
        rangeUpper: 650000
      }
    },
    {
      name: 'Jane',
      email: 'jane@test.com',
      budget: {
        rangeLower: 350000,
        rangeUpper: 650000
      }
    },
    {
      name: 'Anne',
      email: 'anne@test.com',
      budget: {
        rangeLower: 450000,
        rangeUpper: 950000
      }
    },
    {
      name: 'James',
      email: 'james@test.com',
      budget: {
        rangeLower: 550000,
        rangeUpper: 950000
      }
    },
    {
      name: 'Dave',
      email: 'dave@test.com',
      budget: {
        rangeLower: 650000,
        rangeUpper: 100000
      }
    }
  ]
}

// level 1. write a function that takes in "clientData" returns an array of client emails
function emailData (data){
  return data.clients.map(function(items){
    return items.budget.rangeLower;
  })
}
console.log(emailData(clientData))
// level 2. write a function that takes in "clientData" and returns the name of the client that can spend
// the least amount of money
function findLowest (data){
  let lowest;

  data.clients.forEach(function(client){
    console.log(lowest);

    if (!lowest){
      lowest=client
    } else if (lowest.budget.rangLower){
      lowest = client;
    }
  })
  return lowest.name;
}

var hello = findLowest(clientData);
console.log(hello);

// level 3. write a function that takes in "clientData" and returns an array of client names,
// ordered by who can spend the most money to who can spend the least