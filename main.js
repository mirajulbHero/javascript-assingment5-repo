
// heart countincresing

function heartValueIncrese(id){
    document.getElementById(id).addEventListener('click', function(){
        let heartCount = document.getElementById('heartCount');
        let heartCountValue = parseInt(heartCount.innerText);
        let heartNewCountValue = heartCountValue + 1;
        heartCount.innerText = heartNewCountValue;
    });
}
heartValueIncrese('nationalLoveButton')
heartValueIncrese('policeLoveButton')
heartValueIncrese('fireLoveButton')
heartValueIncrese('ambulanceLoveButton')
heartValueIncrese('womenLoveButton')
heartValueIncrese('corruptionLoveButton')
heartValueIncrese('electricityLoveButton')
heartValueIncrese('bracLoveButton')
heartValueIncrese('railwayLoveButton')

// call button function feature

// alert meassage feature
function nationAlertMeassage(){
    alert('calling National Emergency service 999...');
;}
function policeAlertMeassage(){
    alert('calling Police Emergency service 999...');
};
function fireAlertMeassage() {
    alert('calling Fire Emergency service 999...');
};
function ambulanceAlertMeassage() {
    alert('calling Ambulance Emergency service 1994-999999...');
};
function womenAlertMeassage() {
    alert('calling Ambulance Emergency service 109...');
};
function CorruptionAlertMeassage() {
    alert('calling Ambulance Emergency service 106...');
};
function electricityAlertMeassage() {
    alert('calling Ambulance Emergency service 16216...');
};
function bracAlertMeassage() {
    alert('calling Brac Emergency service 16445...');
};
function railwayAlertMeassage() {
    alert('calling Railway Emergency service 163...');
};

function makeCall (id){
    document.getElementById(id).addEventListener('click', function(){
    let takaCount = document.getElementById('taka');
    let takaCountValue = parseInt(taka.innerText);

    if (takaCountValue >= 20) {
        takaCountValue  -= 20;
        takaCount.innerText = takaCountValue;
      }
       else {
        alert("Not enough taka to make a call!");
      }

    
})
}
makeCall ('nationCallBtn')
makeCall ('policeCallBtn')
makeCall ('fireCallBtn')
makeCall ('ambulanceCallBtn')
makeCall ('womenCallBtn')
makeCall ('corruptionCallBtn')
makeCall ('electricityCallBtn')
makeCall ('bracCallBtn')
makeCall ('railwayCallBtn')


// show time function
function showTime(id){
    let time = new Date();
    document.getElementById(id).innerText =time.toLocaleTimeString();
}
showTime('nationClock');
showTime('policeClock');
showTime('fireClock');
showTime('ambulanceClock');
showTime('womenClock');
showTime('corruptionClock');
showTime('electricityClock');
showTime('bracClock');
showTime('railwayClock');




