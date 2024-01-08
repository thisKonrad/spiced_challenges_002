/* random char */
import Chance from 'chance';
const chance = new Chance();



export default function ChanceName(req, res) {

    if (!chance) {
        res.status(404).json({ status: 'Not Found!' });
    }


    const char = {
        firstName: chance.first(),
        lastName: chance.last(),
        twitterName: chance.twitter(),
        adress: chance.address(),
        geohash: chance.geohash({ length: 5 }),
        gender: chance.gender(),
        birthday: chance.birthday({ string: true }),
    };

    res.status(200).json(char);



}




