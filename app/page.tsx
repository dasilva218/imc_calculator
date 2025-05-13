'use client';
import { IMCCalculator } from "@/components/ImcCalculator";
import { IMCInfo } from "@/components/IMCInfo";
import { IMCResult } from "@/components/IMCResult";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

type ResultProps = {
  bmi: number;
  category: string;
  color: string;
};

export default function Home() {

  const [bmiResult, setBmiResult] = useState < ResultProps | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-blue-100">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">Calculateur d'IMC</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Calculez votre Indice de Masse Corporelle et découvrez où vous vous situez
      </p>

      <div className="w-full max-w-3xl">
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="calculator">Calculateur</TabsTrigger>
            <TabsTrigger value="information">Informations</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 shadow-md">
                <IMCCalculator onCalculate={setBmiResult} />
              </Card>

              <Card className={`p-6 shadow-md result-card ${bmiResult ? 'show' : ''}`}>
                {bmiResult ? (
                  <IMCResult result={bmiResult} />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <p>Remplissez vos informations et cliquez sur Calculer</p>
                  </div>
                )}
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="information">
            <Card className="p-6 shadow-md">
              <IMCInfo />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
