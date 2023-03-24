import Label from "./ui_components/label";
import Dollar from "../public/icon-dollar.svg";
import Person from "../public/icon-person.svg";
import Textfield from "./ui_components/textfield";
import TipOption from "./ui_components/tipOption";
import FinalAmount from "./finalAmount";
import { useEffect, useState } from "react";
import Label2 from "./ui_components/label2";

export default function TipCalculator() {
  const [splitterData, setSplitterData] = useState({
    bill: undefined,
    tip: undefined,
    nopeople: undefined,
  });
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (
      splitterData.bill == undefined ||
      splitterData.tip == undefined ||
      splitterData.nopeople == undefined
    ) {
      return;
    } else {
      calculateFinalAmount();
    }
  });

  const setCustomTip = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSplitterData((values) => ({ ...values, [name]: value }));
  };

  const calculateFinalAmount = () => {
    const tempTipAmount =
      ((splitterData.tip / 100) * splitterData.bill) / splitterData.nopeople;
    setTipAmount(tempTipAmount);

    const tempTotalAmount =
      splitterData.bill / splitterData.nopeople + tempTipAmount;
    setTotalAmount(tempTotalAmount);
  };

  const clearSplitterData = () => {
    setSplitterData((values) => values == undefined);
    setTipAmount(0);
    setTotalAmount(0);
    document.getElementById("splitterForm").reset();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:w-1/2 mt-8 sm:mt-12 p-6 bg-white rounded-t-2xl sm:rounded-2xl">
      <form id="splitterForm" className="flex flex-col">
        <div>
          <div className="flex justify-between">
            <Label name="Bill" />
            <Label2 condition={splitterData.bill} />
          </div>
          <Textfield
            src={Dollar}
            name="bill"
            value={splitterData.bill}
            setSplitterData={setSplitterData}
          />
        </div>
        <div className="mt-5">
          <Label name="Select Tip %" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
            <TipOption id={1} value={"5"} setSplitterData={setSplitterData} />
            <TipOption id={2} value={"10"} setSplitterData={setSplitterData} />
            <TipOption id={3} value={"15"} setSplitterData={setSplitterData} />
            <TipOption id={4} value={"25"} setSplitterData={setSplitterData} />
            <TipOption id={5} value={"50"} setSplitterData={setSplitterData} />
            <input
              type="text"
              name="tip"
              onChange={setCustomTip}
              placeholder="Custom"
              className="text-center placeholder-darkgrayishcyan bg-verylightgrayishcyan border-1 focus:outline-strongcyan rounded"
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex justify-between">
            <Label name="Number of People" />
            <Label2 condition={splitterData.nopeople} />
          </div>
          <Textfield
            src={Person}
            name="nopeople"
            value={splitterData.nopeople}
            setSplitterData={setSplitterData}
          />
        </div>
      </form>
      <div className="flex flex-col justify-between px-6 pt-2 pb-6 bg-verydarkcyan rounded-lg">
        <div>
          <FinalAmount amountType="Tip Amount" amount={tipAmount} />
          <FinalAmount amountType="Total" amount={totalAmount} />
        </div>
        <input
          type="reset"
          value="RESET"
          disabled={tipAmount == 0 && totalAmount == 0 ? true : false}
          onClick={clearSplitterData}
          className="max-sm:mt-5 py-2 sm:text-xs text-verydarkcyan bg-strongcyan rounded cursor-pointer disabled:opacity-30 disabled:text-opacity-30 disabled:cursor-not-allowed"
        />
      </div>
    </div>
  );
}
