"use strict";
//variables
//set the service fees for product line:
var standard = 0.1,
  premium = 0.13,
  excelium = 0.16;
//NEED TO PARSE THROUGH AND STORE IN VAR FOR LATER//
//////////////////////////////////////////////////////////
//function to reset numbers after buildingtype change
function myReset() {
  document.getElementById("nbBasements").value = 0;
  document.getElementById("nbApartments").value = 0;
  document.getElementById("nbFloors").value = 0;
  document.getElementById("nbParking").value = 0;
  document.getElementById("nbCompanies").value = 0;
  document.getElementById("nbElevators").value = 0;
  document.getElementById("nbCorporations").value = 0;
  document.getElementById("nbMax").value = 0;
  document.getElementById("nbHours").value = 0;
  document.getElementById("installationFees").value = 0;
  document.getElementById("unitPrice").value = 0;
  document.getElementById("numberElevators").value = 0;
  document.getElementById("totalPrice").value = 0;
  document.getElementById("finalPrice").value = 0;
}

//get value of each radio button for use in following functions. saves time later
var sValue = parseFloat(document.getElementById("standard").value);
var pValue = parseFloat(document.getElementById("premium").value);
var eValue = parseFloat(document.getElementById("excelium").value);

//if else statement for picking building type
var buildingSelect = function () {
  if ($("#buildingType").val() == "Residential") {
    residential();
  } else if ($("#buildingType").val() == "Commercial") {
    commercial();
  } else if ($("#buildingType").val() == "Corporate") {
    corporate();
  } else if ($("#buildingType").val() == "Hybrid") {
    hybrid();
  }
};
//////////////////////////////////////////////////////////

//residential function
//make vars to store values of the options to use later with stated restrictions
//if else statement for each product line selected?
var residential = function () {
  //var section
  //get number of apartments
  var nbAppartment = parseFloat(document.getElementById("nbApartments").value);
  console.log(nbAppartment + " number of apartments");

  //get number of floors
  var nbFloor = parseFloat(document.getElementById("nbFloors").value);
  console.log(nbFloor + " number of floors");

  //calculate average doors per floor
  var avgPerFloor = Math.ceil(nbAppartment / nbFloor);
  console.log(avgPerFloor + " average doors per floor");

  //calc number of elevators needed
  var elevatorsNeeded = Math.ceil(avgPerFloor / 6);

  //calc number of elevator columns
  var nbElevatorColumns = Math.ceil(nbFloor / 20);
  console.log("elevator columns is " + nbElevatorColumns);
  ////////////////////////////////////////////////////
  //if else section
  //if standard is checked,
  if (document.getElementById("standard").checked) {
    console.log("standard is selected");
    elevatorsNeeded *= nbElevatorColumns;
    console.log("elevators needed is " + elevatorsNeeded);
    //price for elevator for standard
    var elevatorPrice = sValue;
    console.log("elevator price is " + elevatorPrice);
    //if nbFloor > 20, multiply the (AvgPerFloor/6) by 2
    //for total price of elevators
    var totalPrice = parseFloat(elevatorsNeeded * sValue);
    console.log("total price is " + totalPrice);

    //installation fees
    var iFees = totalPrice * standard;
    console.log("install fee is " + iFees);

    //final price
    var finalPrice = totalPrice + iFees;
    console.log("final price is " + finalPrice);

    //////////////////////////////////////////////////////////
    //if premium is checked,
  } else if (document.getElementById("premium").checked) {
    console.log("premium is selected");
    elevatorsNeeded *= nbElevatorColumns;
    // if (nbFloor > 20) {
    //   elevatorsDoubled = elevatorsNeeded * 2;
    // }
    var elevatorPrice = pValue;
    var totalPrice = parseFloat(elevatorsNeeded * pValue);
    var iFees = totalPrice * premium;
    var finalPrice = totalPrice + iFees;
  }
  //if excelium is checked,
  else if (document.getElementById("excelium").checked) {
    console.log("excelium is selected");
    elevatorsNeeded *= nbElevatorColumns;

    var elevatorPrice = eValue;
    var totalPrice = parseFloat(elevatorsNeeded * eValue);
    var iFees = totalPrice * excelium;
    var finalPrice = totalPrice + iFees;
  }
  //currency conversion
  iFees = iFees.toLocaleString("en", { style: "currency", currency: "USD" });
  elevatorPrice = elevatorPrice.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  totalPrice = totalPrice.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  finalPrice = finalPrice.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  //output
  document.getElementById("numberElevators").value = elevatorsNeeded;
  document.getElementById("unitPrice").value = elevatorPrice;
  document.getElementById("totalPrice").value = totalPrice;
  document.getElementById("installationFees").value = iFees;
  document.getElementById("finalPrice").value = finalPrice;
};

