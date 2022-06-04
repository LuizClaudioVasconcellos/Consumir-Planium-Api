import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Beneficiarios from "./Pages/Beneficiarios";
import Planos from "./Pages/Planos";
import Precos from "./Pages/Precos";
import Propostas from "./Pages/Propostas";
import ListaBeneficiarios from "./Pages/ListaBeneficiarios";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Beneficiarios />} path="/" exact />
        <Route element={<Planos />} path="/planos" exact />
        <Route element={<Precos />} path="/precos" exact />
        <Route element={<Propostas />} path="/propostas" exact />
        <Route element={<ListaBeneficiarios />} path="/beneficiarios" exact />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
