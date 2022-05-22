const DashboardHeader = () => {




function showBar(){
    var a = document.querySelector(".dashboard-navbar");
    var b = document.querySelector(".dashboard-content");
    var c = document.querySelector(".showBar");
    var d = document.querySelector(".hideBar");
        a.style.width = "20%";
        b.style.width = "100%";
        c.style.display = "none";
        d.style.display = "block";
    // if(window.innerWidth || window.documentElement.clientWidth || document.body.clientWidth < 1204){
    //     b.style.display = "100%";
    // } else {
        
    // }
}
function hideBar(){
    var a = document.querySelector(".dashboard-navbar");
    var b = document.querySelector(".dashboard-content");
    var c = document.querySelector(".showBar");
    var d = document.querySelector(".hideBar");
        a.style.width = "0%";
        b.style.width = "100%";
        c.style.display = "block";
        d.style.display = "none";
}

function showNotifications(){
    var a = document.querySelector(".gennotifbox");
    var b = document.querySelector(".messagesbox");
    a.style.display = "block";
    b.style.display = "none";
}
function showMessages(){
    var a = document.querySelector(".gennotifbox");
    var b = document.querySelector(".messagesbox");
    a.style.display = "none";
    b.style.display = "block";
}

function closeBoxes(){
    var a = document.querySelector(".gennotifbox");
    var b = document.querySelector(".messagesbox");
    a.style.display = "none";
    b.style.display = "none";
}
    
    
    
    
    return ( 
        <header className="dashboard-header">
            <div className="container-fluid">
                <div className="row justify-content-between p-1">
                    <div className="col-1 headerLogo">
                        <img src="assets/images/logo.svg" alt="" />
                    </div>

                    <div class="hideBar" onclick={
                        ()=>{
                            hideBar()
                        }
                    }>&#9776;</div>
                    <div class="showBar" onclick={
                        ()=>{
                            showBar()
                        }
                    }>&#9776;</div>
                    <div className="col-3 notifCenter">
                        <div className="genNotifs" onclick={()=>{
                            showNotifications()
                        }}></div>
                        <div className="messages" onclick={
                            ()=>{
                                showMessages()
                            }
                        }></div>
                        <div className="gennotifbox">
                                    <div className="closenotifbox" onclick="closeBoxes()">&times;</div>
                                    <div className="container-fluid singlenotifbox">
                                        <a href="#">
                                            <div className="row p-1">
                                                <div className="col-12">
                                                    <div className="container-fluid">
                                                        <div className="row p-0">
                                                            <div className="col-2 p-0">
                                                                <img src="assets/images/getcertified.jpg" alt="Notification image" />
                                                            </div>
                                                            <div className="col-10">
                                                                <span><b>Aime Cyuzuzo</b></span> <br />
                                                                <span>Requesting clarification</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="container-fluid singlenotifbox">
                                        <a href="#">
                                            <div className="row p-1">
                                                <div className="col-12">
                                                    <div className="container-fluid">
                                                        <div className="row p-0">
                                                            <div className="col-2 p-0">
                                                                <img src="assets/images/getcertified.jpg" alt="Notification image" />
                                                            </div>
                                                            <div className="col-10">
                                                                <span><b>Aime Cyuzuzo</b></span> <br />
                                                                <span>Requesting clarification</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="container-fluid singlenotifbox">
                                        <a href="#">
                                            <div className="row p-1">
                                                <div className="col-12">
                                                    <div className="container-fluid">
                                                        <div className="row p-0">
                                                            <div className="col-2 p-0">
                                                                <img src="assets/images/getcertified.jpg" alt="Notification image" />
                                                            </div>
                                                            <div className="col-10">
                                                                <span><b>Aime Cyuzuzo</b></span> <br />
                                                                <span>Requesting clarification</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                        </div>
                        <div className="messagesbox">
                            <div className="closenotifbox" onclick="closeBoxes()">&times;</div>
                            <div className="container-fluid singlenotifbox">
                                <a href="#">
                                    <div className="row p-1">
                                        <div className="col-12">
                                            <div className="container-fluid">
                                                <div className="row p-0">
                                                    <div className="col-2 p-0">
                                                        <img src="assets/images/getcertified.jpg" alt="Notification image" />
                                                    </div>
                                                    <div className="col-10">
                                                        <span><b>Aime Cyuzuzo</b></span> <br />
                                                        <span>Requesting clarification</span>
                                                        <br /> <small>6 hours ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="container-fluid singlenotifbox">
                                <a href="#">
                                    <div className="row p-1">
                                        <div className="col-12">
                                            <div className="container-fluid">
                                                <div className="row p-0">
                                                    <div className="col-2 p-0">
                                                        <img src="assets/images/getcertified.jpg" alt="Notification image" />
                                                    </div>
                                                    <div className="col-10">
                                                        <span><b>Aime Cyuzuzo</b></span> <br />
                                                        <span>Requesting clarification</span>
                                                        <br /> <small>6 hours ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="container-fluid singlenotifbox">
                                <a href="#">
                                    <div className="row p-1">
                                        <div className="col-12">
                                            <div className="container-fluid">
                                                <div className="row p-0">
                                                    <div className="col-2 p-0">
                                                        <img src="assets/images/getcertified.jpg" alt="Notification image" />
                                                    </div>
                                                    <div className="col-10">
                                                        <span><b>Aime Cyuzuzo</b></span> <br />
                                                        <span>Requesting clarification</span>
                                                        <br /> <small>6 hours ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                </div>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default DashboardHeader;