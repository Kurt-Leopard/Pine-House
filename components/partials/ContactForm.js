import FormField from "@/components/forms/FormField";
import { Fragment, useState } from "react";
import { formSubmit, isError } from "@/lib/services/formService";
import { Turnstile } from '@marsidev/react-turnstile'

export default function ContactForm({ form }) {
  const sections = form?.fields?.blueprint?.schema?.sections || [];
  const [errors, setErrors] = useState([]);
  const findClass = (field) => {
    switch (field) {
      case "message":
        return "rounded-[5px] border-[1px] py-[8.5px] px-3 min-h-[100px] sm:col-span-2";
      case "inquiry":
        return "react-select cursor-pointer border-[1px] border-[#cfcfcf] rounded-[5px] h-[35px] pt-[1px] text-sm";
      default:
        return "border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]";
    }
  };

  const [token, setToken] = useState()

  return (
    <>
      {sections.map((section) => {
        const fields = section?.fields || [];
        return (
          <Fragment key={section?.state_name}>
            <form onSubmit={(e) => formSubmit(e, form.id, sections, setErrors)}>
              <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-3 py-2 sm:gap-y-8 sm:py-8">
                {fields.map((field) => (
                  <Fragment key={field?.state_name}>
                    <FormField
                      {...field}
                      className={findClass(field?.state_name)}
                      // isClearable={true}
                      error={isError(
                        errors,
                        section?.state_name,
                        field?.state_name
                      )}
                    />
                  </Fragment>
                ))}
              </div>
              <div className="flex justify-between">
              <Turnstile
                siteKey='0x4AAAAAAADQV294WYEZ5YHU'
                onSuccess={(token) => setToken(token)}
              />
                <div>
                  <div className={`font-extrabold text-right ${token ? 'text-[#07336E]' : 'text-[#afafaf]'}`}>
                    <button disabled={!token} className={`${token ? 'cursor-pointer' : 'cursor-not-allowed'}`}>SEND</button>
                  </div>
                  <div className={`${token ? 'bg-[#07336E]' : 'bg-[#afafaf]'} h-[4px] w-[27px] float-right`} />
                </div>
              </div>
            </form>
          </Fragment>
        );
      })}
    </>
  );
}