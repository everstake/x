import { MenuTitle } from './components/MenuTitle/MenuTitle';
import { Safety } from './components/Safety/Safety';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Staking } from './components/Staking/Staking';
import { AppContainer } from './styles';
import './lib/styles/global.css';
import './styles/tailwindEverstake.css';

const App = () => {
  return (
        <div className='everstake-root'>
            <AppContainer className='pt-5 max-lg:pb-10 lg:pt-14 overflow-hidden'>
              <MenuTitle/>
              <Staking/>
              <Safety/>
              <Contact/>
              <Footer/>
            </AppContainer>
        </div>
  )
}

export default App;