//////////////////////////////////////////////////////////
//commercial function
var commercial = function () {
  //////////////////////////////////////////////////////////
  //var number of elevator cages to be deployed
  var elevatorCage = parseFloat(document.getElementById("nbElevators").value);
  console.log(elevatorCage + " Elevator cages needed.");
  if (document.getElementById("standard").checked) {
    var elevatorsNeeded = elevatorCage; //elevator needed
    var elevatorPrice = sValue; //elevator price
    var totalPrice = parseFloat(elevatorsNeeded * sValue); //total price
    var iFees = totalPrice * standard; //installation fee
    var finalPrice = totalPrice + iFees; //final price
  }
  //////////////////////////////////////////////////////////
  else if (document.getElementById("premium").checked) {
    var elevatorsNeeded = elevatorCage; //elevator needed
    var elevatorPrice = pValue; //elevator price
    var totalPrice = parseFloat(elevatorsNeeded * pValue); //total price
    var iFees = totalPrice * premium; //installation fee
    var finalPrice = totalPrice + iFees; //final price
  }
  //////////////////////////////////////////////////////////
  else if (document.getElementById("excelium").checked) {
    var elevatorsNeeded = elevatorCage; //elevator needed
    var elevatorPrice = eValue; //elevator price
    var totalPrice = parseFloat(elevatorsNeeded * eValue); //total price
    var iFees = totalPrice * excelium; //installation fee
    var finalPrice = totalPrice + iFees; //final price
  }
  //set vals as usd
  iFees = iFees.toLocaleString("en", { style: "currency", currency: "USD" });
  elevatorPrice = elevatorPrice.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  totalPrice = totalPrice.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  finalPrice = finalPrice.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  //output
  document.getElementById("installationFees").value = iFees;
  document.getElementById("unitPrice").value = elevatorPrice;
  document.getElementById("totalPrice").value = totalPrice;
  document.getElementById("numberElevators").value = elevatorsNeeded;
  document.getElementById("finalPrice").value = finalPrice;
};
//////////////////////////////////////////////////////////
//corporate function
//vars store values of options, emplace restrictions
var corporate = function () {
  var nbFloor = parseFloat(document.getElementById("nbFloors").value);
  var nbBasement = parseFloat(document.getElementById("nbBasements").value);
  var nbMax = parseFloat(document.getElementById("nbMax").value); //people per floor
  var totalFloor = nbFloor + nbBasement;
  var maxPerson = nbMax * totalFloor;
  var nbElevators = maxPerson / 1000;
  var nbColumns = totalFloor / 20;
  var nbColumns = Math.ceil(nbColumns);
  var elevatorPerColumn = nbElevators / nbColumns;
  var elevatorPerColumn = Math.ceil(elevatorPerColumn);
  var totalNbElevators = elevatorPerColumn * nbColumns;

  if (document.getElementById("standard").checked) {
    var totalElevatorPrice = sValue * totalNbElevators;
    var iFees = totalElevatorPrice * standard;
    var finalPrice = totalElevatorPrice + iFees;
    var unitPrice = sValue;
  }
  //////////////////////////////////////////////////////////
  else if (document.getElementById("premium").checked) {
    var totalElevatorPrice = pValue * totalNbElevators;
    var iFees = totalElevatorPrice * premium;
    var finalPrice = totalElevatorPrice + iFees;
    var unitPrice = pValue;
  }
  //////////////////////////////////////////////////////////
  else if (document.getElementById("excelium").checked) {
    var totalElevatorPrice = eValue * totalNbElevators;
    var iFees = totalElevatorPrice * excelium;
    var finalPrice = totalElevatorPrice + iFees;
    var unitPrice = eValue;
  }
  //set vals as usd
  iFees = iFees.toLocaleString("en", { style: "currency", currency: "USD" });
  unitPrice = unitPrice.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  totalElevatorPrice = totalElevatorPrice.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  finalPrice = finalPrice.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  //output
  document.getElementById("installationFees").value = iFees;
  document.getElementById("unitPrice").value = unitPrice;
  document.getElementById("numberElevators").value = totalNbElevators;
  document.getElementById("totalPrice").value = totalElevatorPrice;
  document.getElementById("finalPrice").value = finalPrice;
};
//////////////////////////////////////////////////////////
//hybrid function
//vars store option values, restrictions, etc.
var hybrid = function () {
  var nbFloor = parseFloat(document.getElementById("nbFloors").value);
  console.log("number floors " + nbFloor);
  var nbBasement = parseFloat(document.getElementById("nbBasements").value);
  console.log("number basements " + nbBasement);
  var nbMax = parseFloat(document.getElementById("nbMax").value);
  console.log("people per floor " + nbMax);
  var totalFloor = nbFloor + nbBasement;
  console.log("total floor " + totalFloor);
  var maxPerson = nbMax * totalFloor;
  console.log("max occupancy is " + maxPerson);
  var nbElevators = maxPerson / 1000;
  console.log("elevators required = " + nbElevators);
  var nbColumns = totalFloor / 20;
  var nbColumns = Math.ceil(nbColumns);
  console.log("columns required is " + nbColumns);
  var elevatorPerColumn = nbElevators / nbColumns;
  var elevatorPerColumn = Math.ceil(elevatorPerColumn);
  console.log("elevators/columns, rounded up " + elevatorPerColumn);
  var totalNbElevators = elevatorPerColumn * nbColumns;
  console.log("final amount of elevators " + totalNbElevators);
  if (document.getElementById("standard").checked) {
    var totalElevatorPrice = sValue * totalNbElevators;
    var iFees = totalElevatorPrice * standard;
    var finalPrice = totalElevatorPrice + iFees;
    var unitPrice = sValue;
  }
  //////////////////////////////////////////////////////////
  else if (document.getElementById("premium").checked) {
    var totalElevatorPrice = pValue * totalNbElevators;
    var iFees = totalElevatorPrice * premium;
    var finalPrice = totalElevatorPrice + iFees;
    var unitPrice = pValue;
  }
  //////////////////////////////////////////////////////////
  else if (document.getElementById("excelium").checked) {
    var totalElevatorPrice = eValue * totalNbElevators;
    var iFees = totalElevatorPrice * excelium;
    var finalPrice = totalElevatorPrice + iFees;
    var unitPrice = eValue;
  }
  //set vals to USD
  iFees = iFees.toLocaleString("en", { style: "currency", currency: "USD" });
  unitPrice = unitPrice.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  totalElevatorPrice = totalElevatorPrice.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  finalPrice = finalPrice.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  //output
  console.log("Done...............................................");
  document.getElementById("installationFees").value = iFees;
  document.getElementById("unitPrice").value = unitPrice;
  document.getElementById("numberElevators").value = totalNbElevators;
  document.getElementById("totalPrice").value = totalElevatorPrice;
  document.getElementById("finalPrice").value = finalPrice;
};
//////////////////////////////////////////////////////////
//Ready Document

