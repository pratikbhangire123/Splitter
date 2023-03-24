import Image from "next/image";

export default function Textfield(props) {

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    props.setSplitterData((values) => ({...values, [name]: value}));
  }

  return (
    <div className="relative">
      <div className="absolute flex items-center inset-y-0 mt-1.5 left-3 pointer-events-none">
        <Image src={props.src} alt="" width={8} />
      </div>
      <input
        type="text"
        name= {props.name}
        value={props.value || ""}
        onChange={handleChange}
        placeholder="0"
        className={`w-full text-end mt-1 px-4 py-2 sm:py-1 placeholder-grayishcyan/60 bg-verylightgrayishcyan border-1 ${props.value == 0 ? "focus:outline-red-400" : "focus:outline-strongcyan"}  rounded`}
      />
    </div>
  );
}
