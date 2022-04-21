import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from 'contexts/Web3Context';
import { Web3Provider as ww } from "@ethersproject/providers";

import AOS from "aos";
import "aos/dist/aos.css";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import AuthorizeDiscord from 'pages/AuthorizeDiscord/index';


AOS.init({
  // once: true
}
);



function getLibrary(provider) {
  var library;

  if (provider?.chainType === "hmy") {
    library = provider.blockchain;
  } else {
    library = new ww(provider);
    library.pollingInterval = 12000;
  }

  return library;
}

function App() {
  // useEffect(() => {
  //   if (window.location.hostname.indexOf('chibicatscafe.one') === -1) {
  //     window.location.replace("https://chibicatscafe.one/" + window.location.pathname);
  //   }
  // }, [])

  return (

    <Web3ReactProvider getLibrary={getLibrary}>
      <NotificationContainer />

      <Web3Provider >
        <AuthorizeDiscord />
      </Web3Provider>
    </Web3ReactProvider>


  );
}

export default App;
