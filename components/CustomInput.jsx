import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";

const CustomInput = ({name,form,label,placeholder,type}) => {
  return (
    <>
       <FormField
              control={form.control}
              name={name}
              render={({ field }) => (
               <div className='form-item'>
 <FormItem>
                  <div className='form-label'>
                    <FormLabel>{label}</FormLabel>
                  </div>
                  <div className='w-full flex flex-col'
                  >

<FormControl>
                    <Input placeholder={placeholder} type={type} {...field} className="input-class" />
                  </FormControl>
                  </div>
                 
                  <FormMessage className="form-message " />
                </FormItem>



               </div>
              )}
            />
    </>
  )
}

export default CustomInput
