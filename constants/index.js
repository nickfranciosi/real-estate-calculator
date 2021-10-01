export const STREET_ADDRESS_KEY = "STREET_ADDRESS_KEY";
export const CITY_KEY = "CITY_KEY";
export const STATE_KEY = "STATE_KEY";
export const ZIP_CODE_KEY = "ZIP_CODE_KEY";
export const PURCHASE_PRICE_KEY = "PURCHASE_PRICE_KEY";
export const PURCHASE_CLOSING_COST_KEY = "PURCHASE_CLOSING_COST_KEY";
export const PROPERTY_VALUE_GROWTH_KEY = "PROPERTY_VALUE_GROWTH_KEY";
export const DOWN_PAYMENT_KEY = "DOWN_PAYMENT_KEY";
export const INTEREST_RATE_KEY = "INTEREST_RATE_KEY";
export const LOAN_TERM_KEY = "LOAN_TERM_KEY";
export const GROSS_MONTHLY_INCOME_KEY = "GROSS_MONTHLY_INCOME_KEY";
export const ANNUAL_INCOME_GROWTH_KEY = "ANNUAL_INCOME_GROWTH_KEY";
export const PROPERTY_TAXES_KEY = "PROPERTY_TAXES_KEY";
export const INSURANCE_KEY = "INSURANCE_KEY";
export const REPAIRS_MAINTENANCE_KEY = "REPAIRS_MAINTENANCE_KEY";
export const VACANCY_PERCENTAGE_KEY = "VACANCY_PERCENTAGE_KEY";
export const CAPEX_PERCENTAGE_KEY = "CAPEX_PERCENTAGE_KEY";
export const MANAGEMENT_FEE_KEY = "MANAGEMENT_FEE_KEY";
export const ELECTRICITY_COST_KEY = "ELECTRICITY_COST_KEY";
export const WATER_COST_KEY = "WATER_COST_KEY";
export const GAS_COST_KEY = "GAS_COST_KEY";
export const HOA_COST_KEY = "HOA_COST_KEY";
export const GARBAGE_COST_KEY = "GARBAGE_COST_KEY";
export const OTHER_COST_KEY = "OTHER_COST_KEY";

export const INFO = "INFO";
export const EXPENSE = "EXPENSE";
export const INCOME = "INCOME";
export const ACQUISITION = "ACQUISITION";
export const PROJECTION = "PROJECTION";
export const CASH_INVESTED = "CASH_INVESTED";

export const CATEGORY_LIST = [
  INFO,
  INCOME,
  EXPENSE,
  ACQUISITION,
  CASH_INVESTED,
];

export const PROPERTY_INFORMATION = "Property information";
export const PURCHASE = "Purchase";
export const LOAN_DETAILS = "Loan Details";
export const RENTAL_INCOME = "Rental Income";
export const EXPENSES = "Expenses";

export const FORM_SECTION_LIST = [
  PROPERTY_INFORMATION,
  PURCHASE,
  LOAN_DETAILS,
  RENTAL_INCOME,
  EXPENSES,
];

