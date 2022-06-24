import useAuth from './hooks/useAuth'
import Private from './prive.app'
import Public from './public.app'
import './App.scss';


function App() {
  let {Auth} = useAuth()
   if (Auth.token) {
      return <Private />
   } else {
      return <Public />
   }
}

export default App;
