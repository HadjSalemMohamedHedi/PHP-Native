<div>
    <h3>Quote of road freight</h3>
    <form class="formAirefreight" method="POST" action="mailingRoad.php" id="formRoadfreight">


    <div class="row airport">
            <div class="col-md-6">
                <h6>Name</h6>
                <div class="form-group">
                    <label class="control-label">Your Name</label>
                    <input type="text" name="Name" class="form-control" required />
                </div>
            </div>

            <div class="col-md-6">
                <h6>Surname</h6>
                <div class="form-group">
                    <label class="control-label">Surname</label>
                    <input type="text" name="Surname" class="form-control" required type="text" />
                </div>
            </div>

        </div>

        <div class="row airport">
            <div class="col-md-4">
                <h6>Email</h6>
                <div class="form-group">
                    <label class="control-label">Email</label>
                    <input type="email" name="Email" class="form-control" required />
                </div>
            </div>

            <div class="col-md-4">
                <h6>Phone</h6>
                <div class="form-group">
                    <label class="control-label">Phone</label>
                    <input type="text" name="Phone" class="form-control" required type="text" />
                </div>
            </div>

            <div class="col-md-4">
                <h6>Company</h6>
                <div class="form-group">
                    <label class="control-label">Company</label>
                    <input type="text" name="Company" class="form-control" required type="text" />
                </div>
            </div>

        </div>

        <div class="row airport">
            <div class="col-md-6">
                <h4>Port of loading</h4>
                <div class="form-group">
                    <label class="control-label">Enter an port</label>
                    <input type="text" name="portloading" class="form-control" required  onchange="changeInputroad()" />
                </div>

                <input class="form-check-input" type="checkbox" value="" id="pickuproad"> Need a pick up ?
                <div class="cityPickup" id="cityPickuproad">
                </div>

            </div>
            <div class="col-md-6">
                <h4>Port of discharge</h4>
                <div class="form-group">
                    <label class="control-label">Enter an port</label>
                    <input type="text" name="portdest" class="form-control" required type="text" onchange="changeInputroad()" />
                </div>


                <input class="form-check-input" type="checkbox" value="" id="deliveryroad"> Need a door delivery ?
                <div class="cityDelivery" id="cityDeliveryroad">
                </div>
            </div>

        </div>
        <div class="row trailerType">
            <h6>Trailer type</h6>
            <div class="col-md-3">
                <div><input class="form-check-input" type="checkbox" name="boxSemi" value="Box Semi-trailer"> Box Semi-trailer</div>
                <div><input class="form-check-input" type="checkbox" name="Tautliner" value="Tautliner"> Tautliner</div>
            </div>

            <div class="col-md-6">
                <div><input class="form-check-input" type="checkbox" name="Reefer" value="Reefer trailer"> Reefer trailer</div>
                <div><input class="form-check-input" type="checkbox" name="Flatbed" value="Flatbed Semi-trailer"> Flatbed Semi-trailer</div>
            </div>
        </div>

        <div class="row trailerType">
            <input type="text" class="form-control inputLeft" id="Weight" placeholder="Weight (kg)" name="Weight" onchange="changeInputroad()">
        </div>

        <div class="row trailerType">
            <input type="text" class="form-control inputLeft" id="nbofboxe" placeholder="No. of containers" name="nbofboxe" onchange="changeInputroad()" required>
        </div>

        <div class="row trailerType">
            <input type="text" name="commoditySea" class="form-control" id="commodity" placeholder="Commodity" onchange="changeInputroad()" required>
        </div>

        <div class="row trailerType">
            <div class="alert alert-primary alertSuccess" role="alert" id="alertSuccessroad">
                Your request has been sent successfully...
            </div>

            <div class="alert alert-danger alertDanger" role="alert" id="alertDangerroad">
                Problem sending email!!!
            </div>
            <div class="action">
                <button class="transx_button" type="button" id="submitRoad"><i class="fa-solid fa-floppy-disk"></i> Save</button>
                <button class="transx_button" type="reset"><i class="fa-solid fa-window-restore"></i> reset </button>
            </div>
        </div>

    </form>
</div>

