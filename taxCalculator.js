"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const sales = parseFloat($("#sales").value);
    const tax = parseFloat($("#tax").value);

    if (isNaN(sales) || sales <= 0) {
        alert(getErrorMsg("Sale Amount"));
        focusAndSelect("#sales");
    } else if (isNaN(tax) || tax <= 0) {
        alert(getErrorMsg("Tax Percent"));
        focusAndSelect("#tax");
    } else {
        $("#total").value = (sales + sales * (tax/100.0)).toFixed(2);
    }
};

var clearEntries = () => {
    $("#sales").value = "";
    $("#tax").value = "";
    $("#total").value = "";
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#sales").focus();
});