const formEvent = document.querySelector(".form");

formEvent.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(formEvent);
    var object = {};
    formData.forEach((value, key) => object[key] = value);
    object
    var json = JSON.stringify(object)
    object["integrations"] = object["integrations"].split(",").map(s => s.trim())
    console.log(object);
});