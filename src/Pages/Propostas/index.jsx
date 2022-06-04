import React from "react";
import Header from "../../Components/Header";
import getPropostas from "../../Services/Propostas/list";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Template from "../../Components/Template";

const queryClient = new QueryClient();

const Provider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Propostas />
    </QueryClientProvider>
  );
};

const Propostas = () => {
  const { isLoading, error, data } = useQuery(
    "getPropostas",
    () => getPropostas(),
    {
      refetchInterval: false,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    }
  );

  if (isLoading) return "Carregando...";

  if (error) return error.message;

  return (
    <>
      <Header />
      <Template>
        <table>
          <tr>
            <th>Qtd Beneficiários</th>
            <th>Beneficiários</th>
            <th>Nº de Registro do Plano</th>
            <th>Valor Total</th>
          </tr>
          {data?.data ? (
            data.data.map((item) => (
              <tr>
                <td>{item.qtdBeneficiarios}</td>
                <td>
                  <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Preço</th>
                  </tr>
                  {item.beneficiarios.map((item) => (
                    <tr>
                      <td>{item.nome}</td>
                      <td>{item.idade}</td>
                      <td>R${item.preco.toFixed(2)}</td>
                    </tr>
                  ))}
                </td>
                <td>{item.planRegistro}</td>
                <td>{item.valorTotal}</td>
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
