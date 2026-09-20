import AuthLayout from '../components/AuthLayout.tsx'
import FormularioRegistro from '../components/FormularioRegistro.tsx'

type RegistroPageProps = {
  onIniciarSesion: () => void
}

function RegistroPage({ onIniciarSesion }: RegistroPageProps) {
  return (
    <AuthLayout
      heroEtiqueta="Tu próxima jugada"
      heroTitulo="Tu próxima jugada"
      heroTituloDestacado="comienza aquí."
      heroDescripcion="Crea tu cuenta y comienza a reservar tu cancha de forma rápida y sencilla."
      contenidoAlineadoArriba
    >
      <FormularioRegistro onIniciarSesion={onIniciarSesion} />
    </AuthLayout>
  )
}

export default RegistroPage
