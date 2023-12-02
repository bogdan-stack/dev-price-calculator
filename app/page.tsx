import Image from 'next/image'
import CalculatorForm from './components/CalculatorForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">

      <div className="flex flex-col items-center justify-between gap-10">

        <div className='relative flex flex-col items-center justify-between gap-1'>
        <div className='absolute inset-0.5 bg-gradient-to-t from-blue-500 via-slate-950 to-blue-500 rounded-full blur-3xl'></div>
        <Image
          className="relative"
          src="/logobhwb.svg"
          alt="logo"
          width={200}
          height={200}
        />
        <div className="relative flex flex-col items-center justify-center gap-1 text-transparent bg-clip-text bg-gradient-to-r from-white to bg-slate-400">
        <h1 className="text-4xl font-bold text-center "> Bogdan Helerea </h1>
        <p className="text-xl font-semibold text-center text-white-500">Full Stack Developer</p>
        </div>
        </div>
        <div className='relative'>
          
        <Card className='bg-gradient-to-t from-blue-950 via-slate-950 to-slate-950 relative items-center w-90 text-center text-xl'>
          <CardHeader>
            <CardTitle>Welcome to <span className="text-blue-500">Project Cost Calculator</span></CardTitle>
            <CardDescription >The best place to find the best prices for your favorite developer tools.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant={"default"}> Get Started </Button>
          </CardContent>
        </Card>
        </div>
        <div className='relative'>
          <div className='absolute inset-2.5 bg-blue-500 rounded-lg blur-xl'></div>
        <CalculatorForm />
        </div>
      </div>
    </main>
  )
}
