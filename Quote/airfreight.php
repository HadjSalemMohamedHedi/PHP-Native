<div>
    <h3>Quote of air freight</h3>
    <form class="formAirefreight" method="POST" action="mailing.php" id="formAirefreight">
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
                <h4>Airport of loading</h4>
                <div class="form-group">
                    <label class="control-label">Enter an airport</label>
                    <input id="autocomplete" name="airportloading" class="form-control" required type="text" />
                </div>

                <input class="form-check-input" type="checkbox" value="" id="pickup"> Need a pick up ?
                <div class="cityPickup" id="cityPickup">
                </div>

            </div>
            <div class="col-md-6">
                <h4>Airport of destination</h4>
                <div class="form-group">
                    <label class="control-label">Enter an airport</label>
                    <input id="autocompletedestination" name="airportdest" class="form-control" required type="text" />
                </div>
                <!-- <select name="airportdest" class="form-select" aria-label="Default select example" onchange="changeSelect()" required>
                            <option value="dd">t</option>
                        </select> -->


                <input class="form-check-input" type="checkbox" value="" id="delivery"> Need a door delivery ?
                <div class="cityDelivery" id="cityDelivery">
                </div>
            </div>

        </div>

        <div class="row">
            <div class="Cargo" id="Cargo">
                <h4>Cargo details</h4>
                <input type="text" name="commodity" class="form-control" id="commodity" placeholder="Commodity" onchange="changeInputaire()" required>
                <div class="AllCargoDetails" id="AllCargoDetails">
                    <div class="cargodetails" id="cargodetails">
                        <input type="hidden" id="jsarray" name="jsarray" value="" />
                        <input type="text" class="form-control" id="nbofboxe" placeholder="No. of boxes" name="nbofboxe" onchange="changeInputaire()" required>
                        <input type="text" class="form-control inputLeft" id="Length" placeholder="Length" name="Length" onchange="changeInputaire()" required>
                        <input type="text" class="form-control inputLeft" id="Width" placeholder="Width" name="Width" onchange="changeInputaire()" required>
                        <input type="text" class="form-control inputLeft" id="Height" placeholder="Height" name="Height" onchange="changeInputaire()" required>
                        <input type="text" class="form-control inputLeft" id="Weight" placeholder="Weight (kg)" name="Weight" onchange="changeInputaire()" required>
                    </div>
                </div>

                <button type="button" class="transx_button" id="idBox"><i class="fa-solid fa-circle-plus"></i> Add a box </button>
                <!-- <input class="form-check-input" type="checkbox" value="" id="idBox"> Add a box -->
            </div>

            <div class="alert alert-primary alertSuccess" role="alert">
                Your request has been sent successfully...
            </div>

            <div class="alert alert-danger alertDanger" role="alert">
                Problem sending email!!!
            </div>
            <div class="action">
                <button class="transx_button" type="button" id="submit"><i class="fa-solid fa-floppy-disk"></i> Save</button>
                <button class="transx_button" type="reset"><i class="fa-solid fa-window-restore"></i> reset </button>
            </div>
        </div>
    </form>

</div>