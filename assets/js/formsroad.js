var AllCargo = [];

function deleteLigne(id) {
    document.getElementById("NewCargoDetails" + id).remove();
    AllCargo = AllCargo.filter(function (el) { return el.ID != id; });
    // console.log("AllCargo")
    // console.log(AllCargo)
}


function saveroad(id) {
    const Cargo = new Object();

    Cargo.ID = id;
    Cargo.nnbofboxe = document.getElementById("nbofboxe" + id).value;

    var e = document.getElementById("ncontainerType" + id);
   // var strUser = e.options[e.selectedIndex].text;

    Cargo.ncontainerType =  e.options[e.selectedIndex].text;
    Cargo.nWeight = document.getElementById("nWeight" + id).value;

    if ($('#formRoadfreight').valid()) {
        AllCargo.push(Cargo)
        $("#btnSea" + id).prop('disabled', true);
    } else {
        changeInputroad();
    }

}



$(document).ready(function () {

    // $('#idBoxSea').click(function () {

    //     var id = Math.floor(Math.random() * 100) + 1;
    //     //  var NewCargoDetails = '<div  class="cargodetails" id="NewCargoDetails' + id + '"><input type="text" class="form-control" id="nnbofboxe' + id + '"  placeholder="No. of boxes" name="nnbofboxe" required><input type="text" class="form-control inputLeft" id="nLength' + id + '" placeholder="Length" name="nLength" required><input type="text" class="form-control inputLeft" id="nWidth' + id + '" placeholder="Width" name="nWidth" required><input type="text" class="form-control inputLeft" id="nHeight' + id + '" placeholder="Height" name="nHeight" required><input type="text" class="form-control inputLeft" id="nWeight' + id + '" placeholder="Weight (kg)" name="nWeight" required><button class="btn" id="btn' + id + '" type="button" onclick="saveroad(' + id + ')"><i class="fa-solid fa-floppy-disk"></i> Save</button><button type="button" class="btn" id="" onclick="deleteLigne(' + id + ')"><i class="fa-solid fa-trash"></i> Delete</button></div>';
    //     var NewCargoDetails = '<div  class="cargodetails" id="NewCargoDetails' + id + '"><select class="form-select" id="ncontainerType' + id + '"  name="ncontainerType' + id + '"  aria-label="Default select example"><option>Open this select menu</option><option value="20’">20’</option><option value="40’">40’</option><option value="40’ HC">40’ HC</option><option value="20’ REEFER">20’ REEFER</option><option value="40’ REEFER">40’ REEFER</option></select><input type="text" class="form-control inputLeft" placeholder="Weight (kg)" name="nWeight' + id + '"  id="nWeight' + id + '"  onchange="changeInputroad()" ><input type="text" class="form-control inputLeft" id="nbofboxe' + id + '" placeholder="No. of containers" "nbofboxe' + id + '" onchange="changeInputroad()" required><button class="btn" id="btnSea' + id + '" type="button" onclick="saveroad(' + id + ')"><i class="fa-solid fa-floppy-disk"></i> Save</button><button type="button" class="btn" id="" onclick="deleteLigne(' + id + ')"><i class="fa-solid fa-trash"></i> Delete</button></div>';




    //     $('#AllCargoDetailsSea').append(NewCargoDetails)
    // })




    $('#pickuproad').click(function () {
        if ($('#pickuproad').is(':checked')) {
            $("#cityPickuproad").show();
            $("#cityPickuproad").append('<input type="text" class="form-control cityPickupfrom" id="City"  onchange="changeInputroad()"  name="cityseafrom" placeholder="City" required><input type="text" class="form-control cityPickupfrom"  onchange="changeInputroad()"  id="Postcode" name="postcodfromsea" placeholder="Postcode" required>')


        } else {
            $("#cityPickupsea").hide();
            $(".cityPickupfrom").remove();
            $(".cityPickupfrom").remove();

        }
    })

    $('#deliveryroad').click(function () {
        if ($('#deliveryroad').is(':checked')) {
            $("#cityDeliveryroad").show();
            $("#cityDeliveryroad").append('<input name="citydestsea" type="text" class="form-control citydelivfrom" id="City" placeholder="City"  onchange="changeInputroad()"  required><input name="postcodedestsea" type="text" class="form-control citydelivfrom"  onchange="changeInputroad()"  id="Postcode" placeholder="Postcode" required>');

        } else {
            $("#cityDeliverysea").hide();
            $(".citydelivfrom").remove();
            $(".citydelivfrom").remove();

        }
    })
});

$("#submitRoad").click(function () {
     console.log("submitRoad")
    
   /* var jsonStringAllCargo = JSON.stringify(AllCargo);
    changeInputroad();
    changeSelect();
    $('#jsarraySea').val(jsonStringAllCargo);
*/

    if ($('#formRoadfreight').valid()) {
        const form = document.querySelector('#formRoadfreight');
        const data = Object.fromEntries(new FormData(form).entries());

        $.ajax({
            type: "POST",
            url: "mailingRoad.php",
            data: data, // serializes the form's elements.
            success: function (data) {
                if (data.includes("Success")) {
                    $("#alertSuccessroad").show();
                } else {
                    $("#alertDangerroad").show();
                }
            }
        });

    } else {
        $('#formRoadfreight').find('input').each(function () {
            if ($(this).prop('required')) {
                if ($(this).val() == "") {
                    $(this).css("border", "1px solid red")
                } else {
                    $(this).css("border", "1px solid #ced4da")
                }
            }
        });
        $('#formRoadfreight').find('select').each(function () {
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

function changeInputroad() {
    $('#formRoadfreight').find('input').each(function () {
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
    $('#formRoadfreight').find('select').each(function () {
        if ($(this).prop('required')) {
            if ($(this).val() == "") {
                $(this).css("border", "1px solid red")
            } else {
                $(this).css("border", "1px solid #ced4da")
            }
        }
    });
}