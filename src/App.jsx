import React from 'react';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import App1 from "./App1.jsx"
import './style.css'
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Bangalore from "./Pages/Bangalore.jsx"
import Error from './Pages/Error.jsx';
import {Niaboytown,Fortsion,Wooddaux,Bageorge,Stonelumhawk,LaAnrncast,FortShilbluff,Shiwood,EastVyfolk} from './Pages/Subpages/bng.jsx';
import Goa from './Pages/Goa.jsx';
import {Perthby,Nesbridge,KennticEnd,PressalCreek,Heathber,StPlympside,Lowtra,ChettbouAuxDersting,Bucktim,NtibranLake,Warflin} from './Pages/Subpages/sgoa.jsx'
import Kolkata from './Pages/Kolkata.jsx';
import {Thton,GrandRubouDuWagten,NorthGelgoon,LaLakechiWithLipentage,AnnvirInIngsaukLake} from './Pages/Subpages/skolkata.jsx'
import Singapore from './Pages/Singapore.jsx';
import {Vangreatshot,PortHillslfleet,NewSpriha,GrandAshland,WestDgethall,GrandPresbir,Gerjuaqpool,GrandDinyardlodge} from './Pages/Subpages/ssingapore.jsx'
import Malaysia from './Pages/Malaysia.jsx';
import {StGosmydro,Sanboolburgh,SterdallesannesEnd,Wootkentree,SonkinsSands,Lia,NorthLdeztidsils} from './Pages/Subpages/smalaysia.jsx'
import Bangkok from './Pages/Bangkok.jsx';
import {NishgamInHaprnia,TifwalesFerry,Rstangbe,LaStonlodgecrosse,Pidsskebury,Damsvens,RedCragrosse,Og,Colnehill,Mitsbowich,Mereceville} from './Pages/Subpages/sbangkok.jsx'
import Newyork from './Pages/New-york.jsx';
import {Calnyonnenfield,Nazachester,MountVil,Bridbouwispoon,Darrondsor,Lonsmathxbu} from './Pages/Subpages/snewyork.jsx'
import Paris from './Pages/Paris.jsx';
import {NorthVenwar,UlgreenUponPockporth,BoltrailInRoyamoor,Nia,WestMarsh,Paultra,Pidsspa,Milgee} from './Pages/Subpages/sparis.jsx'
// import Sgoa from './Pages/Subpages/sgoa.jsx'
class App extends React.Component{
  render(){
    return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App1/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="*" element={<Error/>}/>


            <Route path="/bengaluru" element={<Bangalore/>} />
            <Route path="/Niaboytown" element={<Niaboytown/>} />
            <Route path="/Fort Sionnnn" element={<Fortsion/>} />
            <Route path="/Wooddaux" element={<Wooddaux/>} />
            <Route path="/Bageorge With Nonshi Harbour" element={<Bageorge/>} />
            <Route path="/Stonelumhawk" element={<Stonelumhawk/>} />
            <Route path="/La Anrncast" element={<LaAnrncast/>} />
            <Route path="/Fort Shilbluff" element={<FortShilbluff/>} />
            <Route path="/Shiwood" element={<Shiwood/>} />
            <Route path="/East Vyfolk" element={<EastVyfolk/>} />

            <Route path="/goa" element={<Goa/>} />
            <Route path="/Perthby" element={<Perthby/>} />
            <Route path="/Nesbridge" element={<Nesbridge/>} />
            <Route path="/Kenntic End" element={<KennticEnd/>} />
            <Route path="/Pressal Creek" element={<PressalCreek/>} />
            <Route path="/Heathber" element={<Heathber/>} />
            <Route path="/St Plympside" element={<StPlympside/>} />
            <Route path="/Lowtra" element={<Lowtra/>} />
            <Route path="/Chettbou Aux Dersting" element={<ChettbouAuxDersting/>} />
            <Route path="/Bucktim" element={<Bucktim/>} />
            <Route path="/Ntibran Lake" element={<NtibranLake/>} />
            <Route path="/Warflin" element={<Warflin/>} />

            <Route path='/kolkata' element={<Kolkata/>}></Route>
            <Route path='/Thton' element={<Thton/>}></Route>
            <Route path='/Grand Rubou Du Wagten' element={<GrandRubouDuWagten/>}></Route>
            {/* <Route path='/Nesbridge' element={<Nesbridge/>}></Route> */}
            <Route path='/North Gelgoon' element={<NorthGelgoon/>}></Route>
            <Route path='/La Lakechi With Lipentage' element={<LaLakechiWithLipentage/>}></Route>
            <Route path='/Annvir-In-Ingsauk Lake' element={<AnnvirInIngsaukLake/>}></Route>

            <Route path='/singapore' element={<Singapore/>}></Route>
            <Route path='/Vangreatshot' element={<Vangreatshot/>}></Route>
            <Route path='/Port Hillslfleet' element={<PortHillslfleet/>}></Route>
            <Route path='/New Spriha' element={<NewSpriha/>}></Route>
            <Route path='/Grand Ashland' element={<GrandAshland/>}></Route>
            <Route path='/West Dgethall' element={<WestDgethall/>}></Route>
            <Route path='/Grand Presbir' element={<GrandPresbir/>}></Route>
            <Route path='/Gerjuaqpool' element={<Gerjuaqpool/>}></Route>
            <Route path='/Grand Dinyardlodge' element={<GrandDinyardlodge/>}></Route>

            <Route path='/malaysia' element={<Malaysia/>}></Route>
            <Route path='/St Gosmydro' element={<StGosmydro/>}></Route>
            <Route path='/Sanboolburgh' element={<Sanboolburgh/>}></Route>
            <Route path='/Sterdallesannes End' element={<SterdallesannesEnd/>}></Route>
            <Route path='/Wootkentree' element={<Wootkentree/>}></Route>
            <Route path='/Sonkins Sands' element={<SonkinsSands/>}></Route>
            <Route path='/Lia' element={<Lia/>}></Route>
            <Route path='/North Ldeztidsils' element={<NorthLdeztidsils/>}></Route>

            <Route path='/bangkok' element={<Bangkok/>}></Route>
            <Route path='/Nishgam-In-Haprnia' element={<NishgamInHaprnia/>}></Route>
            <Route path='/Tifwales Ferry' element={<TifwalesFerry/>}></Route>
            <Route path='/Rstangbe' element={<Rstangbe/>}></Route>
            {/* <Route path='/Heathber' element={<Heathber/>}></Route> */}
            <Route path='/La Stonlodgecrosse' element={<LaStonlodgecrosse/>}></Route>
            <Route path='/Pidsskebury' element={<Pidsskebury/>}></Route>
            <Route path='/Damsvens' element={<Damsvens/>}></Route>
            <Route path='/Red Cragrosse' element={<RedCragrosse/>}></Route>
            <Route path='/Og' element={<Og/>}></Route>
            <Route path='/Colnehill' element={<Colnehill/>}></Route>
            <Route path='/Mitsbowich' element={<Mitsbowich/>}></Route>
            <Route path='/Mereceville' element={<Mereceville/>}></Route>

            <Route path='/new-york' element={<Newyork/>}></Route>
            <Route path='/Calnyonnenfield' element={<Calnyonnenfield/>}></Route>
            <Route path='/Nazachester' element={<Nazachester/>}></Route>
            {/* <Route path='/Bucktim' element={<Bucktim/>}></Route> */}
            <Route path='/Mount Vil' element={<MountVil/>}></Route>
            <Route path='/Bridbouwispoon' element={<Bridbouwispoon/>}></Route>
            <Route path='/Darrondsor' element={<Darrondsor/>}></Route>
            <Route path='/Lonsmathxbu' element={<Lonsmathxbu/>}></Route>

            <Route path='/paris' element={<Paris/>}></Route>
            {/* <Route path='/Lowtra' element={<Lowtra/>}></Route> */}
            <Route path='/North Venwar' element={<NorthVenwar/>}></Route>
            <Route path='/Ulgreen Upon Pockporth' element={<UlgreenUponPockporth/>}></Route>
            <Route path='/Boltrail-In-Royamoor' element={<BoltrailInRoyamoor/>}></Route>
            <Route path='/Grand Dinyardlodge' element={<GrandDinyardlodge/>}></Route>
            <Route path='/Nia' element={<Nia/>}></Route>
            <Route path='/West Marsh' element={<WestMarsh/>}></Route>
            <Route path='/Paultra' element={<Paultra/>}></Route>
            <Route path='/Pidsspa' element={<Pidsspa/>}></Route>
            <Route path='/Milgee' element={<Milgee/>}></Route>

          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
export default App;
