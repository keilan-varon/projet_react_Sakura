import React from "react";
import Splashscreen from "../Splashscreen/Splashscreen";
import Login from "../Login/Login";
import Inscription from "../Inscription/Inscription";
import Accueil from "../Accueil/Accueil";
import MangaDetail from "../MangaDetail/MangaDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
      <div className="main-container-app">
        <Routes>
          <Route path="/" element={<Splashscreen loadingScreen={false}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Inscription />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/mangas/:slug" element={<MangaDetail />} />
          { /* Ajouter une route qui mène au Splashscreen avec une route qui n'existe pas */  }
        </Routes>
      </div>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
