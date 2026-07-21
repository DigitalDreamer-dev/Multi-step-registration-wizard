import { z } from "zod";

export const formSchema = z
  .object({
    firstName: z.string().min(3, "First name must be at least 3 characters"),

    lastName: z.string().min(2, "Last name is required"),

    email: z.string().email("Enter a valid email"),

    username: z.string().min(4, "Username must be at least 4 characters"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain an uppercase letter")
      .regex(/[a-z]/, "Must contain a lowercase letter")
      .regex(/[0-9]/, "Must contain a number"),

    confirmPassword: z.string().min(1, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
