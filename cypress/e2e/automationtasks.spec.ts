///<reference types="cypress"/>
import config from "../support/config";
import { faker } from "@faker-js/faker";
const emailPrefix = "mythilimohan.rm";
const randomNumber = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
const emailAddress = `${emailPrefix}+${randomNumber}@gmail.com`;

import {
  getlernplattformhref,
  getRegisterBtn,
  getElectronicDepartmentBtn,
  getPlantMechanicDepartmentBtn,
  getACMechanicBtn,
  getOtherDepartmentBtn,
  getNoneApprenticeshipBtn,
  getCurrentlyInTrainingBtn,
  getCompletedVocationalTrainingBtn,
  getTechnicianBtn,
  getFirstNameBtn,
  getLastNameBtn,
  getEmailBtn,
  getPasswordBtn,
  getLastStepBtn,
  getFreeRegisterBtn,
  getPhoneNumberInputField,
  getPartnersTile,
  getAllCourseTitle,
  getCourseCard,
} from "../PageObjects/loginpage";
const { waitForLoading } = config.waitTime;
const { firstName, lastName, password, mobileNumber } = config.values;

describe("Powerus automation task", () => {
  it("registers an user and creates new account to check for courses", () => {
    cy.viewport("iphone-8");
    cy.visit("/");
    getlernplattformhref().click();
    getRegisterBtn().then(($elements) => {
      expect($elements).to.have.length(2);
      getRegisterBtn().eq(0).should("be.visible").click();
    });
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/registrieren/kurse");
    });
    getElectronicDepartmentBtn().contains("Elektronik").should("be.visible");
    getPlantMechanicDepartmentBtn().should("be.visible");
    getACMechanicBtn().should("be.visible");
    getOtherDepartmentBtn().should("be.visible");
    getElectronicDepartmentBtn().contains("Elektronik").click();

    getNoneApprenticeshipBtn().should("be.visible");
    getCurrentlyInTrainingBtn().should("be.visible");
    getCompletedVocationalTrainingBtn().should("be.visible");
    getTechnicianBtn().should("be.visible");
    getCurrentlyInTrainingBtn().click({ force: true });

    getFirstNameBtn().type(firstName);
    getLastNameBtn().type(lastName);
    getEmailBtn().type(emailAddress);
    getPasswordBtn().type(password);
    getLastStepBtn()
      .contains("Zum letzten Schritt")
      .should("be.visible")
      .should("not.be.disabled")
      .should("not.be.hidden")
      .wait(waitForLoading);
    getLastStepBtn().trigger("click");
    getPhoneNumberInputField().type(faker.phone.number(mobileNumber));
    getFreeRegisterBtn()
      .contains(" Kostenlos registrieren ")
      .should("be.visible")
      .should("not.be.disabled")
      .should("not.be.hidden")
      .wait(waitForLoading);
    getFreeRegisterBtn().contains(" Kostenlos registrieren ").trigger("click");
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/kurse/alle");
    });
    getPartnersTile().should("have.contain", "Bessere Jobchancen");
    getCourseCard().then(($elements) => {
      expect($elements).to.have.length(4);
    });
    getAllCourseTitle()
      .eq(0)
      .should("have.contain", "Schaltschrank - Herzstück des Hauses");
    getCourseCard()
      .eq(0)
      .should("have.attr", "href", "/kurse/Y1JjyBQAACQATvs9");
    getAllCourseTitle()
      .eq(1)
      .should("have.contain", "E-Mobilität Installation & Grundlagen");
    getCourseCard()
      .eq(1)
      .should("have.attr", "href", "/kurse/Y1EDAhQAACUASM_7");
    getAllCourseTitle()
      .eq(2)
      .should("have.contain", "Photovoltaik Installation & Grundlagen");
    getCourseCard()
      .eq(2)
      .should("have.attr", "href", "/kurse/Y052dhQAACQAPSSA");
    getAllCourseTitle()
      .eq(3)
      .should("have.contain", "Wärmepumpen Grundlagen & Installation");
    getCourseCard()
      .eq(3)
      .should("have.attr", "href", "/kurse/Y1abrBQAACQAYcnu");
  });
});
