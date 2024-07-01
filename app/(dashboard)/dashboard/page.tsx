import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card';

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <main className="mt-4 space-y-4">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Detalles del Paciente</CardTitle>
              <CardDescription>Información sobre el paciente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Nombre:</span>
                  <span>John Doe</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Fecha de Nacimiento:</span>
                  <span>01/01/1980</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Peso:</span>
                  <span>70kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Altura:</span>
                  <span>175cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Presión Arterial:</span>
                  <span>120/80</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Cardiopatías</CardTitle>
              <CardDescription>Detalles de las cardiopatías</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2">
                <li>Enfermedad de las arterias coronarias</li>
                <li>Arritmia</li>
                <li>Insuficiencia cardíaca</li>
                <li>Enfermedad valvular cardíaca</li>
                <li>Enfermedad pericárdica</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Cronología</CardTitle>
              <CardDescription>Línea de tiempo de eventos</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2">
                <li>01/01/2021 - Diagnosticado con CAD</li>
                <li>01/06/2021 - Comenzó medicación</li>
                <li>01/12/2021 - Chequeo rutinario</li>
                <li>01/01/2022 - Visita de seguimiento</li>
                <li>01/06/2022 - Ajuste de medicación</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