//If Else Version Alternate
$("#buildingType").change(function () {
  if ($(this).val() == "Residential") {
    $("#options").show();
    $(".Uni").show();
    $("#number-of-apartments").show();
    $("#number-of-companies").hide();
    $("#number-of-elevators").hide();
    $("#number-of-corporations").hide();
    $("#number-of-parking-spots").hide();
    $("#maximum-occupancy").hide();
    $("#business-hours").hide();
    myReset();
  } else if ($(this).val() == "Commercial") {
    $("#options").show();
    $(".Uni").show();
    $("#number-of-companies").show();
    $("#number-of-parking-spots").show();
    $("#maximum-occupancy").hide();
    $("#business-hours").hide();
    $("#number-of-elevators").show();
    $("#number-of-corporations").hide();
    $("#number-of-apartments").hide();
    myReset();
  } else if ($(this).val() == "Corporate") {
    $("#options").show();
    $(".Uni").show();
    $("#number-of-companies").hide();
    $("#number-of-parking-spots").show();
    $("#maximum-occupancy").show();
    $("#business-hours").hide();
    $("#number-of-elevators").hide();
    $("#number-of-corporations").show();
    $("#number-of-apartments").hide();
    $("#number-of-elevators").hide();
    myReset();
  } else if ($(this).val() == "Hybrid") {
    $("#options").show();
    $(".Uni").show();
    $("#number-of-companies").show();
    $("#number-of-parking-spots").show();
    $("#maximum-occupancy").show();
    $("#business-hours").show();
    $("#number-of-elevators").hide();
    $("#number-of-corporations").hide();
    $("#number-of-apartments").hide();
    $("#number-of-elevators").hide();
    myReset();
  } else {
    $("#options").hide();
  }
});
$("#buildingType").trigger("change");

//////////////////////////////////////////////////////////
$("input:radio").prop("checked", false);
