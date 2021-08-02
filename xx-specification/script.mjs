import { Between } from 'spec-pattern';

let rules = new Between(1, 3);

console.log(rules.isSatisfiedBy(2));