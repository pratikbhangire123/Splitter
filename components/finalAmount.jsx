export default function FinalAmount(props) {
    return(
        <div className="flex justify-between mt-4">
          <div>
            <label className="align-bottom text-xs text-lightgrayishcyan">
              {props.amountType} <br />
            </label>
            <label className="align-top text-[0.60rem] text-grayishcyan">
              / person
            </label>
          </div>
          <label className="text-3xl self-center text-strongcyan">{props.amount.toFixed(2)}</label>
        </div>
    )
}