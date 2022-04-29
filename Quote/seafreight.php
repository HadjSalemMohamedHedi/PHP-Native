<div>
    <h3>Quote of sea freight</h3>
    <form class="formAirefreight" method="POST" action="mailingSea.php" id="formSeafreight">


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

                <input class="form-check-input" type="checkbox" value="" id="pickupsea"> Need a pick up ?
                <div class="cityPickup" id="cityPickupsea">
                </div>

            </div>
            <div class="col-md-6">
                <h4>Port of discharge</h4>
                <div class="form-group">
                    <label class="control-label">Enter an port</label>
                    <input type="text" name="portdest" class="form-control" required type="text" />
                </div>


                <input class="form-check-input" type="checkbox" value="" id="deliverysea"> Need a door delivery ?
                <div class="cityDelivery" id="cityDeliverysea">
                </div>
            </div>

        </div>

        <div class="row">
            <div class="Cargo" id="Cargo">
                <h4>Cargo details</h4>
                <input type="text" name="commoditySea" class="form-control" id="commodity" placeholder="Commodity" onchange="changeInputsea()" required>
                <div class="AllCargoDetails" id="AllCargoDetailsSea">
                    <div class="cargodetails" id="cargodetails">
                        <input type="hidden" id="jsarraySea" name="jsarraySea" value="" />
                        <select class="form-select" name="containerType" aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="20’">20’</option>
                            <option value="40’">40’</option>
                            <option value="40’ HC">40’ HC</option>
                            <option value="20’ REEFER">20’ REEFER</option>
                            <option value="40’ REEFER">40’ REEFER</option>
                        </select>
                        <input type="text" class="form-control inputLeft" id="Weight" placeholder="Weight (kg)" name="Weight" onchange="changeInputsea()" >
                        <input type="text" class="form-control inputLeft" id="nbofboxe" placeholder="No. of containers" name="nbofboxe" onchange="changeInputsea()" required>
                    </div>
                </div>

                <button type="button" class="transx_button" id="idBoxSea"><i class="fa-solid fa-circle-plus"></i> Add a container  </button>
                <!-- <input class="form-check-input" type="checkbox" value="" id="idBox"> Add a box -->
            </div>

            <div class="alert alert-primary alertSuccess" role="alert" id="alertSuccess">
                Your request has been sent successfully...
            </div>

            <div class="alert alert-danger alertDanger" role="alert" id="alertDanger">
                Problem sending email!!!
            </div>
            <div class="action">
                <button class="transx_button" type="button" id="submitSea"><i class="fa-solid fa-floppy-disk"></i> Save</button>
                <button class="transx_button" type="reset"><i class="fa-solid fa-window-restore"></i> reset </button>
            </div>
        </div>
    </form>

</div>


