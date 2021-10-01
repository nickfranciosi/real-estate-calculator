import groupBy from "lodash/groupBy";
import { FORM_CONFIGURATION } from ".";

export const getFieldsBySection = (section) => {
  return groupBy(FORM_CONFIGURATION, "section");
};

export const getFieldsByCategory = (category) => {
  return groupBy(FORM_CONFIGURATION, "category");
};
