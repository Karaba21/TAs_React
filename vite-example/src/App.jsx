import './App.css'
import { Card } from './components/Card'

function App() {

  return (
    <>
      <div className='App'>
        <Card
        title = 'Card 1'
        description= 'hola'
        assignation= 'Juan'
        startDate= '09/10'
        endDate= '20/10'
        />
      </div>
      <div className='App'>
        <Card
        title = 'Card 2'
        description= 'hola2'
        assignation= 'Juan'
        startDate= '09/12'
        endDate= '20/12'
        />
        </div>
        <div className='App'>
        <Card
        title = 'Card 3'
        description= 'hola3'
        assignation= 'Juan'
        startDate= '09/11'
        endDate= '20/11'
        />
        </div>
    </>
  )
}

export default App
