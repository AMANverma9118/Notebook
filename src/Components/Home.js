

import Notes from './Notes';

const Home = (props) => {
  const {ShowAlert} = props
  return (
    <div>

      
      <Notes ShowAlert={ShowAlert} />
    </div>
  )
}

export default Home
