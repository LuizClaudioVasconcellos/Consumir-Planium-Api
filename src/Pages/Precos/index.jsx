import React from "react";
import Header from "../../Components/Header";
import getPrecos from "../../Services/Precos/list";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Template from "../../Components/Template";

const queryClient = new QueryClient();

const Provider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Precos />
    </QueryClientProvider>
  );
};

const Precos = () => {
  const { isLoading, error, data } = useQuery("getPrecos", () => getPrecos(), {
    refetchInterval: false,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  if (isLoading) return "Carregando...";

  if (error) return error.message;

  return (
    <>
      <Header />
      <Template>
        <table>
          <tr>
            <th>Código</th>
            <th>Minimo Vidas</th>
            <th>Faixa 1</th>
            <th>Faixa 2</th>
            <th>Faixa 3</th>
          </tr>
          {data?.data ? (
            data.data.map((item) => (
              <tr>
                <td>{item.codigo}</td>
                <td>{item.minimo_vidas}</td>
                <td>{item.faixa1}</td>
                <td>{item.faixa2}</td>
                <td>{item.faixa3}</td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </table>
      </Template>
    </>
  );
};

export default Provider;
