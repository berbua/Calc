function openOrSenior(data){
    let memberAge = 0;
    let memberHandi = 0;
    let currentMember = 0;
    let currentStatus = "";

    return data.map(function() {
    for (let i =0; i< data.length; i++) {
    currentMember = data[i];
    memberAge = currentMember[0];
    memberHandi = currentMember[1];

    if (memberAge >= 55 && memberHandi > 7) {
    currentStatus = 'Senior';
    } else {currentStatus = 'Open'}
});