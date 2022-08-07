// themes
const  theme_1  = document.querySelector('.bg-1')
const  theme_2  = document.querySelector('.bg-2')
const  theme_3  = document.querySelector('.bg-3')

// stuff would be changed

const balls = document.querySelector('.balls')
const screen = document.querySelector('.screen')
const buttons = document.querySelector('.buttons')
const group = document.querySelectorAll('.color')
const calcColor = document.querySelectorAll('.calc-color')
const result = document.querySelectorAll('.color-2')

theme_1.addEventListener('click', changeThemeOne)
theme_2.addEventListener('click', changeThemeTwo)
theme_3.addEventListener('click', changeThemeThree)


function  changeThemeOne(){
  theme_2.style.opacity = '0'
  theme_3.style.opacity = '0'
  theme_1.style.opacity = '1'
  document.body.style.background = 'hsl(222, 26%, 31%)'
  screen.style.background = 'hsl(224, 36%, 15%)'
  buttons.style.background = ' hsl(223, 31%, 20%)'

result.forEach(el => { el.style.background = 'hsl(6, 63%, 50%)'})
group.forEach(el => {el.style.color = '#fff'})
calcColor.forEach(el => {el.style.background = 'hsl(225, 21%, 49%)'})
}



function changeThemeTwo(){
    theme_1.style.opacity = '0'
    theme_3.style.opacity = '0'
     theme_2.style.opacity = '1'
     document.body.style.background = 'hsl(0, 0%, 90%)'
    balls.style.background = 'hsl(0, 5%, 81%)'
    screen.style.background = '#fff'
    buttons.style.background = 'hsl(0, 5%, 81%)'
    theme_1.style.opacity = '0'
  
  
  result.forEach(el => { el.style.background = 'hsl(25, 98%, 40%)'})
  group.forEach(el => {el.style.color = '#333'})
  calcColor.forEach(el => {el.style.background = 'hsl(176, 100%, 44%)'})
  }

  
  function changeThemeThree(){
    theme_2.style.opacity = '0'
    theme_1.style.opacity = '0'
    theme_3.style.opacity = '1'
    document.body.style.background = ' hsl(268, 75%, 9%)'
    balls.style.background = 'hsl(268, 71%, 12%) '
    screen.style.background = 'hsl(268, 71%, 12%) '
    buttons.style.background = 'hsl(268, 71%, 12%) '
  
  
  result.forEach(el => { el.style.background = 'hsl(176, 100%, 44%)'})
  group.forEach(el => {el.style.color = 'hsl(52, 100%, 62%)'})
  calcColor.forEach(el => {el.style.background = 'hsl(268, 47%, 21%)'})
  }

  // calc

  const btns  = document.querySelectorAll('.btn')
  const restValues = document.querySelector('.deleteAll')
  const del = document.querySelector('.DEL')
  const equal = document.querySelector('.display')
  
 
  restValues.addEventListener('click',  restAll)
  del.addEventListener('click', deleteValues)
  equal.addEventListener('click', displayResult)

  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      var value = e.target.dataset.num;
       screen.value+= value;

    })
  })

function deleteValues(){
  let out =  document.querySelector('.screen')
  let current = out.value
  
  current.slice(0, -1)
}

  function restAll(){
        screen.value = ''
  }

  function displayResult(){
    if(screen.value === ''){
         screen.value = ''
    } else {
       let answer = eval(screen.value)
         screen.value = answer
    }
  }
