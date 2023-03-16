import Select from "react-select";
export default function Input(props) {
  const options = props.options;
  return (
    <Select
      {...props}
      onChange={(e) => {
        if (props?.onChange) props?.onChange(e);
      }}
      options={options}
    />
  );
}
