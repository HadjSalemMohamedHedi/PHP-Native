var AllCargo = [];

function deleteLigne(id) {
    document.getElementById("NewCargoDetails" + id).remove();
    AllCargo = AllCargo.filter(function (el) { return el.ID != id; });
    // console.log("AllCargo")
    // console.log(AllCargo)
}


function saveair(id) {
    const Cargo = new Object();

    Cargo.ID = id;
    Cargo.nnbofboxe = document.getElementById("nnbofboxe" + id).value;
    Cargo.nLength = document.getElementById("nLength" + id).value;
    Cargo.nWidth = document.getElementById("nWidth" + id).value;
    Cargo.nHeight = document.getElementById("nHeight" + id).value;
    Cargo.nWeight = document.getElementById("nWeight" + id).value;

    if ($('#formAirefreight').valid()) {
        console.log("valid")

        AllCargo.push(Cargo)
        $("#btn" + id).prop('disabled', true);
    }else{
        console.log("invalid")
        changeInputaire();
    }


}



$(document).ready(function () {

    $('#idBox').click(function () {

        var id = Math.floor(Math.random() * 100) + 1;
        var NewCargoDetails = '<div  class="cargodetails" id="NewCargoDetails' + id + '"><input type="text" class="form-control" id="nnbofboxe' + id + '"  placeholder="No. of boxes" name="nnbofboxe" required><input type="text" class="form-control inputLeft" id="nLength' + id + '" placeholder="Length" name="nLength" required><input type="text" class="form-control inputLeft" id="nWidth' + id + '" placeholder="Width" name="nWidth" required><input type="text" class="form-control inputLeft" id="nHeight' + id + '" placeholder="Height" name="nHeight" required><input type="text" class="form-control inputLeft" id="nWeight' + id + '" placeholder="Weight (kg)" name="nWeight" required><button class="btn" id="btn' + id + '" type="button" onclick="saveair(' + id + ')"><i class="fa-solid fa-floppy-disk"></i> Save</button><button type="button" class="btn" id="" onclick="deleteLigne(' + id + ')"><i class="fa-solid fa-trash"></i> Delete</button></div>';

        $('#AllCargoDetails').append(NewCargoDetails)
    })






    // $('#idBox').click(function() {
    //     if ($('#idBox').is(':checked')) {
    //         $('#AllCargoDetails').append(NewCargoDetails)
    //     } else {
    //         $('#NewCargoDetails').remove();
    //     }
    // })



    $('#pickup').click(function () {
        if ($('#pickup').is(':checked')) {
            $("#cityPickup").show();
            $("#cityPickup").append('<input type="text" class="form-control cityPickupfrom" id="City"  onchange="changeInputaire()"  name="cityairfrom" placeholder="City" required><input type="text" class="form-control cityPickupfrom"  onchange="changeInputaire()"  id="Postcode" name="postcodfrom" placeholder="Postcode" required>')


        } else {
            $("#cityPickup").hide();
            $(".cityPickupfrom").remove();
            $(".cityPickupfrom").remove();

        }
    })

    $('#delivery').click(function () {
        if ($('#delivery').is(':checked')) {
            $("#cityDelivery").show();
            $("#cityDelivery").append('<input name="citydest" type="text" class="form-control citydelivfrom" id="City" placeholder="City"  onchange="changeInputaire()"  required><input name="postcodedest" type="text" class="form-control citydelivfrom"  onchange="changeInputaire()"  id="Postcode" placeholder="Postcode" required>');

        } else {
            $("#cityDelivery").hide();
            $(".citydelivfrom").remove();
            $(".citydelivfrom").remove();

        }
    })
});

$("#submit").click(function () {
    // console.log("AllCargo")
    // console.log(AllCargo)

    var jsonStringAllCargo = JSON.stringify(AllCargo);
    changeInputaire();
    changeSelect();
    $('#jsarray').val(jsonStringAllCargo);


    if ($('#formAirefreight').valid()) {
        const form = document.querySelector('form');
        const data = Object.fromEntries(new FormData(form).entries());

        $.ajax({
            type: "POST",
            url: "mailing.php",
            data: data, // serializes the form's elements.
            success: function (data) {
                if (data.includes("Success")) {
                    $(".alertSuccess").show();
                } else {
                    $(".alertDanger").show();
                }
            }
        });

    } else {
        $('#formAirefreight').find('input').each(function () {
            if ($(this).prop('required')) {
                if ($(this).val() == "") {
                    $(this).css("border", "1px solid red")
                } else {
                    $(this).css("border", "1px solid #ced4da")
                }
            }
        });
        $('#formAirefreight').find('select').each(function () {
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

function changeInputaire() {
    $('#formAirefreight').find('input').each(function () {
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
    $('#formAirefreight').find('select').each(function () {
        if ($(this).prop('required')) {
            if ($(this).val() == "") {
                $(this).css("border", "1px solid red")
            } else {
                $(this).css("border", "1px solid #ced4da")
            }
        }
    });
}