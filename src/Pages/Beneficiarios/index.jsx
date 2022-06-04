import React, { useState } from "react";
import { Link } from "react-router-dom";

import addBeneficiarios from "../../Services/Beneficiarios/add";
import Header from "../../Components/Header";
import Button from "../../Components/Imputs/Button";
import Select from "../../Components/Imputs/Select";
import Text from "../../Components/Imputs/Text";
import Template from "../../Components/Template";

import { BsList } from "react-icons/bs";
import { GoTrashcan } from "react-icons/go";
import "./styles.css";

export default function Beneficiarios() {
  const [plano, setPlano] = useState(1);
  const [qtdBeneficiarios, setQtdBeneficiarios] = useState(1);

  const [beneficiario, setBeneficiario] = useState([]);

  const handleChangeImputDinamic = (i, e) => {
    const { name, value } = e.target;
    const values = [...beneficiario];
    values[i][name] = value;
    setBeneficiario(values);
  };

  const newBeneficiario = (qtd) => {
    let i = 0;
    let values = [...beneficiario];
    for (i; i < Number(qtd); i++) {
      values = [...values, { nome: "", idade: "" }];
    }
    setBeneficiario(values);
  };

  const removeBeneficiario = (i) => {
    let values = [...beneficiario];
    values.splice(i, 1);
    setBeneficiario([...values]);
  };

  const INITIAL_VALUES = () => {
    setPlano(1);
    setBeneficiario([]);
  };

  const handleSubmit = async () => {
    let payload = {
      qtdBeneficiarios: beneficiario.length,
      beneficiarios: beneficiario,
      planRegistro: Number(plano),
    };

    const result = await addBeneficiarios(payload);

    if (result.status === 200) {
      INITIAL_VALUES();
      window.alert("Beneficiarios registrado com sucesso!!!");
    } else {
      window.alert("Algo deu errado!!!");
    }
  };

  return (
    <>
      <Header />
      <Template>
        <div className="select-button">
          <Select
            label="Planos"
            name="planos"
            value={plano}
            setValue={setPlano}
          >
            <option value={1} class="plan" placeholder="plano">
              Bitix Customer Plano 1
            </option>
            <option value={2} class="plan" placeholder="plano">
              Bitix Customer Plano 2
            </option>
            <option value={3} class="plan" placeholder="plano">
              Bitix Customer Plano 3
            </option>
            <option value={4} class="plan" placeholder="plano">
              Bitix Customer Plano 4
            </option>
            <option value={5} class="plan" placeholder="plano">
              Bitix Customer Plano 5
            </option>
            <option value={6} class="plan" placeholder="plano">
              Bitix Customer Plano 6
            </option>
          </Select>
          <Link to={"/beneficiarios"}>
            <BsList size={30} color={"black"} title="Lista de Beneficiários" />
          </Link>
        </div>
        <Text
          label="Quantidade de Beneficiarios"
          name="qtdBeneficiarios"
          value={qtdBeneficiarios}
          setValue={setQtdBeneficiarios}
          type="number"
        />
        <Button
          label="Adicionar Membro"
          onClick={() => newBeneficiario(qtdBeneficiarios)}
        />
        {beneficiario.length > 0 ? (
          <>
            <div id="beneficiarios">
              {beneficiario.map((item, i) => (
                <div key={i} className="form-group-inputs">
                  <input
                    name="nome"
                    className="input"
                    placeholder="Nome"
                    type="text"
                    value={item?.nome}
                    onChange={(e) => handleChangeImputDinamic(i, e)}
                  />
                  <input
                    name="idade"
                    className="input"
                    placeholder="Idade"
                    type="text"
                    value={item?.idade}
                    onChange={(e) => handleChangeImputDinamic(i, e)}
                  />

                  <GoTrashcan
                    title="Remover"
                    size={24}
                    color="darkred"
                    onClick={() => removeBeneficiario(i)}
                  />
                </div>
              ))}
            </div>
            <div className="btnEnviar">
              <Button label="Enviar" onClick={() => handleSubmit()} />
            </div>
          </>
        ) : (
          <></>
        )}
      </Template>
    </>
  );
}
