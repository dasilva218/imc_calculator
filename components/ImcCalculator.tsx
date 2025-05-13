'use client';
import { Button } from "@/components/ui/button";
import {
  Form, FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useImcCalculator from "@/hooks/useImcCalculator";
import { Calculator } from "lucide-react";
// import { toast } from "@/components/ui/use-toast";

type Props = {
  onCalculate: (result: { bmi: number; category: string; color: string }) => void;
};


export function IMCCalculator({ onCalculate }: Props) {

  const { form, unitChange, onSubmit } = useImcCalculator({ onCalculate });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex items-center space-x-2 mb-6">
          <Calculator className="h-5 w-5 text-blue-500" />
          <h2 className="text-2xl font-semibold">Entrez vos mesures</h2>
        </div>

        <FormField
          control={form.control}
          name="unit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Système d'unités</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez vos unités" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="metric">Métrique (kg/cm)</SelectItem>
                  <SelectItem value="imperial">Impérial (lb/in)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Poids {unitChange === "metric" ? "(kg)" : "(lb)"}</FormLabel>
              <FormControl>
                <Input
                  placeholder={
                    unitChange === "metric" ? "Exemple: 70" : "Exemple: 154"
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Taille {unitChange === "metric" ? "(cm)" : "(in)"}</FormLabel>
              <FormControl>
                <Input
                  placeholder={
                    unitChange === "metric" ? "Exemple: 175" : "Exemple: 69"
                  }
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {unitChange === "metric"
                  ? "Entrez votre taille en centimètres"
                  : "Entrez votre taille en pouces"}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              form.reset({
                weight: "",
                height: "",
                unit: "metric",
              });
              onCalculate(null);
            }}
          >
            Réinitialiser
          </Button>
          <Button type="submit">Calculer mon IMC</Button>
        </div>
      </form>
    </Form>
  );
}