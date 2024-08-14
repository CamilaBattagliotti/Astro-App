import { z } from "zod";

// En schemas defino el esquema de cada una de las entidades que tengo, el formato del modelo

const chartsSchema = z.object({
  name: z
    .string({
      required_error: "La propiedad name es obligatoria",
    })
    .min(3, { message: "El nombre tiene que tener como MÍNIMO 3 caracteres" })
    .max(20),
  birthdate: z.date({
    required_error: "La propiedad birthdate es obligatoria",
  }),
  time: z.number().min(0).max(59),
  asc: z.number().min(0).max(360),
  sun: z.number().min(0).max(360),
  moon: z.number().min(0).max(360),
  mercury: z.number().min(0).max(360),
  venus: z.number().min(0).max(360),
  mars: z.number().min(0).max(360),
  jupiter: z.number().min(0).max(360),
  saturn: z.number().min(0).max(360),
  uranus: z.number().min(0).max(360),
  neptune: z.number().min(0).max(360),
  pluto: z.number().min(0).max(360),
});

export function chartsValidator(data) {
  return chartsSchema.safeParse(data);
}
