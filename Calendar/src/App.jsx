import './App.css'

const MONTHS = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']
const DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
const DAY_LETTERS = DAYS.map(day => day[0])

function Day({jour, className='', onClick}){
  return <div className={className} onClick={onClick}>{jour}</div>
}

function App() {
  const ROW = []

  function handleClick(event){
    const DIV_DAYS = document.querySelectorAll(".days div")
    //DIV_DAYS.forEach(day => day.classList.contains("selected") ? day.classList.remove("selected") : null)
    DIV_DAYS.forEach(day => day != event.target ? day.classList.remove("selected") : null)
    event.target.classList.toggle("selected")
  }

  for(let i = 1; i <= 31; i++){
    ROW.push(<Day jour={i} className={'backgroundOrange'} key={i} onClick={event => handleClick(event)} />)
  }

  return (
    <article className='card'>
        <Day jour={MONTHS[9]} className={'month'} />
        <section className='grid-7'>
            {DAY_LETTERS.map((day,index)=>{
              return <Day jour={day} key={index} />
            })}
        </section>
        <section className='grid-7 days'>
            {ROW}
        </section>
    </article>
  )
}

export default App