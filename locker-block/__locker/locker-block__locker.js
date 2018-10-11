/** 
 * This function is locker constructor.
 * @param {number} params.lockerNumber - number of the created locker
 * @param {object} params.lockerBlock - reference to parent locker block
 * @param {string} params.lockerTypeId - locker type id from locker library
 * @return {object} this - reference to the created locker
 */

function Locker (params) {

    if (!(this instanceof Locker)) {
        return new Locker(params);
    }

    var lockerNumber = params.lockerNumber;
    var lockerTypeId = params.lockerTypeId;
    var lockerBlock = params.lockerBlock;

    var node = document.createElementNS('http://www.w3.org/2000/svg','use');
    node.classList.add('locker-block__locker');
    node.setAttribute('href','#'+lockerTypeId);

    this.node = node;
    this.number = lockerNumber;    
    this.lockerBlockReference = lockerBlock;
    this.state = 'free'; // occupied, broken, booked
    this.occupiedBy = null; // client id
    this.occupiedSince = null; //time 

    return this;
}