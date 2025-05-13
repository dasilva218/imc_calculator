
import { Progress } from "@/components/ui/progress";

type ResultProps = {
  result: {
    bmi: number;
    category: string;
    color: string;
  };
};

export function IMCResult({ result }: ResultProps) {
  // Calculer la position relative sur la barre de progression (0-100)
  const getProgressValue = (bmi: number) => {
    if (bmi < 15) return 0;
    if (bmi > 40) return 100;

    // Mapper l'IMC entre 15 et 40 à une valeur entre 0 et 100
    return ((bmi - 15) / 25) * 100;
  };

  // Fonction pour obtenir la couleur de fond de la barre de progression
  const getProgressColor = (bmi: number) => {
    if (bmi < 18.5) return "bg-gradient-to-r from-blue-200 to-blue-500";
    if (bmi < 25) return "bg-gradient-to-r from-green-200 to-green-500";
    if (bmi < 30) return "bg-gradient-to-r from-yellow-200 to-yellow-500";
    if (bmi < 35) return "bg-gradient-to-r from-orange-200 to-orange-500";
    return "bg-gradient-to-r from-red-200 to-red-700";
  };

  // Déterminer les recommandations en fonction de l'IMC
  const getRecommendation = (bmi: number) => {
    if (bmi < 18.5) {
      return "Essayez d'augmenter légèrement votre apport calorique et envisagez de consulter un professionnel de santé.";
    } else if (bmi < 25) {
      return "Votre poids est idéal ! Continuez à maintenir une alimentation équilibrée et une activité physique régulière.";
    } else if (bmi < 30) {
      return "Envisagez d'augmenter votre activité physique et de surveiller votre alimentation pour améliorer votre santé.";
    } else {
      return "Il est recommandé de consulter un professionnel de santé pour élaborer un programme adapté à votre situation.";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Votre résultat</h2>
        <div className="text-right">
          <span className="text-3xl font-bold">{result.bmi}</span>
          <span className="text-sm ml-1">kg/m²</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>15</span>
          <span>25</span>
          <span>40+</span>
        </div>
        <div className="relative">
          <Progress
            value={getProgressValue(result.bmi)}
            className={`h-3 ${getProgressColor(result.bmi)}`}
          />
          <div
            className="absolute top-0 transform -translate-x-1/2"
            style={{ left: `${getProgressValue(result.bmi)}%` }}
          >
            <div className="mt-1 border-l-2 border-gray-800 h-3"></div>
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-600 px-1">
          <span>Maigreur</span>
          <span>Normal</span>
          <span>Surpoids</span>
          <span>Obésité</span>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-lg bg-gray-50 border">
        <div className="mb-2">
          <span className="font-semibold">Catégorie : </span>
          <span className={result.color}>{result.category}</span>
        </div>
        <p className="text-gray-700 text-sm">{getRecommendation(result.bmi)}</p>
      </div>

      <div className="text-xs text-gray-500 mt-4">
        <p>
          Ce calculateur fournit une estimation. Consultez un professionnel de santé pour une évaluation complète.
        </p>
      </div>
    </div>
  );
}