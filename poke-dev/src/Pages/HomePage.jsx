import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

import RdmTeam from '../Components/RandomTeam/RdmTeam'
import RdmTypes from '../Components/RandomTypes/RdmTypes'

const Home = () => {
  return (
    <>
        <Header />
        <RdmTeam/>
        <RdmTypes/>
        <Footer/>
    </>
  )
}

export default Home