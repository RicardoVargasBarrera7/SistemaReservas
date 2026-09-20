import AuthLayout from '../components/AuthLayout.tsx'
import FormularioInicioSesion from '../components/FormularioInicioSesion.tsx'

type LoginPageProps = {
  onCrearCuenta: () => void
  onRecuperarContrasena: () => void
}

function LoginPage({ onCrearCuenta, onRecuperarContrasena }: LoginPageProps) {
  return (
    <AuthLayout
      heroEtiqueta="Tu cancha, en un solo lugar"
      heroTitulo="Reserva tu cancha y"
      heroTituloDestacado="disfruta el partido."
      heroDescripcion="Gestiona tus reservas de canchas sintéticas de manera rápida y sencilla."
    >
      <FormularioInicioSesion
        onCrearCuenta={onCrearCuenta}
        onRecuperarContrasena={onRecuperarContrasena}
      />
    </AuthLayout>
  )
}

export default LoginPage
