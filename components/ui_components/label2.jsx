export default function Label2(props) {
  return (
    <lable
      className={`${props.condition == 0 ? "" : "hidden"} text-xs text-red-400`}
    >
      Can't be zero
    </lable>
  );
}
