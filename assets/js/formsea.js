var AllCargo = [];

function deleteLigne(id) {
    document.getElementById("NewCargoDetails" + id).remove();
    AllCargo = AllCargo.filter(function (el) { return el.ID != id; });
    // console.log("AllCargo")
    // console.log(AllCargo)
}


function savesea(id) {
    const Cargo = new Object();

    Cargo.ID = id;
    Cargo.nnbofboxe = document.getElementById("nbofboxe" + id).value;

    var e = document.getElementById("ncontainerType" + id);
   // var strUser = e.options[e.selectedIndex].text;

    Cargo.ncontainerType =  e.options[e.selectedIndex].text;
    Cargo.nWeight = document.getElementById("nWeight" + id).value;

    if ($('#formSeafreight').valid()) {
        AllCargo.push(Cargo)
        $("#btnSea" + id).prop('disabled', true);
    } else {
        changeInputsea();
    }

}



$(document).ready(function () {

    $('#idBoxSea').click(function () {

        var id = Math.floor(Math.random() * 100) + 1;
        //  var NewCargoDetails = '<div  class="cargodetails" id="NewCargoDetails' + id + '"><input type="text" class="form-control" id="nnbofboxe' + id + '"  placeholder="No. of boxes" name="nnbofboxe" required><input type="text" class="form-control inputLeft" id="nLength' + id + '" placeholder="Length" name="nLength" required><input type="text" class="form-control inputLeft" id="nWidth' + id + '" placeholder="Width" name="nWidth" required><input type="text" class="form-control inputLeft" id="nHeight' + id + '" placeholder="Height" name="nHeight" required><input type="text" class="form-control inputLeft" id="nWeight' + id + '" placeholder="Weight (kg)" name="nWeight" required><button class="btn" id="btn' + id + '" type="button" onclick="savesea(' + id + ')"><i class="fa-solid fa-floppy-disk"></i> Save</button><button type="button" class="btn" id="" onclick="deleteLigne(' + id + ')"><i class="fa-solid fa-trash"></i> Delete</button></div>';
        var NewCargoDetails = '<div  class="cargodetails" id="NewCargoDetails' + id + '"><select class="form-select" id="ncontainerType' + id + '"  name="ncontainerType' + id + '"  aria-label="Default select example"><option>Open this select menu</option><option value="20’">20’</option><option value="40’">40’</option><option value="40’ HC">40’ HC</option><option value="20’ REEFER">20’ REEFER</option><option value="40’ REEFER">40’ REEFER</option></select><input type="text" class="form-control inputLeft" placeholder="Weight (kg)" name="nWeight' + id + '"  id="nWeight' + id + '"  onchange="changeInputsea()" ><input type="text" class="form-control inputLeft" id="nbofboxe' + id + '" placeholder="No. of containers" "nbofboxe' + id + '" onchange="changeInputsea()" required><button class="btn" id="btnSea' + id + '" type="button" onclick="savesea(' + id + ')"><i class="fa-solid fa-floppy-disk"></i> Save</button><button type="button" class="btn" id="" onclick="deleteLigne(' + id + ')"><i class="fa-solid fa-trash"></i> Delete</button></div>';

        $('#AllCargoDetailsSea').append(NewCargoDetails)
    })




    $('#pickupsea').click(function () {
        if ($('#pickupsea').is(':checked')) {
            $("#cityPickupsea").show();
            $("#cityPickupsea").append('<input type="text" class="form-control cityPickupfrom" id="City"  onchange="changeInputsea()"  name="cityseafrom" placeholder="City" required><input type="text" class="form-control cityPickupfrom"  onchange="changeInputsea()"  id="Postcode" name="postcodfromsea" placeholder="Postcode" required>')


        } else {
            $("#cityPickupsea").hide();
            $(".cityPickupfrom").remove();
            $(".cityPickupfrom").remove();

        }
    })

    $('#deliverysea').click(function () {
        if ($('#deliverysea').is(':checked')) {
            $("#cityDeliverysea").show();
            $("#cityDeliverysea").append('<input name="citydestsea" type="text" class="form-control citydelivfrom" id="City" placeholder="City"  onchange="changeInputsea()"  required><input name="postcodedestsea" type="text" class="form-control citydelivfrom"  onchange="changeInputsea()"  id="Postcode" placeholder="Postcode" required>');

        } else {
            $("#cityDeliverysea").hide();
            $(".citydelivfrom").remove();
            $(".citydelivfrom").remove();

        }
    })
});

$("#submitSea").click(function () {
    // console.log("AllCargo")
    // console.log(AllCargo)

    var jsonStringAllCargo = JSON.stringify(AllCargo);
    changeInputsea();
    changeSelect();
    $('#jsarraySea').val(jsonStringAllCargo);


    if ($('#formSeafreight').valid()) {
        const form = document.querySelector('#formSeafreight');
        const data = Object.fromEntries(new FormData(form).entries());

        $.ajax({
            type: "POST",
            url: "mailingSea.php",
            data: data, // serializes the form's elements.
            success: function (data) {
                if (data.includes("Success")) {
                    $("#alertSuccess").show();
                } else {
                    $("#alertDanger").show();
                }
            }
        });

    } else {
        $('#formSeafreight').find('input').each(function () {
            if ($(this).prop('required')) {
                if ($(this).val() == "") {
                    $(this).css("border", "1px solid red")
                } else {
                    $(this).css("border", "1px solid #ced4da")
                }
            }
        });
        $('#formSeafreight').find('select').each(function () {
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

function changeInputsea() {
    $('#formSeafreight').find('input').each(function () {
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
    $('#formSeafreight').find('select').each(function () {
        if ($(this).prop('required')) {
            if ($(this).val() == "") {
                $(this).css("border", "1px solid red")
            } else {
                $(this).css("border", "1px solid #ced4da")
            }
        }
    });
}