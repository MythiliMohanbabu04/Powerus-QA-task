export const getlernplattformhref = () => {
  return cy.get('[href="lernplattform"]');
};
export const getRegisterBtn = () => {
  return cy.get('[class="mat-button-wrapper"]');
};
export const getElectronicDepartmentBtn = () => {
  return cy.get('[data-value="electronic"]');
};
export const getPlantMechanicDepartmentBtn = () => {
  return cy.get('[data-value="installation-mechanic"]');
};
export const getACMechanicBtn = () => {
  return cy.get('[data-value="refrigeration"]');
};
export const getOtherDepartmentBtn = () => {
  return cy.get('[icon="tools-wench-screwdriver"] > .mat-card');
};
export const getNoneApprenticeshipBtn = () => {
  return cy.get('[data-value="none"]');
};
export const getCurrentlyInTrainingBtn = () => {
  return cy.get('[data-value="in-apprenticeship"]');
};
export const getCompletedVocationalTrainingBtn = () => {
  return cy.get('[data-value="apprenticeship"]');
};
export const getTechnicianBtn = () => {
  return cy.get('[data-value="higher-education"]');
};
export const getFirstNameBtn = () => {
  return cy.get("#mat-input-0");
};
export const getLastNameBtn = () => {
  return cy.get('[name="lastName"]');
};
export const getEmailBtn = () => {
  return cy.get('[name="email"]');
};
export const getPasswordBtn = () => {
  return cy.get('[name="password"]');
};
export const getLastStepBtn = () => {
  return cy.get(
    '[class="mat-focus-indicator btn cta mat-flat-button mat-button-base mat-primary ng-star-inserted"]'
  );
};
export const getFreeRegisterBtn = () => {
  return cy.get(
    '[class="mat-focus-indicator btn cta-register mat-flat-button mat-button-base mat-primary ng-star-inserted"]'
  );
};
export const getPhoneNumberInputField = () => {
  return cy.get(
    ".input > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
  );
};
export const getPartnersTile = () => {
  return cy.get(".partners");
};
export const getAllCourseTitle = () => {
  return cy.get('[class="name"]');
};
export const getCourseCard = () => {
  return cy.get('[class="course-card"]');
};
