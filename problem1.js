let carInfo = function (inventory){
    for(let i=0;i<inventory.length;i++)
    {
        if(inventory[i]['id'] === 33)
        {
            console.log(`car 33 is a  ${inventory[i].car_year} ${inventory[i].car_model} ${inventory[i].car_make}`)
        }
    }
}
module.exports = carInfo

