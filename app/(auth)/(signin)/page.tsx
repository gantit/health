import { Metadata } from 'next';
import Link from 'next/link';
import UserAuthForm from '@/components/forms/user-auth-form';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Login de ProHealth',
  description: 'Login para la gestión médica con ProHealth',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL + '')
};

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 hidden md:right-8 md:top-8'
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-black dark:border-r dark:text-white lg:flex">
        <div className="absolute inset-0 bg-green-200 dark:bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium ">
          Pro
          <Icons.logo className="size-10 " />
          Health
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;ProHealth ha optimizado nuestros procesos médicos,
              ahorrándonos innumerables horas de trabajo y permitiéndonos
              ofrecer servicios de salud excepcionales a nuestros clientes más
              rápido que nunca.&rdquo;
            </p>
            <footer className="text-sm">Albert Erglandes</footer>
          </blockquote>
        </div>
      </div>
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Crear una cuenta
            </h1>
            <p className="text-sm text-muted-foreground">
              Ingresa tu correo electrónico a continuación para crear tu cuenta
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Al hacer clic en continuar, aceptas nuestros{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Términos de Servicio
            </Link>{' '}
            y{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Política de Privacidad
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
