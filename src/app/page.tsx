import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
    <div className="  py-10">
      <main className="w-full">
        {/* Seção sobre mim */}
        <div
          id="my-person"
          className="flex flex-col lg:flex-row items-center justify-center gap-10 p-30"
        >
          {/* Texto */}
          <div className="max-w-xl text-center lg:text-left">
            <p className="text-lg font-medium mb-2">I am Developer!</p>
            <h1 className="text-4xl font-bold text-white-900 mb-4">
              Ricardo Estevam
            </h1>
            <p className="white-700 leading-relaxed">
              Atuo como desenvolvedor full stack. Possuo conhecimentos tanto em
              tecnologias de frontend quanto de backend, o que me permite
              desenvolver aplicações web completas, modernas e eficientes. Estou
              em constante aprimoramento técnico, com foco na criação de
              soluções escaláveis, seguras e alinhadas às boas práticas de
              desenvolvimento. Tenho comprometimento com a qualidade do código,
              usabilidade e desempenho das aplicações que construo, além de
              prezar pelo trabalho em equipe e pela evolução contínua na área da
              tecnologia.
            </p>
          </div>

          {/* Imagem e botão */}
          <div className="flex flex-col items-center mt-10 lg:mt-0">
            <Image
              width={300}
              height={300}
              alt="my person"
              src="/eu.png"
              className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full object-cover object-top"
            />
            <a href="/curriculo/ricardo.pdf" type="application/pdf" target="_blanck">
              <button
                style={{ backgroundColor: "#6057FD" }}
                className="text-white px-6 py-2 rounded mt-4 shadow-md hover:brightness-110 transition flex items-center gap-2"
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ width: "20px", height: "20px" }}
                />
                Meu Currículo
              </button>
            </a>
          </div>
        </div>

        {/* Seção de Tecnologias */}
        <div
          id="container-mid"
          className="w-full p-30 mt-20 flex flex-col items-center"
        >
          <h1 className="text-3xl font-bold text-center" id="tecdroid">Tecnologias</h1>

          <div className="flex justify-around w-full mt-10 gap-10">
            <div id="tecs" className="flex flex-col gap-10">
              <Image
                width={80}
                height={80}
                alt="React"
                src="/react.png"
                className="w-20 h-20 sm:w-24 sm:h-24 m-auto"
              />
              <p className="text-center text-lg">
                Biblioteca JavaScript focada na construção de interfaces de
                usuário reativas e eficientes. Ideal para criar componentes
                reutilizáveis e páginas dinâmicas com alta performance.
              </p>
            </div>

            <div id="tecs" className="flex flex-col gap-10 ">
              <Image
                width={80}
                height={80}
                alt="Next.js"
                src="/next.png"
                className="w-20 h-20 sm:w-24 sm:h-24 m-auto"
              />
              <p className="text-center text-lg">
                Framework para React que permite renderização do lado do
                servidor (SSR), geração de sites estáticos (SSG) e otimizações
                avançadas de performance. Excelente para SEO e aplicações
                modernas.
              </p>
            </div>
            <div id="tecs" className="flex flex-col gap-10 ">
              <Image
                width={80}
                height={80}
                alt="TypeScript"
                src="/ts.png"
                className="w-20 h-20 sm:w-24 sm:h-24 m-auto"
              />
              <p className="text-center text-lg">
                Superset do JavaScript que adiciona tipagem estática ao código,
                ajudando a prevenir erros em tempo de desenvolvimento e
                proporcionando maior segurança e escalabilidade ao projeto.
              </p>
            </div>

            <div id="tecs" className="flex flex-col gap-10">
              <Image
                width={80}
                height={80}
                alt="MySQL"
                src="/mysql.png"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full m-auto"
              />
              <p className="text-center text-lg">
                Sistema de gerenciamento de banco de dados relacional. Utilizado
                para armazenar, organizar e consultar dados estruturados de
                forma eficiente, sendo amplamente adotado no mercado.
              </p>
            </div>
          </div>
        </div>

        {/* Seção futura */}
        <div id="section-2" className="w-full h-52 mt-20"></div>
      </main>
    </div>
  );
}
