/** 
 * This function is locker constructor.
 * @param {number} lockerNumber - number of the created locker
 * @param {object} lockerBlock - reference to parent locker block
 * @param {string} lockerTypeId - locker type id from locker library
 * @return {object} this - reference to the created locker
 */

function Locker (lockerNumber, lockerBlock, lockerTypeId) {
    if (! (this instanceof Locker)) {
        return new Locker();
    }

    // this.node - create dome node and add link on it here
    this.number = lockerNumber;    
    this.lockerBlockReference = lockerBlock;
    this.state = 'free'; // occupied, broken, booked
    this.occupiedBy = null; // client id
    this.occupiedSince = null; //time 

    return this;
}