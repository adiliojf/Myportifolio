import { GraduationCap, Code } from 'lucide-react'

interface SkillsProps {}

export function Skills(props: SkillsProps) {
  const educations = [
    {
      name: 'Curso de Matemática Industrial/Ciência de Dados | UFC',
    },
    {
      name: 'Apple Academy Foundation',
    },
  ]

  const skills = [
    {
      name: 'Python',
      icon: 'img/Python.svg',
    },
    {
      name: 'React-Native',
      icon: 'img/react.svg',
    },
    {
      name: 'Java',
      icon: 'img/JAVA.svg',
    },
    {
      name: 'Swift/SwiftUI',
      icon: 'img/SwiftUI.svg',
    },
  ]

  return (
    <section className="mb-60 rounded-br-[80px] bg-purple-900 bg-[url(../assets/bg-stars.svg)] bg-cover md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative mb-4 p-4 text-center">
          <h2 className="relative z-50 mb-2 text-3xl font-bold">
            <span className="mr-2">Educação &</span>
            <span className="text-red-600">Skills</span>
          </h2>
          <p className="text-bold relative text-lg text-gray-200">
            Matemática Industrial/Ciência de Dados
          </p>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg">
              <GraduationCap className="h-8 w-8 text-red-600" />
              Educação
            </h3>

            {educations.map((education, index) => (
              <div
                key={`education-${index}`}
                className="mb-2 rounded-lg bg-red-900 p-4 text-sm font-bold text-gray-200"
              >
                {education.name}
              </div>
            ))}
          </div>
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg">
              <Code className="h-8 w-8 text-red-600" />
              Skills
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {skills.map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="flex flex-row items-center gap-2 md:flex-col md:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-10 w-10 rounded"
                    />
                  </div>
                  <div className="w-full flex-grow">
                    <h4 className="font-alt font-bold">{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
