
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info } from "lucide-react";

export function IMCInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-4">
        <Info className="h-5 w-5 text-blue-500" />
        <h2 className="text-2xl font-semibold">À propos de l'IMC</h2>
      </div>

      <p className="text-gray-700">
        L'Indice de Masse Corporelle (IMC) est une mesure qui permet d'évaluer
        la corpulence d'une personne en fonction de sa taille et de son poids.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
        <h3 className="font-medium text-blue-800 mb-2">Comment est calculé l'IMC ?</h3>
        <p className="text-gray-700">
          L'IMC se calcule en divisant le poids (en kilogrammes) par le carré de la taille (en mètres).
        </p>
        <div className="mt-2 p-3 bg-white rounded border border-blue-100 text-center">
          <p className="font-medium">IMC = Poids (kg) / Taille² (m)</p>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="categories">
          <AccordionTrigger className="font-medium">Catégories d'IMC</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pl-2">
              <div className="flex justify-between">
                <span>Insuffisance pondérale sévère</span>
                <span className="text-blue-700 font-medium">IMC &lt; 16.5</span>
              </div>
              <div className="flex justify-between">
                <span>Insuffisance pondérale modérée</span>
                <span className="text-blue-600 font-medium">16.5 ≤ IMC &lt; 18.5</span>
              </div>
              <div className="flex justify-between">
                <span>Corpulence normale</span>
                <span className="text-green-600 font-medium">18.5 ≤ IMC &lt; 25</span>
              </div>
              <div className="flex justify-between">
                <span>Surpoids</span>
                <span className="text-yellow-600 font-medium">25 ≤ IMC &lt; 30</span>
              </div>
              <div className="flex justify-between">
                <span>Obésité modérée (Classe I)</span>
                <span className="text-orange-600 font-medium">30 ≤ IMC &lt; 35</span>
              </div>
              <div className="flex justify-between">
                <span>Obésité sévère (Classe II)</span>
                <span className="text-red-600 font-medium">35 ≤ IMC &lt; 40</span>
              </div>
              <div className="flex justify-between">
                <span>Obésité morbide (Classe III)</span>
                <span className="text-red-700 font-medium">IMC ≥ 40</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="limitations">
          <AccordionTrigger className="font-medium">Limites de l'IMC</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">L'IMC présente certaines limites :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ne prend pas en compte la composition corporelle (muscles vs graisse)</li>
              <li>Peut être imprécis pour les sportifs, les personnes âgées ou les femmes enceintes</li>
              <li>Ne tient pas compte de la répartition des graisses corporelles</li>
              <li>Ne considère pas les différences morphologiques entre les populations</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="recommendations">
          <AccordionTrigger className="font-medium">Recommandations</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <p>
                L'IMC est un outil d'évaluation rapide, mais ne remplace pas l'avis médical d'un professionnel de santé.
                Pour une évaluation complète, consultez votre médecin ou un nutritionniste.
              </p>
              <p>
                Une alimentation équilibrée et une activité physique régulière contribuent à maintenir un poids santé,
                indépendamment de l'IMC.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}