export const FORM_CONFIGURATION = {
  [STREET_ADDRESS_KEY]: {
    inputKey: STREET_ADDRESS_KEY,
    label: "Street Address",
    inputType: "string",
    category: INFO,
    section: PROPERTY_INFORMATION,
  },
  [CITY_KEY]: {
    inputKey: CITY_KEY,
    label: "City",
    inputType: "string",
    category: INFO,
    section: PROPERTY_INFORMATION,
  },
  [STATE_KEY]: {
    inputKey: STATE_KEY,
    label: "State",
    inputType: "string",
    category: INFO,
    section: PROPERTY_INFORMATION,
  },
  [ZIP_CODE_KEY]: {
    inputKey: ZIP_CODE_KEY,
    label: "Zip Code",
    inputType: "string",
    category: INFO,
    section: PROPERTY_INFORMATION,
  },
  [PURCHASE_PRICE_KEY]: {
    inputKey: PURCHASE_PRICE_KEY,
    label: "Purchase price",
    inputType: "number",
    category: ACQUISITION,
    section: PURCHASE,
  },
  [PURCHASE_CLOSING_COST_KEY]: {
    inputKey: PURCHASE_CLOSING_COST_KEY,
    label: "Purchase closing cost",
    inputType: "number",
    category: CASH_INVESTED,
    section: PURCHASE,
  },
  [PROPERTY_VALUE_GROWTH_KEY]: {
    inputKey: PROPERTY_VALUE_GROWTH_KEY,
    label: "Property value growth",
    inputType: "number",
    category: PROJECTION,
    section: PURCHASE,
  },
  [DOWN_PAYMENT_KEY]: {
    inputKey: DOWN_PAYMENT_KEY,
    label: "Down payment",
    inputType: "number",
    category: CASH_INVESTED,
    section: PURCHASE,
  },
  [INTEREST_RATE_KEY]: {
    inputKey: INTEREST_RATE_KEY,
    label: "Interest rate",
    inputType: "number",
    category: EXPENSE,
    section: PURCHASE,
  },
  [LOAN_TERM_KEY]: {
    inputKey: LOAN_TERM_KEY,
    label: "Loan term",
    inputType: "number",
    category: ACQUISITION,
    section: PURCHASE,
  },
  [GROSS_MONTHLY_INCOME_KEY]: {
    inputKey: GROSS_MONTHLY_INCOME_KEY,
    label: "Gross monthly income",
    inputType: "number",
    category: INCOME,
    section: RENTAL_INCOME,
  },
  [ANNUAL_INCOME_GROWTH_KEY]: {
    inputKey: ANNUAL_INCOME_GROWTH_KEY,
    label: "Annual income growth",
    inputType: "number",
    category: PROJECTION,
    section: RENTAL_INCOME,
  },
  [PROPERTY_TAXES_KEY]: {
    inputKey: PROPERTY_TAXES_KEY,
    label: "Property taxes",
    inputType: "number",
    category: EXPENSE,
    section: EXPENSES,
    includeInOperatingExpense: true,
  },
  [INSURANCE_KEY]: {
    inputKey: INSURANCE_KEY,
    label: "Insurance",
    inputType: "number",
    category: EXPENSE,
    section: EXPENSES,
    includeInOperatingExpense: true,
  },
  [REPAIRS_MAINTENANCE_KEY]: {
    inputKey: REPAIRS_MAINTENANCE_KEY,
    label: "Repairs/maintenance",
    inputType: "number",
    category: EXPENSE,
    section: EXPENSES,
    includeInOperatingExpense: true,
  },
  [VACANCY_PERCENTAGE_KEY]: {
    inputKey: VACANCY_PERCENTAGE_KEY,
    label: "Vacancy",
    inputType: "number",
    category: EXPENSE,
    section: EXPENSES,
  },
  [CAPEX_PERCENTAGE_KEY]: {
    inputKey: CAPEX_PERCENTAGE_KEY,
    label: "Capex",
    inputType: "number",
    category: EXPENSE,
    section: EXPENSES,
  },
  [MANAGEMENT_FEE_KEY]: {
    inputKey: MANAGEMENT_FEE_KEY,
    label: "Management fee",
    inputType: "number",
    category: EXPENSE,
    section: EXPENSES,
    includeInOperatingExpense: true,
  },
  [ELECTRICITY_COST_KEY]: {
    inputKey: ELECTRICITY_COST_KEY,
    label: "Electricity",
    inputType: "number",
    category: EXPENSE,
    section: EXPENSES,
    includeInOperatingExpense: true,
  },
  [WATER_COST_KEY]: {
    inputKey: WATER_COST_KEY,
    label: "Water",
    inputType: "number",
    category: EXPENSE,
    section: EXPENSES,
    includeInOperatingExpense: true,
  },
  [GAS_COST_KEY]: {
    inputKey: GAS_COST_KEY,
    label: "Gas",
    inputType: "number",
    category: EXPENSE,
    section: EXPENSES,
    includeInOperatingExpense: true,
  },
  [HOA_COST_KEY]: {
    inputKey: HOA_COST_KEY,
    label: "HOA",
    inputType: "number",
    category: EXPENSE,
    section: EXPENSES,
    includeInOperatingExpense: true,
  },
  [GARBAGE_COST_KEY]: {
    inputKey: GARBAGE_COST_KEY,
    label: "Garbage",
    inputType: "number",
    category: EXPENSE,
    section: EXPENSES,
    includeInOperatingExpense: true,
  },
  [OTHER_COST_KEY]: {
    inputKey: OTHER_COST_KEY,
    label: "Other",
    inputType: "number",
    category: EXPENSE,
    section: EXPENSES,
    includeInOperatingExpense: true,
  },
};
