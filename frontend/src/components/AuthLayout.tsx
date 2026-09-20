import type { ReactNode } from 'react'
import AuthHero from './AuthHero.tsx'

type AuthLayoutProps = {
  children: ReactNode
  heroEtiqueta: string
  heroTitulo: string
  heroTituloDestacado: string
  heroDescripcion: string
  contenidoAlineadoArriba?: boolean
}

function AuthLayout({
  children,
  heroEtiqueta,
  heroTitulo,
  heroTituloDestacado,
  heroDescripcion,
  contenidoAlineadoArriba = false,
}: AuthLayoutProps) {
  const alineacionVertical = contenidoAlineadoArriba ? 'items-start' : 'items-center'

  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-slate-50 lg:h-screen lg:flex-row">
      <AuthHero
        etiqueta={heroEtiqueta}
        titulo={heroTitulo}
        tituloDestacado={heroTituloDestacado}
        descripcion={heroDescripcion}
      />
      <section className={`flex min-h-[520px] min-w-0 ${alineacionVertical} justify-center overflow-y-auto bg-slate-50 px-6 py-10 [scrollbar-gutter:stable] sm:px-12 lg:h-screen lg:w-1/2 lg:min-h-0 lg:flex-none lg:px-[7%] lg:py-8`}>
        <div className="mx-auto w-full max-w-[500px]">{children}</div>
      </section>
    </main>
  )
}

export default AuthLayout
