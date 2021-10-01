import {
  INCOME,
  EXPENSE,
  CASH_INVESTED,
  DOWN_PAYMENT_KEY,
  PURCHASE_PRICE_KEY,
  INTEREST_RATE_KEY,
  LOAN_TERM_KEY,
  VACANCY_PERCENTAGE_KEY,
} from "../constants";
import sum from "lodash/sum";
import { getFieldsByCategory } from "../constants/utils";

export const getTotalIncome = (data) => {
  return getTotalOfFieldType(data, INCOME);
};

export const getTotalExpense = (data) => {
  return getTotalOfFieldType(data, EXPENSE);
};

export const getTotalCashInvested = (data) => {
  return getTotalOfFieldType(data, CASH_INVESTED);
};

export const getNetOperatingIncome = (data) => {
  const grossOperatingIncome = getGrossOperatingIncome(data);
};

export const getGrossOperatingIncome = (data) => {
  const {
    VACANCY_PERCENTAGE_KEY: vacancyPercentage,
    GROSS_MONTHLY_INCOME_KEY: grossRent,
  } = data;
  const totalYearlyIncome = getTotalIncome(data) * 12;
  const totalYearlyVacancy =
    _strToInt(grossRent) * (_strToInt(vacancyPercentage) / 100) * 12;
  return totalYearlyIncome - totalYearlyVacancy;
};

export const getMonthlyMortgagePayment = (data) => {
  const {
    DOWN_PAYMENT_KEY: downPayment,
    PURCHASE_PRICE_KEY: purchasePrice,
    INTEREST_RATE_KEY: interestRate,
    LOAN_TERM_KEY: loanTerm,
  } = data;
  console.log({ interestRate });
  const principalAmount = _strToInt(purchasePrice) - _strToInt(downPayment);

  // Take the interest rate and break out into monthly installments
  const monthlyInterestRate = _strToInt(interestRate) / 100 / 12;
  const numberOfPaymentsOverLifetime = _strToInt(loanTerm) * 12;
  console.log({ monthlyInterestRate });
  const monthlyMortgagePayment = _monthlyPayment(
    principalAmount,
    monthlyInterestRate,
    numberOfPaymentsOverLifetime
  );

  return monthlyMortgagePayment;
};

function _monthlyPayment(principal, interest, installments) {
  return (
    (principal * interest * Math.pow(1 + interest, installments)) /
    (Math.pow(1 + interest, installments) - 1)
  );
}

const _strToInt = (str = "") => {
  return parseInt(str) || 0;
};

export const getTotalOfFieldType = (data, fieldType) => {
  const fieldKeys = getFieldsByCategory()[fieldType].map((i) => i.inputKey);
  const valuesFromData = Object.keys(data).reduce((acc, curr) => {
    return fieldKeys.includes(curr) ? [...acc, _strToInt(data[curr])] : acc;
  }, []);
  console.log({ fieldType, fieldKeys });
  return sum(valuesFromData);
};
