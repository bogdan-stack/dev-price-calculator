/* eslint-disable */
/* elint-disable */
"use client";

import Image from "next/image";
import CalculatorForm from "./components/CalculatorForm";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
        <div className="flex flex-col items-center justify-between gap-10">
          <div className="relative flex flex-col items-center justify-between gap-1">
            <div className="absolute inset-0.5 bg-gradient-to-t from-blue-500 via-slate-950 to-blue-500 rounded-full blur-3xl"></div>
            <Image
              className="relative"
              src="/logobhwb.svg"
              alt="logo"
              width={200}
              height={200}
            />
            <div className="relative flex flex-col items-center justify-center gap-1 text-white">
              <h1 className="text-4xl font-bold text-center ">
                {" "}
                Bogdan Helerea{" "}
              </h1>
              <p className="text-xl font-semibold text-center text-white-500">
                Full Stack Developer
              </p>
            </div>
          </div>
          <Card className=" flex flex-col md:flex-row sm:flex-row bg-gradient-to-t from-blue-950 via-slate-950 to-slate-950 relative items-center md:w-[70%] text-center text-xl">
            <CardHeader>
              <CardTitle className="items-start md:text-left sm:text-center">
                Hello I'm <span className="text-blue-500">Bogdan</span>
              </CardTitle>
              <CardDescription className="items-start md:text-left sm:text-center">
                A decade of military leadership shapes my approach to tech.
                Detail-oriented, adaptable, and passionate about dynamic web
                projects. Proven resilience in challenging environments. Explore
                my portfolio and let's build the future together.
              </CardDescription>
            </CardHeader>
            <CardContent className="md:pt-6 sm:pt-0">
              <div className="relative ">
                <div className="absolute inset-4  bg-blue-900 rounded-full blur-2xl"></div>
                <Avatar className=" relative w-40 h-40 border-2 border-blue-500 bg-blue-100">
                  <AvatarImage
                    className="relative drop-shadow-2xl"
                    src="/profil.png"
                  />
                  <AvatarFallback>HB</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>

          <div className="relative">
            <Card className="bg-gradient-to-t from-blue-950 via-slate-950 to-slate-950 relative items-center md:w-full text-center text-xl">
              <CardHeader>
                <CardTitle>
                  Try the{" "}
                  <span className="text-blue-500">Project Cost Calculator</span>
                </CardTitle>
                <CardDescription>
                  Find the best prices for your personalized web application.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant={"default"} onClick={() => setShowForm(true)}>
                  {" "}
                  Get Started{" "}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="relative grid gap-10">
            {showForm && (
              <>
                <div className="absolute inset-0.5 bg-gradient-to-t from-blue-500 to-blue-500 rounded-full blur-3xl"></div>
                <CalculatorForm />
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
