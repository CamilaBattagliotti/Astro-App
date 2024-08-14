import { z } from "zod";

const usersSchema = z.object({
  name: z
    .string({
      required_error: "La propiedad name es obligatoria",
    })
    .min(3, { message: "El nombre tiene que tener como MÍNIMO 3 caracteres" })
    .max(20),
  email: z
    .string({
      required_error: "La propiedad email es obligatoria",
    })
    .email(),
});

export function usersValidator(data) {
  return usersSchema.safeParse(data);
}
