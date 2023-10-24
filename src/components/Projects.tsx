import { ExternalLink } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'YuGiOh API',
      description:
        'Aplicação IOs que consome a API YGoProDeck para acessar cards de Yu-Gi-Oh!',
      image: 'img/YU.png',
      link: 'https://github.com/adiliojf/YuGiOhApp',
      coldSpan: 'col-span-2',
    },
    {
      title: 'To-Do List',
      description:
        'Aplicação Ios que mostra lista de tarefas " Em desenvolvimento "',
      image: 'img/tarefa.png',
      link: 'https://github.com/adiliojf/ListaDeTarefas',
      coldSpan: 'col-span-1',
    },
    {
      title: 'Prótotipo GOT',
      description: 'Prótotipo de escolha de casa da serie Game Of Thrones',
      image: 'img/gm.png',
      link: 'https://github.com/adiliojf/prototipoGoT/tree/main',
      coldSpan: 'col-span-1',
    },
    {
      title: 'Caderneta de Vacinação Infantil(CadKids)',
      description:
        'To-do-List com funcionalidades de adcionar remover e atualizar tarefa.',
      image: 'img/project2.png',
      link: 'https://github.com/projeto-eng-soft/Projeto-engenharia-de-Software-Cardeneta-Infantil-CADKIDS-',
      coldSpan: 'col-span-2',
    },
  ]

  return (
    <>
      <section className="rounded-tl-[80px] bg-gradient-to-r from-red-900 via-red-900 to-red-500 bg-cover md:rounded-tl-[180px] ">
        <div className="container mx-auto max-w-4xl bg-[url(../assets/bg-stars.svg)] bg-cover p-4 py-12 ">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 font-alt text-3xl font-bold">
              <span className="mr-2"> Projetos</span>
            </h2>
            <p className="relative text-lg text-gray-200">
              Alguns dos projetos pessoais e que já realizei ao longo da
              trajetoria como programador.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative h-52 cursor-default rounded-lg ${project.coldSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-red-800 p-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="flex flex-col justify-center text-lg font-bold">
                    {project.title}
                  </h4>
                  <p className="mb-4 text-center text-sm text-gray-200">
                    {project.description}
                  </p>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-6 w-6 " />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
