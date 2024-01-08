/* random char */
import Chance from 'chance';

const chance = new Chance();



export default function ChanceName(req, res) {
    res.status(200).json({ status: "api call ok!" });

    const character = {
        firstName: chance.first(),
        lastName: chance.last(),
    };

    console.log("names: ", firstName, '  ', lastName)


}


