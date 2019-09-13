// ----------------------inquirer--------------------
const inquirer = require('inquirer')

var question1 = [{
  type: 'input',
  name: 'srok',
  message: "Срок, лет?",
  // type: 'list',
  // name: 'coffeType',
  // message: 'Choose coffee type',
  // choices: ['1','2']
  // type: 'confirm',
  // name: 'decaf',
  // message: 'Do you prefer your coffee to be decaf?',
  // default: false
}]

var question2 = [{
  type: 'input',
  name: 'summa',
  message: "Сумма",
}]

var question3 = [{
  type: 'input',
  name: 'rate',
  message: "Ставка",
}]


function start () {
// 1 вопрос
inquirer.prompt(question1).then(answers1 => {
  // console.log(`Hi ${answers['name']}!`)
  return answers1.srok
})
  // 2 вопрос
  .then(res =>
    inquirer.prompt(question2).then(answers => {
      return {srok:res,summa:answers.summa}  
    }))
      // 3 вопрос
      .then(res => 
        inquirer.prompt(question3).then(answers => {
          res.rate = answers.rate
          return res
        })
      )
        // 4 вопрос 
        .then(res=> {
          if (res.summa > 1000000) {
            console.log('ежемесячный платеж: '+calc_pmt(res.rate,res.summa,res.srok)) 
          }
          else console.log('ежемесячный платеж: '+calc_pmt(res.rate,res.summa,res.srok))
        })
}
// start()


// ---------------------readline----------------------
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function f1 () {
  console.log('Рассчет аннуитета')
  rl.question(`Срок, лет `, (a) => {
    rl.question(`Сумма `, (b) => {
      rl.question(`Ставка `, (c) => {
        console.log('Ежемесячный платеж: '+calc_pmt(c,b,a))
        rl.close()
      })
    })
  })
}
f1()

// ----------------------func-----------------------
function calc_pmt (rate,summa,srok) {  
  rate = rate / 1200
  srok = srok*12
  let pow = Math.pow((1+rate),-srok)
  let res = Math.round(summa * rate / (1-pow))
    if (this.switch_insr) {res = res+summa*0.00192}
      return res
}

