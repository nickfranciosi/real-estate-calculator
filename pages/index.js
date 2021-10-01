import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FORM_CONFIGURATION, FORM_SECTION_LIST } from "../constants";
import { getFieldsBySection } from "../constants/utils";
import {
  getTotalIncome,
  getTotalExpense,
  getTotalCashInvested,
  getMonthlyMortgagePayment,
} from "../calculations";

const InputWrapper = styled.div`
  display: flex;
`;

const Label = styled.div`
  margin-right: 1rem;
`;

const FormSection = ({ heading, children }) => {
  return (
    <section>
      <h3>{heading}</h3>
      {children}
    </section>
  );
};

const Input = ({ inputConfig, register, ...props }) => {
  const { label, inputType, inputKey, required } = inputConfig;
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <input {...register(inputKey, { required })} type={inputType} />
      {required ? <span>*</span> : ""}
    </InputWrapper>
  );
};

const analyzeDeal = (data) => {
  console.log({ data });

  const totalIncome = getTotalIncome(data);
  const totalExpense = getTotalExpense(data);
  const totalInvested = getTotalCashInvested(data);
  const monthlyMortgagePayment = getMonthlyMortgagePayment(data);

  console.log({ totalIncome, totalExpense, totalInvested });

  const monthlyCashFlow = totalIncome - totalExpense - monthlyMortgagePayment;
  const annualPreTaxCashFlow = monthlyCashFlow * 12;
  const cashOnCashReturn = annualPreTaxCashFlow / totalInvested;

  const report = {
    monthlyCashFlow,
    annualPreTaxCashFlow,
    cashOnCashReturn,
    monthlyMortgagePayment,
    rentalIncome: totalIncome,
    expenses: totalExpense,
  };
  console.log({ report });
  return report;
};

export default function Home() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // console.log({ data });
    analyzeDeal(data);
  };

  const formSections = getFieldsBySection();
  console.log({ formSections });
  const formSectionComponents = Object.keys(formSections).map(
    (sectionKey, sectionId) => (
      <FormSection key={sectionId} heading={sectionKey}>
        {formSections[sectionKey].map((item, itemId) => (
          <Input key={itemId} inputConfig={item} register={register} />
        ))}
      </FormSection>
    )
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        {formSectionComponents}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
