import React from "react";
import Header from "../../Components/Header";
import getPlanos from "../../Services/Planos/list";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Template from "../../Components/Template";

const queryClient = new QueryClient();

const Provider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Planos />
    </QueryClientProvider>
  );
};

const Planos = () => {
  const { isLoading, error, data } = useQuery("getPlanos", () => getPlanos(), {
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
            <th>Registro</th>
            <th>Nome</th>
            <th>Código</th>
          </tr>
          {data?.data ? (
            data.data.map((item) => (
              <tr>
                <td>{item.registro}</td>
                <td>{item.nome}</td>
                <td>{item.codigo}</td>
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
