import z from 'zod';

// Schema for Frontend Login Validation
export const LoginSchema = z.object({
  email: z.email("Invalid email format").min(1, "Email is required"),
  
  password: z.string().min(1, "Password is required")
})

export type LoginSchemaType = z.infer<typeof LoginSchema>;

// Schema for Frontend Register Validation
export const RegisterSchema = z.object({
    first_name: z.string().min(1, "First name is required."),
    last_name: z.string().min(1, "Last name is required."),
    // Possible scenarios for email validation
    email: z
      .string()
      .min(1, "Email is required.")
      .email("Invalid email format."),
    password: z.string().min(6, "Password must be at least 6 characters."),
    confirm_password: z.string().min(1, "Confirm Password is required."),
  })
  // Password Validation
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords do not match.",
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>