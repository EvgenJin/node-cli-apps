const inquirer = require('inquirer')

var question1 = [{
  type: 'input',
  name: 'weight',
  message: "Вес",
}]

var question2 = [{
  type: 'input',
  name: 'age',
  message: "Возраст",
}]

var question3 = [{
  type: 'list',
  name: 'sex',
  message: "Пол",
  choices: [{name:'М',value:5},{name:'Ж',value:-161}]
}]

var question4 = [{
  type: 'input',
  name: 'tall',
  message: "Рост",
}]

var question5 = [{
  type: 'list',
  name: 'activity',
  message: 'Активность',
  choices: [
            {name:'Минимальная',value:1.2},
            {name:'Слабая',value:1.375},
            {name:'Средняя',value:1.55},
            {name:'Высокая',value:1.725},
            {name:'Экстра-активность',value:1.9}
          ]
}]

var question6 = [{
  type: 'list',
  name: 'motiv',
  message: 'Цель',
  choices: [
            {name:'Сохранить вес',value:1},
            {name:'Похудеть',value:0.8},
            {name:'Быстро похудеть',value:0.6},
          ]
}]

function start () {
// 1 вопрос вес
inquirer.prompt(question1).then(answers => {
  return answers
})
  // 2 вопрос возраст
  .then(res => 
    inquirer.prompt(question2).then(answers => {
      res.age = answers.age
      return res
    })
  )
    // 3 вопрос пол
    .then(res => 
      inquirer.prompt(question3).then(answers => {
        res.sex = answers.sex
        return res
      })
    )
        // 4 вопрос рост
        .then(res => 
          inquirer.prompt(question4).then(answers => {
            res.tall = answers.tall
            return res
          })
        )
          // 5 вопрос активность
          .then(res=> 
            inquirer.prompt(question5).then(answers => {
              res.activity = answers.activity
              return res              
            })        
          )
            // 6 вопрос цель
            .then(res=> 
              inquirer.prompt(question6).then(answers => {
                res.motiv = answers.motiv
                console.log('Калорий: '+calc(res.weight,res.sex,res.tall,res.age,res.activity,res.motiv))                             
              })       
            )
          
}

// Формула Миффлина-Сан Жеора
function calc (w,s,t,ag,ac,m) {
  return ((10*w + 6.25*t - 5*ag + s)*ac*m).toFixed()
}
start()