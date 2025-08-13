import z from 'zod';

// Schema for Frontend Login Validation
export const LoginSchema = z.object({
  email: z.email("Invalid email format").min(1, "Email is required"),
  
  password: z.string().min(1, "Password is required")
})

export type LoginSchemaType = z.infer<typeof LoginSchema>;

// Schema for Frontend Register Validation