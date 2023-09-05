import React from 'react';
import './App.css';
import './styles/fonts.css';
import './styles/style.css'
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {MainBanner} from "./components/MainBanner";
import {About} from "./components/About";
import {Design} from "./components/Design";
import {ChatBot} from "./components/ChatBot";
import {Application} from "./components/Application";
import { Button as ButtonPresenter } from './components/Button/Button';
import { withButtonTypeLink } from './components/Button/_type/Button_type_link';
import { withButtonThemeAction } from './components/Button/_theme/Button_theme_action';
import {compose, composeU} from "@bem-react/core";


// const Button = compose(
//   composeU(withButtonThemeAction),
//   withButtonTypeLink,
// )(ButtonPresenter);

function App() {
   return (
     <div className="App">
        {/*<div>*/}
        {/*   <Button>I'm basic</Button>*/}

        {/*   <Button type="link" href="#stub">I'm type link</Button>*/}

        {/*   <Button theme="action">I'm theme action</Button>*/}

        {/*   <Button theme="action" type="link">I'm all together</Button>*/}
        {/*</div>*/}
        {/*)*/}
        <Header/>
        <main className='content'>
           <MainBanner/>
           <About/>
           <Design/>
           <ChatBot/>
           <Application/>
        </main>
        <Footer/>
     </div>
   );
}

export default App;
