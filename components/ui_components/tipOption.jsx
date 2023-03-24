export default function TipOption(props) {
  const handleSelectTip = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    props.setSplitterData((values) => ({ ...values, [name]: value }));
  };

  return (
    <li className="list-none">
      <input
        type="radio"
        id={props.id}
        name="tip"
        value={props.value}
        onClick={handleSelectTip}
        className="hidden peer"
      />
      <label
        htmlFor={props.id}
        className={`inline-flex justify-center w-full py-2 sm:py-1 text-verylightgrayishcyan bg-verydarkcyan peer-checked:text-verydarkcyan peer-checked:bg-strongcyan
        rounded cursor-pointer`}
      >
        {props.value}%
      </label>
    </li>
  );
}
