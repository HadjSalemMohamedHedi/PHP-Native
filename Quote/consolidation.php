<div>
    <h3>CONSOLIDATION LTL/LCL</h3>
    <form class="formAirefreight" method="POST" action="mailingCons.php" id="formCons">


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
                    <input type="text" name="portloading" class="form-control" required />
                </div>

                <input class="form-check-input" type="checkbox" value="" id="pickupcons"> Need a pick up ?
                <div class="cityPickup" id="cityPickupcons">
                </div>

            </div>
            <div class="col-md-6">
                <h4>Port of discharge</h4>
                <div class="form-group">
                    <label class="control-label">Enter an port</label>
                    <input type="text" name="portdest" class="form-control" required type="text" />
                </div>


                <input class="form-check-input" type="checkbox" value="" id="deliverycons"> Need a door delivery ?
                <div class="cityDelivery" id="cityDeliverycons">
                </div>
            </div>
        </div>


        <div class="row trailerType">
            <h4>Cargo details</h4>
            <input type="hidden" id="jsarrayCons" name="jsarrayCons" value="" />

            <h6>Cargo nature:</h6>
            <input type="text" class="form-control inputLeft" id="cargonature" placeholder="Cargo nature" name="cargonature" onchange="changeInputcons()" required>
            <div class="AllCargoDetails" id="AllCargoDetailsCons">
                <div class="row">
                    <div class="col-sm-6">
                        <h6>No. of pallets :</h6>
                        <input type="text" class="form-control inputLeft" id="nbofpal" placeholder="No. of containers" name="nbofpal" onchange="changeInputcons()" required>
                    </div>
                    <div class="col-sm-6">
                        <h6>Stackable ?</h6>
                        <input class="form-check-input" type="radio" name="Yes" value="Yes" id="flexRadioDefault1">Yes<br>
                        <input class="form-check-input" type="radio" name="Yes" value="No" id="flexRadioDefault1">No
                    </div>
                    <div class="col-sm-6">
                        <h6>Length:</h6>
                        <input type="text" class="form-control inputLeft" id="Length" placeholder="Length" name="Length" onchange="changeInputcons()" required>
                    </div>
                    <div class="col-sm-6">
                        <h6>Width:</h6>
                        <input type="text" class="form-control inputLeft" id="Width" placeholder="Width" name="Width" onchange="changeInputcons()" required>
                    </div>
                    <div class="col-sm-6">
                        <h6>Height:</h6>
                        <input type="text" class="form-control inputLeft" id="Height" placeholder="Height" name="Height" onchange="changeInputcons()" required>
                    </div>
                    <div class="col-sm-6">
                        <h6>Weight:</h6>
                        <input type="text" class="form-control inputLeft" id="Weight" placeholder="Weight (kg)" name="Weight" onchange="changeInputcons()" required>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" class="transx_button" id="idBoxPal"><i class="fa-solid fa-circle-plus"></i> Add a pallet  </button>

        <div class="row trailerType">
            <div class="alert alert-primary alertSuccess" role="alert" id="alertSuccessCons">
                Your request has been sent successfully...
            </div>

            <div class="alert alert-danger alertDanger" role="alert" id="alertDangerCons">
                Problem sending email!!!
            </div>
            <div class="action">
                <button class="transx_button" type="button" id="submitCons"><i class="fa-solid fa-floppy-disk"></i> Save</button>
                <button class="transx_button" type="reset"><i class="fa-solid fa-window-restore"></i> reset </button>
            </div>
        </div>


    </form>

</div>