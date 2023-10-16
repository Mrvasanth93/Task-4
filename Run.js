//open modal
let modal =  document.querySelector('.modal');
let show_modal_btn = document.querySelectorAll('.show-modal');
let overlay = document.querySelector('.overlay');

//open modal function
function open_model(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
show_modal_btn.forEach(element => {
    element.addEventListener('click', open_model );
});

//close modal
let close_btn = document.querySelector('.close-modal');

//close modal function
function close_model(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    document.addEventListener('keyup', (event) =>{
        if(event.key == "Escape"){
            close_model();
        }
    })
}
close_btn.addEventListener('click',close_model);
overlay.addEventListener('click',close_model);
