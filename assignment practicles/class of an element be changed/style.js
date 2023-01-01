function changeClass() {
    document.getElementById('myButton')
            .className = "changedClass";
    var button_class = document.getElementById('myButton')
                               .className;
    document.getElementById('myPara')
            .innerHTML = "New class name: "
                         + button_class;
}