import { Destination } from './Destination';
import { Cargo } from './Cargo';
import { TrackingMap } from './TrackingMap';

new TrackingMap('g-map');

const destination = new Destination();
console.log(destination);

const cargo = new Cargo();
console.log(cargo);
