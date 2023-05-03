import Input from "@/components/forms/Input";
import Textarea from "@/components/forms/Textarea";
import Select from "@/components/forms/Select";
export default function FormField(props) {
  const error = props?.error || "";
  const required = props?.rules.includes("required");
  const inputProps = {
    ...props,
    name: props?.state_name,
    label: props?.title,
    placeholder: `${props?.title}${required ? "*" : ""}`,
  };
  const renderInput = () => {
    switch (props?.type) {
      case "textarea":
        return (
          <>
            <Textarea {...inputProps} />
            {error && (
              <div className="text-[12px] mt-[-30px] text-red-600">{error}</div>
            )}
          </>
        );
      case "select":
        return (
          <div>
            <Select {...inputProps} />
            {error && (
              <div className="text-[12px] mt-[2px] text-red-600">{error}</div>
            )}
          </div>
        );
      default:
        return (
          <div>
            <Input {...inputProps} />
            {error && (
              <div className="text-[12px] mt-[2px] text-red-600">{error}</div>
            )}
          </div>
        );
    }
  };

  return <>{renderInput()}</>;
}