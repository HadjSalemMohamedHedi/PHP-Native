var AllCargo = [];

function deleteLigne(id) {
    document.getElementById("NewCargoDetails" + id).remove();
    AllCargo = AllCargo.filter(function (el) { return el.ID != id; });
    // console.log("AllCargo")
    // console.log(AllCargo)
}


function savecons(id) {
    const Cargo = new Object();

    Cargo.ID = id;
    Cargo.nbofpal = document.getElementById("nbofpal" + id).value;
    Cargo.flexRadioDefault1 = document.getElementById("flexRadioDefault1" + id).value;
    Cargo.Length = document.getElementById("Length" + id).value;
    Cargo.Width = document.getElementById("Width" + id).value;
    Cargo.Height = document.getElementById("Height" + id).value;
    Cargo.Weight = document.getElementById("Weight" + id).value;

    var e = document.getElementById("ncontainerType" + id);
    // Cargo.ncontainerType =  e.options[e.selectedIndex].text;
    // Cargo.nWeight = document.getElementById("nWeight" + id).value;

    if ($('#formCons').valid()) {       
        AllCargo.push(Cargo)
        $("#btnCons" + id).prop('disabled', true);
    } else {     
        changeInputcons();    
    } 
    
}



$(document).ready(function () {

    $('#idBoxPal').click(function () {
        var id = Math.floor(Math.random() * 100) + 1;

        var NewCargoDetails = '    <div class="row" id="NewCargoDetails'+id+'">   <div class="col-sm-6">            <h6>No. of pallets :</h6>            <input type="text" class="form-control inputLeft" id="nbofpal' + id + '" placeholder="No. of containers" name="nbofpal" onchange="changeInputcons()" required></div>        <div class="col-sm-6">            <h6>Stackable ?</h6>            <input class="form-check-input" type="radio" name="Yes" value="Yes" id="flexRadioDefault1' + id + '">Yes<br>            <input class="form-check-input" type="radio" name="Yes" value="No" id="flexRadioDefault1' + id + '">No        </div>        <div class="col-sm-6">            <h6>Length:</h6>            <input type="text" class="form-control inputLeft" id="Length' + id + '" placeholder="Length" name="Length" onchange="changeInputcons()" required>        </div>        <div class="col-sm-6">            <h6>Width:</h6>            <input type="text" class="form-control inputLeft" id="Width' + id + '" placeholder="Width" name="Width" onchange="changeInputcons()" required>        </div>        <div class="col-sm-6">            <h6>Height:</h6>            <input type="text" class="form-control inputLeft" id="Height' + id + '" placeholder="Height" name="Height" onchange="changeInputcons()" required>        </div>        <div class="col-sm-6">            <h6>Weight:</h6>            <input type="text" class="form-control inputLeft" id="Weight' + id + '" placeholder="Weight (kg)" name="Weight" onchange="changeInputcons()" required>        </div>    <button class="btn" id="btnCons' + id + '" type="button" onclick="savecons(' + id + ')"><i class="fa-solid fa-floppy-disk"></i> Save</button><button type="button" class="btn" id="" onclick="deleteLigne(' + id + ')"><i class="fa-solid fa-trash"></i> Delete</button></div>';



        $('#AllCargoDetailsCons').append(NewCargoDetails)
    })




    $('#pickupcons').click(function () {
        if ($('#pickupcons').is(':checked')) {
            $("#cityPickupcons").show();
            $("#cityPickupcons").append('<input type="text" class="form-control cityPickupfrom" id="City"  onchange="changeInputcons()"  name="cityseafrom" placeholder="City" required><input type="text" class="form-control cityPickupfrom"  onchange="changeInputcons()"  id="Postcode" name="postcodfromsea" placeholder="Postcode" required>')


        } else {
            $("#cityPickupcons").hide();
            $(".cityPickupfrom").remove();
            $(".cityPickupfrom").remove();

        }
    })

    $('#deliverycons').click(function () {
        if ($('#deliverycons').is(':checked')) {
            $("#cityDeliverycons").show();
            $("#cityDeliverycons").append('<input name="citydestsea" type="text" class="form-control citydelivfrom" id="City" placeholder="City"  onchange="changeInputcons()"  required><input name="postcodedestsea" type="text" class="form-control citydelivfrom"  onchange="changeInputcons()"  id="Postcode" placeholder="Postcode" required>');

        } else {
            $("#cityDeliverysea").hide();
            $(".citydeliverycons").remove();
            $(".citydelivfrom").remove();

        }
    })
});

$("#submitCons").click(function () {
    
    changeInputcons();
    changeSelect();

    var jsonStringAllCargo = JSON.stringify(AllCargo);
    $('#jsarrayCons').val(jsonStringAllCargo);



    if ($('#formCons').valid()) {
        const form = document.querySelector('#formCons');
        const data = Object.fromEntries(new FormData(form).entries());

        $.ajax({
            type: "POST",
            url: "mailingCons.php",
            data: data, // serializes the form's elements.
            success: function (data) {
                if (data.includes("Success")) {
                    $("#alertSuccessCons").show();
                } else {
                    $("#alertDangerCons").show();
                }
            }
        });

    } else {
        $('#formCons').find('input').each(function () {
            if ($(this).prop('required')) {
                if ($(this).val() == "") {
                    $(this).css("border", "1px solid red")
                } else {
                    $(this).css("border", "1px solid #ced4da")
                }
            }
        });
        $('#formCons').find('select').each(function () {
            if ($(this).prop('required')) {
                if ($(this).val() == "") {
                    $(this).css("border", "1px solid red")
                } else {
                    $(this).css("border", "1px solid #ced4da")
                }
            }
        });
    }

})

function changeInputcons() {
    $('#formCons').find('input').each(function () {
        if ($(this).prop('required')) {
            if ($(this).val() == "") {
                $(this).css("border", "1px solid red")
            } else {
                $(this).css("border", "1px solid #ced4da")
            }
        }
    });
}


function changeSelect() {
    $('#formCons').find('select').each(function () {
        if ($(this).prop('required')) {
            if ($(this).val() == "") {
                $(this).css("border", "1px solid red")
            } else {
                $(this).css("border", "1px solid #ced4da")
            }
        }
    });
}