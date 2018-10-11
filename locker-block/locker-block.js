/** 
 * This function is locker constructor.
 * @param {string} params.lockerBlockTypeId - locker type id from locker library
 * @return {object} this - reference to the created locker
 */

function LockerBlock (params) {

    if (!(this instanceof LockerBlock)) {
        return new LockerBlock(params);
    }

    var lockerBlockTypeId = params.lockerBlockTypeId;

    var node = document.createElement('div');
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var lockersFromLibrary = document.querySelectorAll('#locker-library path[locker-block-id="'+lockerBlockTypeId+'"]');
    var i = 0;
    var childLockers = [];

    node.classList.add('locker-block','locker-block_theme_'+lockerBlockTypeId);
    svg.setAttribute('viewBox','0 0 50 150');
    svg.setAttribute('preserveAspectRatio','xMinYMin meet');

    node.appendChild(svg);

    for( i=0; i<lockersFromLibrary.length; i++) {
        var lockerParams = {};
        lockerParams.lockerNumber = i;
        lockerParams.lockerTypeId = lockersFromLibrary[i].getAttribute('id');
        lockerParams.lockerBlock = svg;
        var locker = new Locker(lockerParams);
        childLockers.push(locker);
        svg.appendChild(locker.node);
    }

    node.appendChild(svg);

    this.node = node;
    this.childLockers = childLockers;
    this.lockerBlockTypeId = lockerBlockTypeId;

    return this;
}