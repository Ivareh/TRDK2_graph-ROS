const formEvent = document.querySelector(".form");

formEvent.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(formEvent);
    var object = {};
    formData.forEach((value, key) => object[key] = value);
    object["integrations"] = object["integrations"].split(",").map(s => s.trim())
    var filename = object["name"]+".json";
    var json = JSON.stringify(object)
    saveTextToFile(json,filename)
});

function saveTextToFile(text, name) {

  // file setting
  const type = "text/plain";

  // create file
  const a = document.createElement("a");
  const file = new Blob([text], { type: type });
  a.href = URL.createObjectURL(file);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function saveJsonObjToFile() {
  const saveObj = { "a": 3 }; // tmp

  // file setting
  const text = JSON.stringify(saveObj);
  const name = "sample.json";
  const type = "text/plain";

  // create file
  const a = document.createElement("a");
  const file = new Blob([text], { type: type });
  a.href = URL.createObjectURL(file);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}