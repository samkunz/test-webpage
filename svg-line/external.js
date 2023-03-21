for (const id of ["x1", "y1", "x2", "y2"]) {
    const input = document.getElementById(id);
    input.addEventListener("input", updateValue);
}

function updateValue(e) {
    const inputID = e.srcElement.id;
    const value = e.target.value;

    const svgObject = document.getElementById("svg-object").contentDocument;
    const line = svgObject.getElementById("line");
    line.setAttribute(inputID, value);

    document.getElementById(inputID + "-text").textContent = value;
}