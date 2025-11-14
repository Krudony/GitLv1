import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

interface FormProps<T extends Record<string, any>> {
  form: UseFormReturn<T>;
  onSubmit: (data: T) => Promise<void> | void;
  children: React.ReactNode;
  className?: string;
}

const Form = React.forwardRef<
  HTMLFormElement,
  FormProps<any>
>(({ form, onSubmit, children, className }, ref) => {
  return (
    <FormProvider {...form}>
      <form
        ref={ref}
        onSubmit={form.handleSubmit(onSubmit)}
        className={className}
        noValidate
      >
        {children}
      </form>
    </FormProvider>
  );
});

Form.displayName = 'Form';

export default Form;
