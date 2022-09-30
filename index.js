let count = 0;
let count_display_el = document.getElementById("count_display");
let save_display_el = document.getElementById("save_display");
let save_display_reset_str = "Passangers: ";
let save_display_str = save_display_reset_str;


// console.log(count_display_el);

function update_count_display(){
    count_display_el.innerText = count;
}

function update_save_display(){
    save_display_str += count;
    save_display_el.innerText = save_display_str;
    save_display_str += " - ";
    console.log("save_display_str");
}

function increase() {
    console.log("increase");
    count += 1;
    update_count_display();
    
}

function save(){
    console.log("save");
    console.log(save_display_el.innerText);
    update_save_display();
    count = 0;
    update_count_display();

}

function reset() {
    console.log("reset");
    count = 0;
    update_count_display(count);
    save_display_str = save_display_reset_str;
    save_display_el.innerText = save_display_str;
}

// update_count_display(count);
// reset();