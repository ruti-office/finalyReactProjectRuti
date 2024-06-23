import Route from "./component/Route"
import AdminHome from "./component/admin/AdminHome"
import BD from "./component/admin/BD"
import Login from "./component/admin/Login"
import ServicesList from "./component/admin/ServicesList"
import UserHome from "./component/user/UserHome"
// import Face4Icon from '@mui/icons-material/Face4';
// import FaceIcon from '@mui/icons-material/Face';
// import Header from "./Header";

import "./App.css"
import { observer } from "mobx-react"
import { useEffect } from "react"
import ServiceStore from "./stores/serviceStore"
import Header from "./component/Header"

const App = observer(() => {
  useEffect(() => {
    ServiceStore.getServices()
  }, []);

  return (
    <>
      <Header />

      <div style={{marginTop: '8%'}}>
        <Route />
      </div>

    </>
  )
})

