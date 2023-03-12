 var optFieldItems = document.getElementsByClassName("opt-main-content-li");

 var arrOptFiledItems = Array.from(optFieldItems);
 
 arrOptFiledItems.forEach(function(item){
    item.addEventListener('click', optActiveItems)
 })

 function optActiveItems(){
        var optActive = document.getElementsByClassName("opt-main-content-li-active")[0];
        optActive.classList.remove("opt-main-content-li-active");
        this.classList.add("opt-main-content-li-active");
 }