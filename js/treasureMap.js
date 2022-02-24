const theMap ="https://cartes.io/api/maps/020d4bd8-235a-4cf4-81ba-d7418ca7f77b";

initData();

function initData(){
    fetch(theMap).then(getJson).then(displayData).catch(reportError);
}

function getJson(aResponse){
    return aResponse.json();
}

function displayData(){
    console.log(theMap);
}

function reportError(anError) {
    console.log(anError);
  }