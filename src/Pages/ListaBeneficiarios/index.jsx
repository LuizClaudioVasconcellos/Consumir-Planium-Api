import React from "react";
import Header from "../../Components/Header";
import getBeneficiarios from "../../Services/Beneficiarios/list";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Template from "../../Components/Template";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const queryClient = new QueryClient();

const Provider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Beneficiarios />
    </QueryClientProvider>
  );
};

const Beneficiarios = () => {
  const { isLoading, error, data } = useQuery(
    "getBeneficiarios",
    () => getBeneficiarios(),
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
        <Link to={"/"}>
          <BiArrowBack
            size={30}
            color={"black"}
            title="Voltar"
            style={{ marginBottom: 10 }}
          />
        </Link>
        <table>
          <tr>
            <th colSpan={3}>Beneficiarios</th>
          </tr>
          {data?.data ? (
            data.data.map((item) => (
              <>
                {item.map((item) => (
                  <tr>
                    <td>{item.nome}</td>
                    <td>{item.idade}</td>
                    <td>R${item.preco.toFixed(2)}</td>
                  </tr>
                ))}
              </>
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
