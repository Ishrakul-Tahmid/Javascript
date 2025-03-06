var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"]; 

function biggestFriend(friends){
    let bfnd = friends[0];

    for(let i=1; i<friends.length; i++){
        let fnd = friends[i];
        if(fnd.length>bfnd.length){
            bfnd = fnd;
        }
    }
    return bfnd;
}
console.log(biggestFriend(friends));