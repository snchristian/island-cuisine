import React from 'react'
import { Recipestyle, Text } from './HomeStyle'
import { useNavigate} from 'react-router-dom'

function Home() {
  const naviagte = useNavigate()
  return (
    <Recipestyle>
      <Text> 
        <h1>ISLAND CUISINE</h1>
        <p>Wanting to mix up your family dinner ? Just came back from your vacation and missing some Tropical cuisine </p>
        <button onClick={() => naviagte(`/recipes`)}>Indulge Your TasteBud</button>
      </Text>
      
       
      
    </Recipestyle>
  )
}

export default Home