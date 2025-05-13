import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";


const formSchema = z.object({
  weight: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Le poids doit être un nombre positif",
  }),
  height: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "La taille doit être un nombre positif",
  }),
  unit: z.enum(["metric", "imperial"]),
});

type Props = {
  onCalculate: (result: { bmi: number; category: string; color: string }) => void;
};

export default function useImcCalculator({ onCalculate }: Props) {

  const [lastValues, setLastValues] = useState({
    weight: "",
    height: "",
    unit: "metric" as const,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weight: "",
      height: "",
      unit: "metric",
    },
  });

  const calculateBMI = (weight: number, height: number, unit: string) => {
    let bmi: number;
    if (unit === "metric") {
      // Poids en kg, taille en cm
      bmi = weight / ((height / 100) * (height / 100));
    } else {
      // Poids en lb, taille en pouces
      bmi = (weight / (height * height)) * 703;
    }
    return parseFloat(bmi.toFixed(1));
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: "Insuffisance pondérale", color: "text-blue-500" };
    if (bmi < 25) return { category: "Corpulence normale", color: "text-green-500" };
    if (bmi < 30) return { category: "Surpoids", color: "text-yellow-500" };
    if (bmi < 35) return { category: "Obésité modérée", color: "text-orange-500" };
    if (bmi < 40) return { category: "Obésité sévère", color: "text-red-500" };
    return { category: "Obésité morbide", color: "text-red-700" };
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const weight = parseFloat(values.weight);
      const height = parseFloat(values.height);
      const bmi = calculateBMI(weight, height, values.unit);
      const { category, color } = getBMICategory(bmi);

      onCalculate({ bmi, category, color });
      setLastValues(values);

      toast("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      })
    } catch (error) {
      toast("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      })
    }
  }

  const unitChange = form.watch("unit");

  return {
    form,
    lastValues,
    unitChange,
    onSubmit,
  };
}