import React from 'react';
import { useForm } from 'react-hook-form';
import { resolver } from '../../utils/FormValidation';
import { FormData } from '../../interface/interface';


interface FormDataProps {
  initialValue?: FormData;
  type?: string;
  onSubmit: (todo: FormData) => void;
}


const Form: React.FC<FormDataProps> = ({ type, onSubmit, initialValue }) => {

  const { handleSubmit, register, formState: { errors, isDirty }, formState, watch } = useForm<FormData>({ resolver });

  const watchedTitle = watch('title');
  const watchedDescription = watch('description');

  const isDataChanged = JSON.stringify(formState.dirtyFields) !== '{}';
  const isDataSame =( watchedTitle?.trim() === initialValue?.title?.trim()) && (watchedDescription?.trim() === initialValue?.description?.trim())
  
  const buttonHover = (type === 'edit' ? (formState.isValid && isDataChanged && !isDataSame) : formState.isValid || isDataChanged)

  return (

    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      {type === 'edit' && !isDirty && (
        <div className="mb-4 text-red-800">No changes made. Please update the data to proceed.</div>
      )}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title:
          {errors?.title && <span className="text-red-800">{errors?.title?.message}</span>}
        </label>
        <input
          {...register('title', { required: true, maxLength: 50, minLength: 3 })}
          id="title"
          type="text"
          maxLength={50}
          className="mt-1 p-2 w-full border rounded-md"
          defaultValue={initialValue?.title}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description:
          {errors?.description && <span className="text-red-800">{errors?.description?.message}</span>}
        </label>
        <textarea
          {...register('description', { required: true })}
          id="description"
          className="mt-1 p-2 w-full border rounded-md"
          defaultValue={initialValue?.description}
        />
      </div>
      <button
        type="submit"
        className={`w-full bg-blue-300 text-white ${buttonHover && `hover:bg-blue-700`} p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300`}
        disabled={!formState.isValid || !isDataChanged || isDataSame}
      >
        {type === 'edit' ? 'Edit Todo' : 'Add Todo'}
      </button>
    </form>

  );
};

export default Form;