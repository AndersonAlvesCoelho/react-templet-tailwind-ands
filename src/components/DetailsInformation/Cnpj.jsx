import { useContext, useEffect,  useState } from "react";

import consultarCNPJ from "consultar-cnpj";
import moment from "moment/moment";

import ModalPartners from "../Modal/ModalPartners";

// ACTIONS
import { SearchContext } from "../../context/SearchContext";

function Cnpj() {

  const context = useContext(SearchContext);
  const search = context.search;

  const [showModal, setShowModal] = useState(false);

  const [consulta, setConsulta] = useState([]);
  
  // const [search, setSearch] = useState("");
  const addr = "Jardim Botânico, Rio de Janeiro - RJ";

  async function getCNPJ(cnpj) {
    try {
      const empresa = await consultarCNPJ(cnpj);
      console.log(empresa);
      setConsulta(empresa);
    } catch (e) {
      setConsulta([]);
      console.log("e: ", e);
    }
  }

  useEffect(() => {
    if (search === "") {
      setConsulta([]);
    } else {
      getCNPJ(search);
    }
  }, [search]);

  return (
    <main className="body-font text-gray-600 ">
      {consulta.length !== 0 && consulta?.status !== 429 ? (
        <>
          <div className="container mt-5 py-8 px-8 mx-auto flex items-center md:flex-row flex-col bg-white rounded-lg overflow-hidden  ">
            <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center  ">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                RAZÃO SOCIAL
              </h2>
              <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">
                {consulta.razao_social}
              </h1>
            </div>
            <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
              <div className="py-3 px-5 px inline-flex inset-0 rounded-lg items-center hover:bg-gray-200 focus:outline-none transform hover:scale-75 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">
                    Data de abertura
                  </span>
                  <span className="title-font font-medium">
                    {moment(
                      consulta.estabelecimento.data_inicio_atividade
                    ).format("DD  MMMM YYYY")}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-5">
            <div className="flex flex-wrap  ">
              <div className="lg:w-1/4 md:w-1/2 px-4 w-full">
                <div className="h-full text-center">
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500  mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    {consulta.capital_social}
                  </h2>
                  <p className="text-gray-500">CAPITAL SOCIAL </p>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/2 px-4 w-full">
                <div className="h-full text-center">
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500  mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    PORTE
                  </h2>
                  <p className="text-gray-500">{consulta.porte.descricao}</p>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/2 px-4 w-full">
                <div className="h-full text-center">
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500  mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    NATUREZA JURIDICA
                  </h2>
                  <p className="text-gray-500">
                    {consulta.natureza_juridica.descricao}
                  </p>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/2 px-4 w-full">
                <div className="h-full text-center">
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500  mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    QUALIFICAÇÃO DE RESONSAVEL
                  </h2>
                  <p className="text-gray-500">
                    {consulta.qualificacao_do_responsavel.descricao}
                  </p>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/2 px-4 w-full">
                <div className="h-full text-center">
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500  mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    NOME FANTASIA
                  </h2>
                  <p className="text-gray-500">
                    {consulta.estabelecimento.nome_fantasia}
                  </p>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/2 px-4 w-full">
                <div className="h-full text-center">
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500  mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    SITUAÇÃO
                  </h2>

                  <span className="inline-flex items-center  text-gray-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">
                    <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                    {consulta.estabelecimento.situacao_cadastral}
                  </span>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/2 px-4 w-full">
                <div className="h-full text-center">
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500  mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    ESTADO
                  </h2>
                  <p className="text-gray-500">
                    {consulta.estabelecimento.estado.nome}
                  </p>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/2 px-4 w-full">
                <div className="h-full text-center">
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500  mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    Atividade principal
                  </h2>
                  <p className="text-gray-500">
                    {consulta.estabelecimento.atividade_principal.descricao}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-8 mx-auto">
            <div className="flex flex-wrap  ">
              <div className="lg:w-1/2 lg:mb-0 p-4">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-32 md:mb-0 mb-6 flex-shrink-0 flex flex-col mr-8">
                    <span className="font-semibold title-font text-gray-700">
                      Quantidade de socios
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      {consulta.socios.length}
                    </span>
                  </div>

                  <div className="md:flex-grow">
                    <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
                      Lista dos Socios
                    </h2>
                    <nav className="flex flex-wrap list-none -mb-1">
                      {consulta.socios.map((item, index) => (
                        <li className="lg:w-1/2 mb-1 w-1/2" key={index}>
                          <a
                            className="text-gray-600 hover:text-gray-800"
                            onClick={() => {
                              setShowModal(true);
                              setInforModal(item);
                            }}
                          >
                            {item.nome}
                          </a>
                        </li>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 lg:mb-0 p-4">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-32 md:mb-0 mb-6 flex-shrink-0 flex flex-col mr-8">
                    <span className="font-semibold title-font text-gray-700">
                      Atividades
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      {consulta.estabelecimento.atividades_secundarias.length}
                    </span>
                  </div>

                  <div className="md:flex-grow">
                    <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
                      Lista de atividades
                    </h2>
                    <nav className="flex flex-wrap list-none -mb-1">
                      {consulta.estabelecimento.atividades_secundarias.map(
                        (item, index) => (
                          <li className="lg:w-1/2 mb-1 w-1/2" key={index}>
                            <a
                              className="text-gray-600 hover:text-gray-800"
                              onClick={() => {
                                setShowModal(true);
                                setInforModal(item);
                              }}
                            >
                              {item.descricao}
                            </a>
                          </li>
                        )
                      )}
                    </nav>
                  </div>
                </div>
              </div>

              {showModal ? <ModalPartners setShowModal={() => setShowModal(!showModal)} /> : null}
            </div>
          </div>

          <div className="container py-8 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:flex-grow bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-24 flex items-end justify-start relative">
                  <iframe
                    width="100%"
                    height="100%"
                    className="absolute inset-0 "
                    title="map"
                    src={`https://maps.google.com/maps?&q=${addr}&output=embed`}
                  ></iframe>

                  <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-1/2 px-6">
                      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                        ENDEREÇO
                      </h2>
                      <p className="mt-1">
                        {consulta.estabelecimento.bairro}{" "}
                        {consulta.estabelecimento.logradouro},{" "}
                        {consulta.estabelecimento.estado.nome} -{" "}
                        {consulta.estabelecimento.estado.sigla}
                      </p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                        EMAIL
                      </h2>
                      <a className="text-indigo-500 leading-relaxed">
                        {consulta.estabelecimento.email}
                      </a>
                      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                        TELEFONE
                      </h2>
                      <p className="leading-relaxed">
                        {consulta.estabelecimento.ddd1}{" "}
                        {consulta.estabelecimento.telefone1}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              consulta: {search}
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              {consulta.status === 429
                ? consulta.detalhes
                : "CNPJ não encontrado!"}
            </h1>
          </div>
        </div>
      )}
    </main>
  );
}

export default Cnpj;
