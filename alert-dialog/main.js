const alertDialog  = document.getElementById("alertDialog"); 
const iconAlertDialog = document.querySelector("#alertDialog .icon");
const titleAlertDialog = document.querySelector("#alertDialog .title");
const descriptionAlertDialog = document.querySelector("#alertDialog .description");

const openAlert = (typeAlert, descriptionAlert, icon) =>{

    titleAlertDialog.innerHTML = `${typeAlert}`;
    descriptionAlertDialog.innerHTML = descriptionAlert;
    iconAlertDialog.setAttribute("name", icon);

    alertDialog.className = `container-dialog ${typeAlert.toLowerCase()}`;

    alertDialog.showModal();
}

const closeAlert = () =>{
    alertDialog.close();
}

const openSuccessAlert = ()=>{  
    const descriptionAlert = 'This is a successful alert!'
    openAlert('success', descriptionAlert, 'checkmark-circle-outline');
}

const openWarningAlert = ()=>{  
    const descriptionAlert = 'This is a Warning alert!'
    openAlert('warning', descriptionAlert, 'warning-outline');
}

const openDangerAlert = ()=>{  
    const descriptionAlert = 'This is a Danger alert!'
    openAlert('danger', descriptionAlert, 'alert-circle-outline');
}