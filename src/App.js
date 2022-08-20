import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import './index.css'
function App() {
  return (
<>
<Header titulo="CSGO SKINS"/>
<div className='gallery'>
  <Cards url='https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_printstream_light_large.9f5bcd4f94db3d965b3b2e7c3aace470e9466380.png' name='USP-S | Printstream' description='Pintado con un diseño en blanco y negro y con un acabado brillante.' alt='Una USP-S con un blanco perlado y con reflejos brillantes.'/>
  <Cards url='https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_asiimov_light_large.665fc3b83c8046398787a57d2ef7a9d938244820.png' name='AK-47 | Asiimov' description='Está pintado con un diseño sacado de ciencia ficción.' alt='Un rifle AK-47 con colores blanco, negro y naranja'/>
  <Cards url='https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_medieval_dragon_awp_light_large.cb3b8168e59e96fd33efa9578206a2aaed036fc0.png' name='AWP | Dragon Lore' description='Está pintado con un detalle de un dragon celta.' alt='Un francotirador AWP dorado, pintada con un dragón.'/>
  <Cards url='https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_am_gamma_doppler_phase1_light_large.769cf2ab676ea2a7d7322c258f57bac8dca00336.png' name='Karambit | Gamma Doppler' description='Está pintado con un negro y plateado metalizado.' alt='Un cuchillo tipo Karambit con un diseño negro y verdoso'/>
  <Cards url='https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_cu_deagle_kitch_light_large.0df9b5246d27786b413642f5fc959f37d8892c3a.png' name='Desert Eagle | Ocean Drive' description='Pintada con colores ultrasaturados y de diferentes formas.' alt='Una pistola Desert Eagle con colores saturados'/>
</div>
<Footer />
</>
  );
}

export default App;
