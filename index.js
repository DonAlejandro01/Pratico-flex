/*Para que funcione el button se debe declarar el id en el html para que pueda ser identificado por el JS */
const alingEnd=()=>{
    document.getElementById("container-colum").style.alignItems = "flex-end";
}

const alingStart=()=>{
    document.getElementById("container-colum").style.alignItems = "flex-start";
}

const alingCenter =()=>{
    document.getElementById("container-colum").style.alignItems = "center";
}

/*Main Row */

const RowStart=()=>{
    document.getElementById("container-Row").style.justifyContent = "flex-start";

}

const RowCenter = () =>{
    document.getElementById("container-Row").style.justifyContent = "center";

}

const RowEnd = () =>{
    document.getElementById("container-Row").style.justifyContent = "flex-end";
}