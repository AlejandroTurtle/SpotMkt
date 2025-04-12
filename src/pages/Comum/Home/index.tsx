import {
  CgBell,
  CgCalendar,
  CgMail,
  CgMenuRound,
  CgUser,
  CgOptions,
  CgNotes,
  CgLayoutGrid,
  CgLogOff,
} from "react-icons/cg";
import { VscGraphLine } from "react-icons/vsc";
import { MdOutlineAutoGraph } from "react-icons/md";
import { useState } from "react";
import { useIndex } from "./useIndex";

function Home() {
  const { logOut } = useIndex();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } lg:block w-64 bg-white shadow-lg fixed lg:static top-0 left-0 h-screen z-10`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-600">SpotMKT</h2>
        </div>
        <nav className="mt-6">
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-700 bg-gray-100 border-r-4 border-blue-600"
          >
            <CgLayoutGrid className="w-4 h-4 text-gray-500 mr-3" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100"
          >
            <CgMenuRound className="w-4 h-4 text-gray-500 mr-3" />
            Campanhas
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100"
          >
            <CgCalendar className="w-4 h-4 text-gray-500 mr-3" />
            Calendário
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100"
          >
            <CgNotes className="w-4 h-4 text-gray-500 mr-3" />
            Demandas
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100"
          >
            <CgOptions className="w-4 h-4 text-gray-500 mr-3" />
            Configurações
          </a>
          <a
            href="#"
            onClick={logOut}
            className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100"
          >
            <CgLogOff className="w-4 h-4 text-gray-500 mr-3" />
            Sair
          </a>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <CgMenuRound className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-semibold text-gray-800 ml-4 lg:ml-0">
              Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <CgBell className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm">Campanhas Ativas</h3>
                <VscGraphLine className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-2xl font-semibold">12</p>
              <p className="text-sm text-green-500">+23.5% estemês</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm">Leads Gerados</h3>
                <CgUser className="w-5 h-5 text-blue-500" />
              </div>
              <p className="text-2xl font-semibold">847</p>
              <p className="text-sm text-blue-500">+12.3% este mês</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm">Emails Enviados</h3>
                <CgMail className="w-5 h-5 text-purple-500" />
              </div>
              <p className="text-2xl font-semibold">3,249</p>
              <p className="text-sm text-purple-500">+8.1% este mês</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm">Taxa de Conversão</h3>
                <MdOutlineAutoGraph className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-2xl font-semibold">4.2%</p>
              <p className="text-sm text-yellow-500">+1.2% este mês</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4 text-black">
                Atividades Recentes
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <p className="text-sm text-black">
                      Nova campanha iniciada: "Verão 2025"
                    </p>
                    <p className="text-xs text-gray-500">Há 2 horas</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <div>
                    <p className="text-sm text-black">
                      Relatório mensal gerado
                    </p>
                    <p className="text-xs text-gray-500">Há 5 horas</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <div>
                    <p className="text-sm text-black">
                      Nova demanda: "Redesign Landing Page"
                    </p>
                    <p className="text-xs text-gray-500">Há 1 dia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4 text-black">
                Próximas Ações
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CgCalendar className="w-4 h-4 text-gray-500 mr-3" />
                  <div>
                    <p className="text-sm text-black">Reunião de Alinhamento</p>
                    <p className="text-xs text-gray-500">Amanhã às 10:00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CgCalendar className="w-4 h-4 text-gray-500 mr-3" />
                  <div>
                    <p className="text-sm text-black">
                      Apresentação de Resultados
                    </p>
                    <p className="text-xs text-gray-500">23/03 às 14:00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CgCalendar className="w-4 h-4 text-gray-500 mr-3" />

                  <div>
                    <p className="text-sm text-black">Lançamento Campanha</p>
                    <p className="text-xs text-gray-500">25/03 às 09:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {sidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-0 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default Home;
