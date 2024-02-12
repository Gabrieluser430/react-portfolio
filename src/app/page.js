"use client"

import { BsFillMoonStarsFill } from "react-icons/bs"
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub
} from "react-icons/ai"
import Image from "next/image"
import deved from "../../public/dev-ed-wave.png"
import design from "../../public/design.png"
import code from "../../public/code.png"
import consulting from "../../public/consulting.png"
import img1 from "../../public/img1.png"
import img3 from "../../public/asthetic.png"
import img5 from "../../public/img5.png"
import img6 from "../../public/img6.png"
import img10 from "../../public/img10.png"
import img12 from "../../public/img12.png"
import img14 from "../../public/img14.png"
import {useState} from "react"

export default function Home() {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "dark" : ""}>
          <main className="bg-white px-10 pb-24 md:px-20 lg:px-40 dark:bg-gray-800">
            <section className=" min-h-screen">
                <nav className="py-10 mb-12 flex justify-between">
                    <h1 className="text-xl font-burtons dark:text-gray-200">Desenvolvido por Gabriel O.</h1>
                    <ul className="flex items-center">
                        <li className="cursor-pointer" onClick={toggleDarkMode}><BsFillMoonStarsFill className="dark:text-gray-200"/></li>
                        <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded ml-8" href="https://docs.google.com/document/d/1q69ifgPZqVNzLKa7uf0jFWMSGw39QituwoMkE7m6mho/edit?usp=sharing" target="_blank">Currículo</a></li>
                    </ul>
                </nav>
                <div className="text-center p-10">
                  <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">Gabriel Oliveira</h2>
                  <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">Desenvolvedor Front-end</h3>
                  <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">Desenvolvedor e Freelancer. Junte-se a mim abaixo e vamos começar!</p>
              </div>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-200">
                <a href="https://github.com/Gabrieluser430" target="_blank"><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/gabrielobarbieri/" target="_blank"><AiFillLinkedin /></a>
                <AiFillTwitterCircle />
              </div>
              <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
                <Image src={deved} layout="fill" objectFit="cover" />
              </div>
            </section>

            <section>
              <div>
                <h3 className="text-3xl py-1 dark:text-gray-200">Sobre mim</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  Meu nome é Gabriel, estudante de <span className="text-teal-500 dark:text-teal-300">ciências da computação</span>, com 
                  grande interesse em adquirir experiência na área 
                  de <span className="text-teal-500 dark:text-teal-400">front-end</span> por 
                  meio de um <span className="text-teal-500 dark:text-teal-400">estágio</span>. 
                  Tenho fascínio em compreender como as ferramentas
                  utilizadas nessa área solucionam problemas reais, o que desperta ainda
                  mais minha motivação para explorar e aprimorar minhas habilidades. 
                </p>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  Ofereço uma ampla gama de serviços, incluindo design de marca,
                  freelancing e ensino.
                </p>
              </div>
              <div className="lg:flex gap-10">
                <div className=" text-center shadow-lg p-10 rounded-xl my-10">
                  <Image src={design} width={100} height={100} className="mx-auto" />
                  <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">Designs bonitos</h3>
                  <p className="py-2 dark:text-gray-200">
                  Criação de designs elegantes e responsivos utilizando o Mobile First approach.
                  </p>
                  <h4 className="py-4 text-teal-600 dark:text-teal-400">Ferramentas que utilizo</h4>
                  <p className="text-gray-800 py-1 dark:text-gray-200">HTML5</p>
                  <p className="text-gray-800 py-1 dark:text-gray-200">CSS3</p>
                  <p className="text-gray-800 py-1 dark:text-gray-200">Bootstrap</p>
                  <p className="text-gray-800 py-1 dark:text-gray-200">tailwindCSS</p>
                  <p className="text-gray-800 py-1 dark:text-gray-200">SASS</p>
                </div>

                <div className=" text-center shadow-lg p-10 rounded-xl my-10">
                  <Image src={code} width={100} height={100} className="mx-auto" />
                  <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">Programação</h3>
                  <p className="py-2 dark:text-gray-200">
                  Ferramentas que utilizo 
                  para o desenvolvimento de funcionalidades e interatividade nos projetos.
                  </p>
                  <h4 className="py-4 text-teal-600 dark:text-teal-400">Ferramentas que utilizo</h4>
                  <p className="text-gray-800 py-1 dark:text-gray-200">JavaScript</p>
                  <p className="text-gray-800 py-1 dark:text-gray-200">React</p>
                  <p className="text-gray-800 py-1 dark:text-gray-200">Vite</p>
                  <p className="text-gray-800 py-1 dark:text-gray-200">Next</p>
                </div>

                <div className=" text-center shadow-lg p-10 rounded-xl my-10">
                  <Image src={consulting} width={100} height={100} className="mx-auto" />
                  <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">Outros</h3>
                  <p className="py-2 dark:text-gray-200"> Alguns conhecimentos extras de tecnologias, habilidades e 
                  ferramentas que estou estudando.</p>
                  <h4 className="py-4 text-teal-600 dark:text-teal-4 dark:text-teal-400">Habilidades e ferramentas</h4>
                  <p className="text-gray-800 py-1 dark:text-gray-200">Inglês avançado</p>
                  <p className="text-gray-800 py-1 dark:text-gray-200">Git e GitHub</p>
                  <p className="text-gray-800 py-1 dark:text-gray-200">Linux</p>
                  <p className="text-gray-800 py-1 dark:text-gray-200">Vitest</p>
                  <p className="text-gray-800 py-1 dark:text-gray-200">Jest</p>
                </div>
              </div>
            </section>

            <section>
              <div className="py-10">
                <h3 className="text-3xl py-1 dark:text-gray-200">Portfólio</h3>
                  <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  Estes são os projetos que compõem o meu portfólio. Acredito firmemente que o aprendizado das tecnologias ocorre por meio da prática. Ao longo desses projetos, mergulhei em uma ampla gama de desafios, explorando diferentes habilidades e aplicando diversas tecnologias. Cada projeto foi uma oportunidade de aprender, aprimorar minhas habilidades e buscar soluções inovadoras
                </p>
              </div>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
                <div className="w-full aspect-w-1 aspect-h-1">
                  <a href="https://www.studioesteticams.com.br/" target="_blank">
                   <Image src={img3} className="rounded-lg object-cover w-full h-full" />
                  </a>
                </div>
                <div className="w-full aspect-w-1 aspect-h-1">
                  <a href="https://new-abstract.vercel.app/" target="_blank">
                    <Image src={img5} className="rounded-lg object-cover w-full h-full" />
                  </a>
                </div>
                <div className="w-full aspect-w-1 aspect-h-1">
                  <a href="https://newsletter-frontform.vercel.app/" target="_blank">
                   <Image src={img14} className="rounded-lg object-cover w-full h-full" />
                  </a>
                </div>
                <div className="w-full aspect-w-1 aspect-h-1">
                  <a href="https://bespoke-croissant-5e0019.netlify.app/" target="_blank">
                  <Image src={img10} className="rounded-lg object-cover w-full h-full" />
                  </a>
                </div>
                <div className="w-full aspect-w-1 aspect-h-1">
                  <a href="https://jolly-strudel-57a01f.netlify.app" target="_blank">
                  <Image src={img1} className="rounded-lg object-cover w-full h-full" />
                  </a>
                </div>
                <div className="w-full aspect-w-1 aspect-h-1">
                  <a href="https://gabrieluser430.github.io/javascript-calculator/" target="_blank">
                  <Image src={img6} className="rounded-lg object-cover w-full h-full" />
                  </a>
                </div>
              </div>
            </section>
          </main>
    </div>
  )
}
