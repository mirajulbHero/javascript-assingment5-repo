
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

// document.getElementById("loveButton").addEventListener('click', function(){
//     let heartCount = document.getElementById('heartCount');
//     let heartCountValue = parseInt(heartCount.innerText);
//     let heartNewCountValue = heartCountValue + 1;
//     heartCount.innerText = heartNewCountValue;
// });

