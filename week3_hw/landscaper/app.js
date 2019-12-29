console.log("It Works")
/* We want to create a browser based text game 
the goal is to make $1000
one lawn per day
cut a 
start with teeth that make $1
buy scissors at $5 and make $5 per day
old timey push lawnmower cost $25, makes $50 per day
powered lawnmover cost $250, make $100 per day
poor workers at $500 per day, make $250 per day
win at $1000

The ability to take user input
The ability for the user to earn money
The ability to buy tools and use the new tool
The ability to win the game and end it
Hint: Try setting the win amount to $10 frst, then $50, and etc. until you get to the end to allow for easier testing!
*/
// Welcome alert

const greet = () => {
    alert('Welcome to Lawnmower Tycoon')
}


// Ask for name of company
const askName = () => {
    prompt ('Whats your company name?')
}

// Win and restart 
const youWin = () => {
        alert(`You Win! Press OK to restart.`)
        start()
}

let balance = 0

let tools = [
  {
      name: 'teeth',
      price: 0,
      earn: 1,
  },
  {
      name: 'scissors',
      price: 5,
      earn: 5,
  },
  {
      name: 'an old timey push lawnmower',
      price: 25,
      earn: 50,
  },
  {
      name: 'a battery powered lawnmower',
      price: 250,
      earn: 100,
  },
  {
      name: 'starving students',
      price: 500,
      earn: 250,
  }
]

/* To make money user must click mow the lawn button
 if the user is using teeth 1 must be added to balance
 if user is using scissors balance + 5
 if user is using push lawnmower balance + 25
 if user is using battery lawnmower balance + 250
 if user is using student balance + 500
 */

const cutGrass = () => {
    if(tool === tools[0].name) {
       balance += tools[0].earn;
       showStatus();
       actions();
    } else if (tool === tools[1].name) {
       balance += tools[1].earn;
       showStatus();
       actions();
    } else if (tool === tools[2].name) {
        balance += tools[2].earn;
        showStatus();
        actions();
    } else if (tool === tools[3].name) {
        balance += tools[3].earn;
        showStatus();
        actions();
    } else if (tool === tools[4].name) {
        balance += tools[4].earn;
        if (balance < 1000) {
        showStatus();
        actions();
        } else { 
            youWin()
        }
    }
}

// Ability to buy tools
const buyTools = () => {
    if (balance < 5) {
        alert(`You don't have enough. Keep working!`)
        actions()
    } else if (balance >= tools[1].price && tool == tools[0].name) {
        buyScissors();
    } else if (balance >= tools[2].price && tool == tools[1].name) {
        buyOldLawnmower()
    } else if (balance >= tools[3].price && tool == tools[2].name) {
        buyBatteryLawnmower()
    } else if (balance >= tools[4].price && tool == tools[3].name) {
        buyStudents()
    } else {
        alert(`You don't have enough. Keep working!`)
        actions()
    }
}


const buyScissors = () => {
    tool = tools[1].name;
    balance -= tools[1].price
    alert(`You bought ${tool}. You can now make $${tools[1].earn}!` )
    showStatus()
    actions()
}

const buyOldLawnmower = () => {
    tool = tools[2].name
    balance -= tools[2].price
    alert(`You bought ${tool}. You can now make $${tools[2].earn}!`)
    showStatus()
    actions()
}

const buyBatteryLawnmower = () => {
    tool = tools[3].name
    balance -= tools[3].price
    alert(`You bought ${tool}. You can now make $${tools[3].earn}!`)
    showStatus()
    actions()
}

const buyStudents = () => {
    tool = tools[4].name
    balance -= tools[4].price 
    alert(`You now have a team of ${tool}. You can now make $${tools[4].earn}!`)
    showStatus()
    actions()
}

// Show how much money and tool you're using
const showStatus = () => {
    alert(`You have $${balance} and you are using ${tool}.`)
}

// action prompts
const actions = () => {
    input = prompt('What would you like to do?', 'Mow lawn/buy tools')
    if(input.toLowerCase() === 'mow lawn') {
        cutGrass()
    } else if (input.toLowerCase() === 'buy tools') {
        buyTools()
    } else {
        alert('Please try again')
        actions()
    }
}

// start the game
const start = () => {
    greet();
    askName();
    balance = 0
    tool = tools[0].name
    showStatus()
    actions()
}

start()









