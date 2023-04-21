const formEvent = document.querySelector(".form");

formEvent.addEventListener("submit", event => {
    event.preventDefault();

    //take in form data, and convert it to a format fitting json
    const formData = new FormData(formEvent);
    var object = {};
    formData.forEach((value, key) => object[key] = value);
    object["integrations"] = object["integrations"].split(",").map(s => s.trim())

    //make filename
    var filename = object["name"]+".json";

    //convert to json string and save it for download
    var json = JSON.stringify(object)
    saveTextToFile(json,filename)
});

// receive text and put it in a file and download it with name as "name"
// Source: https://gist.github.com/clucle/8f6bb67f1f38ac5bb595f43a4efb8e0c
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
